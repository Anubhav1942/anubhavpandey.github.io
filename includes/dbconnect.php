<?php
    
        $server = "sql309.epizy.com	";
        $username = "epiz_26850378";
        $password = "RPSgY3VCJp";
        $dbname = "epiz_26850378_anubhavpandeyportfolio	";
        
        $conn = mysqli_connect($server, $username, $password, $dbname);

        if(!$conn){
            die("connection Failed:" .mysqli_connect_error());
        }
?>