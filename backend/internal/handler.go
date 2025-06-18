package internal

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func GetResponseWriter(w http.ResponseWriter, res interface{}) {
	w.Header().Add("Content-Type", "application/json")
	w.Header().Add("By", "Suresh")
	w.WriteHeader(http.StatusOK)
	encoder := json.NewEncoder(w)
	encoder.Encode(res)
}

func PostResponseWriter(w http.ResponseWriter, res interface{}) {
	w.Header().Add("Content-Type", "application/json")
	w.Header().Add("By", "Suresh")
	w.WriteHeader(http.StatusCreated)
	encoder := json.NewEncoder(w)
	encoder.Encode(res)
}

func RequestReader(req *http.Request, res interface{}) error {
	decoder := json.NewDecoder(req.Body)
	err := decoder.Decode(res)
	fmt.Println(decoder)
	if err != nil {
		fmt.Println(err)
		return nil
	}

	return nil
}

func AuthChecker(w http.ResponseWriter, req *http.Request) error {
	token := req.Header.Get("Token")

	if token == "" {
		http.Error(w, "Missing token", http.StatusUnauthorized)
		return fmt.Errorf("missing token")
	}

	if token != "suresh" {
		http.Error(w, "Invalid token", http.StatusUnauthorized)
		return fmt.Errorf("invalid token")
	}

	return nil
}
