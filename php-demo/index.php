<?php

header('Content-type: application/json');

http_response_code(200);
echo json_encode([
    'status' => 'success',
    'message' => 'Você está aprendendo NGINX!',
]);
