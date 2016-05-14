<?php	
	$name = $_POST['name'];
	$tel = $_POST['tel'];
	$item = $_POST['item'];
		$message_to_myemail = '
		<table>
			<tbody>
				<tr style="background: #F4F4F4;">
					<td style="padding: 5px 10px">Имя:</td><td style="padding: 5px 10px">' . $name . '</td>
				</tr>
				<tr>
					<td style="padding: 5px 10px">Телефон:</td><td style="padding: 5px 10px">' . $tel . '</td>
				</tr>
				<tr style="background: #F4F4F4;">
					<td style="padding: 5px 10px">Выбраный товар:</td><td style="padding: 5px 10px">' . $item . '</td>
				</tr>
			</tbody>
		</table>';

	$from  = "From: <admin@smartwatch.ru> \r\n";
	$from .= "Content-type: text/html; charset=utf-8\r\n";

	$status = mail('smartmywatch@gmail.com', 'Сообщение с сайта Smart Watch', $message_to_myemail, $from);
	if($status){
		echo true;
	}else{
		echo false;
	}

?>