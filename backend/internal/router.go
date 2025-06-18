package internal

import (
	"database/sql"
	"fmt"
	"net/http"
)

type router struct {
	routes map[string]map[string]http.HandlerFunc
}

func NewRouter(db *sql.DB) *router {
	r := &router{
		routes: make(map[string]map[string]http.HandlerFunc),
	}

	s := NewService(db)
	r.addNewRoutes("POST", "/user", s.AddUser)
	r.addNewRoutes("GET", "/user", s.GetAllUser)
	return r
}

func (r *router) addNewRoutes(method string, path string, handlerFunction http.HandlerFunc) {
	if r.routes[path] == nil {
		r.routes[path] = make(map[string]http.HandlerFunc)
	}
	r.routes[path][method] = handlerFunction
	fmt.Println(r.routes)
}

func (r *router) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	if handlers, ok := r.routes[req.URL.Path]; ok {
		if handler, methodRouter := handlers[req.Method]; methodRouter {
			handler(w, req)
			return
		}
	}
	http.NotFound(w, req)
}
