Regex
Regular expression 
^$
^([a-z])$

var a = "Hi"
a.match("^([a-z])$")
null

var a = "hi"
a.match("^([a-z]+)$")

a.match("^([a-zA-Z0-9]{2,8})$")

var email = "a@a.com"
email.match("^([$a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")

var phone = 8567888458
undefined
phone.match("^([0-9]{10})$")
VM198:1 Uncaught TypeError: phone.match is not a function
    at <anonymous>:1:7
(anonymous) @ VM198:1
var phone = "8567888458"
undefined
phone.match("^([0-9]{10})$")
(2) ["8567888458", "8567888458", index: 0, input: "8567888458", groups: undefined]
var phone = "8567888458"
undefined
parseInt(phone)
8567888458

var phone = 856788845
undefined
phone.toString()
"856788845"