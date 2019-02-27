<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>mon script de réception</title>
</head>
<body>
    <h1>Et voilà</h1>
    <?php
    echo "Nom: ".$_REQUEST["nom"].'<br>';
    echo "Prénom: ".$_REQUEST["prenom"].'<br>';
    echo "Adresse: ".$_REQUEST["adresse"].'<br>';
    echo "Code postal: ".$_REQUEST["cp"].'<br>';
    echo "Ville: ".$_REQUEST["ville"].'<br>';
    echo "Telephone: ".$_REQUEST["telephone"].'<br>';
    echo "Mail: ".$_REQUEST["mail"];


    ?>
</body>
</html>