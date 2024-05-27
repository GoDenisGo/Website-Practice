package main

import (
	"log"
	"net/http"
)

func main() {
	log.Println("Server started at localhost:8080")

	http.Handle("/", http.FileServer(http.Dir("public")))

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
