<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nameRestaurant = htmlspecialchars($_POST['nameRestaurant']);
    $adress = htmlspecialchars($_POST['adress']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $turnover = htmlspecialchars($_POST['turnover']);
    $name = htmlspecialchars($_POST['name']);

    $to = "bioleoua@gmail.com";
    $subject = "Анкета з сайту";
    $message = "Назва ресторану: $nameRestaurant\nАдреса: $adress\nEmail: $email\nТелефон: $phone\nСередній обсяг олії в місяць: $turnover\nІм'я: $name";
    $headers = "From: webmaster@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Анкету успішно відправлено!";
    } else {
        echo "Помилка під час відправлення анкети.";
    }
} else {
    echo "Неправильний запит.";
}
?>