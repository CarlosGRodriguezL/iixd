<html lang="de">
<head>
	<link rel="stylesheet" href="bootstrap.css" />
	<link rel="stylesheet" href="style.css" />
	<script type="text/javascript" src="jqueryv3.1.js" ></script>
	<script type="text/javascript" src="script.js" ></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="utf-8" />
</head>
<body>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-2">
			<a href="."><div id="logo"><img src="img/logo.jpg" /></div></a>
		</div>
		<div class="col-md-10" id="banner">
			<div style="height: 110px"></div>
			<div class="row">
				<div class="col-md-4 col-md-offset-1">
					<form class="form-inline">
						<div class="form-group">
							<input type="text" size="19" name="bn" placeholder="E-Mail" title="E-Mail" />
						</div>
						<div class="form-group">
							<input type="password" size="19" name="pw" placeholder="Passwort" title="Passwort" />
						</div>
						<button type="submit" class="btn btn-default">Login</button>
					</form>
				</div>
				<div class="col-md-3 col-md-offset-4">
					<form class="form-inline">
						<div class="form-group">
							<input type="text" size="20" name="bn" placeholder="Suchen ... " title="Suchen ..." />
						</div>
						<button type="button" class="btn">
							<span class="glyphicon glyphicon-search"></span>
						</button>
					</form>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div id="control">
				<ul>
					<li class="dropdown">
						<a href="." class="dropbtn">Studien</a>
						<div class="dropdown-content">
							<a href="#" onclick="hideBooksByClassName('hideBook'); ">Architektur</a>
							<a href="#" onclick="hideBooksByClassName('hideBook'); ">Elektrotechnik</a>
							<a href="#" onclick="hideBooksByClassName('hideBook'); ">Informatik</a>
							<a href="#" onclick="hideBooksByClassName('hideBook'); ">Maschinenbau</a>
						</div>
					</li>
					<li><a href=".?file=sellform">Inserieren</a></li>
				</ul>
			</div>
		</div>
		<div id="content" class="col-md-10">
			<?php include_once((!isset($_GET['file']) ? 'books' : $_GET['file']) . '.html'); ?>
		</div>
	</div>
</div>
</body>
</html>
