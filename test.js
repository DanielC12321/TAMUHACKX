document.addEventListener('DOMContentLoaded', function() {
    console.log("Script is running")
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission action

        // Form data processing
        var name = document.getElementById('search').value;
        alert(name);

    });
});