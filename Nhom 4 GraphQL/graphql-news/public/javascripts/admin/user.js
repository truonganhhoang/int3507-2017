$(document).ready(function (e) {

    var graph = graphql("/graphql")//connect
    var user = graph(`query ($id: ID!){
				User(id:$id) {
				    email
                    name
                    company
                    first_name
                    last_name
                    address
                    city
                    contry
                    postal_code
                    about_me
				}
			}`, {
            id: userId
        }).then(function (response) {
            let user = response.User;
            var company = user.company;
            var username = user.name;
            var email = user.email;
            var firstName = user.first_name;
            var lastName = user.last_name;
            var address = user.address;
            var city = user.city;
            var country = user.contry;
            var postalCode = user.postal_code;
            var aboutMe = user.about_me;

            $('#company').val(company);
            $('#username').val(username);
            $('#email').val(email);
            $('#firstName').val(firstName);
            $('#lastName').val(lastName);
            $('#address').val(address);
            $('#city').val(city);
            $('#country').val(country);
            $('#zipCode').val(postalCode);
            $('#aboutMe').val(aboutMe);

            $('#title').text(firstName + " " + lastName);
            $('#smallTitle').text(username);
            $('#description').text("\"" + aboutMe + "\"");

            $('#loader-data').hide();

        }).catch(function (error) {
            alert("Error")
            console.log(error);
        })

        $('#btn-update').click(function(e){
            e.preventDefault();
            graph(`mutation($id:ID!,$email:String!,$name:String!,$company:String!,$first_name:String!,
                    $last_name:String,$address:String,$city:String,$contry:String,$postal_code:String!,$about_me:String!){
                    updateUser(
                        id:$id
                        data:{
                            email:$email
                            name:$name
                            company:$company
                            first_name:$first_name
                            last_name:$last_name
                            address:$address
                            city:$city
                            contry:$country
                            postal_code:$postalCode
                            about_me:$aboutMe
                        }
                    )
                }`, {
                    id:userId,
                    email:$('#email').val(),
                    name:$('#username').val(),
                    company: $('#company').val(),
                    first_name:$('#firstName').val(),
                    last_name: $('#lastName').val(),
                    address:$('#address').val(),
                    city:$('#city').val(),
                    country:$('#country').val(),
                    postalCode:$('#zipCode').val(),
                    aboutMe:$('#aboutMe').val()
                }).then(function (response) {
                    $('#loader-data').hide();
                }).catch(function (error) {
                    console.log(error)
                })
        });

});