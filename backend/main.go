package main

import (
	"fmt"
	"github/SureshS03/Project-M/backend/internal"
	"net/http"
)

func main() {
	db := internal.NewDB("postgres", "user=postgres dbname=project_m password=arya sslmode=disable")
	defer db.Close()
	router := internal.NewRouter(db)
	server := http.Server{
		Addr:    ":8080",
		Handler: router,
	}
	fmt.Println("server on 8080")
	err := server.ListenAndServe()
	if err != nil {
		fmt.Println(" main err", err)
	}
}
