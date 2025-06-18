package internal

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

func NewDB(dn string, ds string) *sql.DB {
	db, err := sql.Open(dn, ds)
	if err != nil {
		fmt.Println(err)
		return nil
	}

	if err := db.Ping(); err != nil {
		fmt.Println(err)
		return nil
	}
	fmt.Println("Connected to DB successfully")
	return db
}
