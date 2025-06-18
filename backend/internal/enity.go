package internal

import "time"

type Users struct {
	Id        int       `json:"id"`
	Username  string    `json:"username"`
	Email     string    `json:"email"`
	Password  string    `json:"password"`
	Bio       string    `json:"bio"`
	Joined_at time.Time `json:"joined_at"`
}

type Events struct {
	Id          int       `json:"event_id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Place       string    `json:"place"`
	Time        time.Time `json:"time"`
	Managerid   Users     `json:"manager_id"`
}

type Event_Speaker struct {
	Event_id Events `json:"event_id"`
	User_id  Users  `json:"user_id"`
}

type RSVP struct {
	User_id  Users     `json:"user_id"`
	Event_id Events    `json:"event_id"`
	Status   string    `json:"status"`
	RSVPtime time.Time `json:"rsvp_time"`
}

type Comments struct {
	Id         int       `json:"comment_id"`
	User_id    Users     `json:"user_id"`
	Event_id   Events    `json:"event_id"`
	Msg        string    `json:"comment_msg"`
	Created_at time.Time `json:"created_at"`
}

//TODO have to think about attendace and other enities and db
/*
type Attendance struct{
	Id int `json:"attendance"`
	User_id Users `json:"user_id"`
	Event_id Events `json:"event_id"`
	Managerid Users `json:"manager_id"`
}
*/
