<?php
	include("/home/ebiztour/seabay.co.kr/config/config.php");
	include(INC_DIR."/class/go_basic.class.php");
?>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title><?=SITE_NAME_K_short;?></title>
    <meta name="title" content="<?=SITE_NAME_K_short;?>">
    <meta name="description" content="<?=site_description;?>">
    <meta name="keywords" content="밸류호텔, 씨베이호텔, 강릉, 강원도 호텔, 강릉호텔, 강릉호텔 추천, 평창올림픽, 올림픽 호텔, 평창 호텔, 포 호텔, 세인트존스호텔,강릉 씨마크호텔, 주문진호텔,강릉 숙박, 강릉 리조트,정동진, 정동진 호텔, 속초 호텔, 속초 호텔 추천, 양양, 양양호텔, 강원 패키지 예약, 강원 할인 특가, 호텔 예약, 객실 예약, 강릉 숙박, 강릉 맛집, 강릉 숙소, 강릉 리조트">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta property="og:type" content="website">
    <meta property="og:title" content="<?=SITE_NAME_K_short;?>">
    <meta property="og:description" content="<?=site_description;?>">
    <meta property="og:image" content="http://img.seabay.co.kr/svc/img/sample/sns_thumb.jpg">

    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800&display=swap" rel="stylesheet">
	
    <link rel="stylesheet" type="text/css" href="http://<?=$_SERVER["HTTP_HOST"];?>/mng/assets/hotelstory/amenitys/style.css" />
    <link rel="stylesheet" type="text/css" href="http://<?=$_SERVER["HTTP_HOST"];?>/lib/icomoon/style.css" />

    <link rel="stylesheet" type="text/css" href="http://static.seabay.co.kr/svc/common/css/init.min.css" />
    <link rel="stylesheet" type="text/css" href="http://static.seabay.co.kr/svc/css/style.min.css" />
    <link rel="stylesheet" type="text/css" href="http://static.seabay.co.kr/svc/common/javascript/lib/datepicker/css/theme01.css" />
    <link rel="stylesheet" type="text/css" href="http://static.seabay.co.kr/svc/lib/slick-master/slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="http://static.seabay.co.kr/svc/lib/slick-master/slick/slick-theme.css" />
    <link rel="stylesheet" type="text/css" href="http://static.seabay.co.kr/svc/common/javascript/lib/jquery/jquery-ui-1.12.1.min.css" />
    <!--link rel="shortcut icon" type="image/x-icon" href="http://img.seabay.co.kr/svc/img/symbol/favicon.ico" /-->	

    <script type="text/javascript" src="http://static.seabay.co.kr/svc/common/javascript/lib/jquery/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="http://static.seabay.co.kr/svc/common/javascript/lib/jquery/jquery-ui-1.12.1.min.js"></script>

    <!--[if lt IE 9]>
		<script type="text/javascript" src="http://static.seabay.co.kr/svc/common/javascript/lib/support/html5shiv.js"></script>
		<script type="text/javascript" src="http://static.seabay.co.kr/svc/common/javascript/lib/support/respond.min.js"></script>
    <![endif]-->
</head>

<?php
	$b_class = "";
	if($cus == "rooms" || $cus == "home") {
		$b_class = "class=\"page-home\"";
	}

	if($cus == "park") {
		$b_class = "class=\"page-landing\"";
	}
?>

<body <?=$b_class;?>>

    <header class="header">
        <div class="ajax_loader b_hide">
            <div>
                <img src="http://img.seabay.co.kr/svc/img/loader/loading.gif" />
                <p>처리 요청 중입니다.</p>
            </div>
        </div>

        <div class="image_view_container">
            <div class="view">
                <i class="icon-10 img-remove"></i>
            </div>
        </div>
        <div class="top_line">
            <div class="container">
                <ul class="box">
                    <li class="call"><i class="icon-05"></i> 1666-1243</li>
                    <li class="email"><i class="icon-03"></i> valuehotelgangneung@ebiznetworks.co.kr</li>
                </ul>
            </div>
        </div>
        <div class="top_box">
            <div class="container">
                <a href="http://seabay.co.kr">
                    <div class="top_logo">
						<img src="http://img.seabay.co.kr/svc/img/symbol/top_logo.png" alt="강릉씨베이호텔">
					</div>
                </a>
            </div>
        </div>
        <div class="top_navi">
            <div class="navi_scroll">
                <div class="container">
                    <a href="http://seabay.co.kr" class="logo_m">
                        <div class="top_logo_c">
							<img src="http://img.seabay.co.kr/svc/img/symbol/m_top_logo.png" alt="강릉씨베이호텔">
						</div>
                    </a>
                    <a class="side_toggle out"><i class="icon-30"></i></a>
                    <div class="left_overlay"></div>
                    <div class="list">
                        <button type="button" class="side_toggle"><i class="icon-29"></i></button>
                        <ul>
                            <li>
                                <a class="title">ACCOMMODATION</a>
                                <ul class="sub">
                                    <li><a href="/rooms/?r=18836">SUPERIOR</a></li>
                                    <li><a href="/rooms/?r=18837">DELUXE</a></li>
                                    <li><a href="/rooms/?r=19198">DELUXE FAMILY</a></li>
                                    <li><a href="/rooms/?r=18838">PREMIER DELUXE</a></li>
                                    <li><a href="/rooms/?r=18839">OCEAN SUITE</a></li>
                                    <li><a href="/rooms/?r=35055">OCEAN FAMILY SUITE</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="title">RESTAURANT & BAR</a>
                                <ul class="sub">
                                    <li><a href="/restaurant/?r=valueplate">VALUE PLATE</a></li>
                                    <li><a href="/restaurant/?r=lobbybar">BAR 59</a></li>
                                    <li><a href="/restaurant/?r=swimmingbar">SWIMMING BAR</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="title">FACILITIES</a>
                                <ul class="sub">
                                    <li><a href="/facilities/?r=banquethall">BANQUET HALL</a></li>
                                    <li><a href="/facilities/?r=swimmingpool">SWIMMING POOL</a></li>
                                    <li><a href="/facilities/?r=businesscorner">BUSINESS CORNER</a></li>
                                    <li><a href="/facilities/?r=heavenlypark">HEAVENLY PARK</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="title">HOTEL NEWS</a>
                                <ul class="sub">
                                    <li><a href="/main/about/">ABOUT SEABAY HOTEL</a></li>
                                    <li><a href="/main/factsheet/">FACT SHEET</a></li>
                                    <li><a href="/main/map/">LOCATION</a></li>
                                    <li><a href="/brd/lists/notice.php">NOTICE</a></li>
                                    <li><a href="https://www.gn.go.kr/tour/index.do" target="_blank">HOT PLACE</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>