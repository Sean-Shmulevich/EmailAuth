// this variable should be set when the user created a deal
// When they create a deal its eitther the second or tthe first deal they are creating in this browser session
// After deal publish: ALWAYS unset locksuggest
//SO i can either fill lockSuggest with the user JSON thaat im using on load suggest
//OR i can set the json to Pending or something and then on suggest load function check if the json is pending
//or if it already haas something in it, if it has something return that, if it doesnt generate the suggest.

// Then on suggest, if locksuggest is set, then we know that the user has already
// created a deal and we should set

//Empty
//Full

//Question is can I get ,the store on the backend?
// cannot acess the sttored on nthe backend send a query paaram from create-offer

//I need the writable to be set only when a deal is created
//and store the user object in it
//and not updated until a new deal is created

//so set writable on suggest and reset it on deal creation
//lock is empty
//deal is posted always empty the link on deal creation
//lock is filled with suggest data
//lock is filled with deal data
//lock is set to empty after deal creation submit
import { writable } from 'svelte/store';

export const lockSuggest = writable({});
