function registration(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!DOCTYPE html><html><head><link rel=\"stylesheet\" href=\"/stylesheets/registration.css\"></head><body><div class=\"container\"></div><div class=\"col-md-12\"><div id=\"logbox\"><form id=\"signup\" method=\"post\" action=\"signup\"><h1>" + (jade.escape(null == (jade_interp = "create an account") ? "" : jade_interp)) + "</h1><input name=\"username\" type=\"text\" placeholder=\"What's your username\" pattern=\"^[w]{3,16}$\" autofocus=\"autofocus\" required=\"true\" class=\"input\"><input name=\"password1\" type=\"password\" placeholder=\"Choose a password\" required=\"true\" class=\"input pass\"><input name=\"password2\" type=\"text\" placeholder=\"Confirm password\" required=\"true\" class=\"input pass\"><input name=\"email\" type=\"text\" placeholder=\"Email address\" pattern=\"^[w]{3,16}$\" required=\"true\" class=\"input\"><input type=\"submit\" value=\"Sign me up!\" class=\"inputButton\"><div class=\"text-center\">already have an account?<a href=\"#login\">  login</a></div></form></div></div></body></html>");;return buf.join("");
}