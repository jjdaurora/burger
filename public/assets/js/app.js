$(function() {

    $(".devour-button").on("click", function(event) {
        var id = $(this).data("id"); 
    
        var devouredBurger = {
            devoured: true
        }

        $.ajax("api/burger/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(
            function() {
                console.log("Burger is devoured");
                location.reload();
            }
        )
    });

    $("#burger-submit").on("click", function(event) {
        event.preventDefault(); 
        var newBurger = {
            burger_name: $("#add-burger-name").val().trim()
        };

            $.ajax("api/burger", {
                type: "POST",
                data: newBurger
            }).then (
                function() {
                    location.reload();
                });
    });
});