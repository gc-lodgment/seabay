<footer class="footer">
        <div class="container">
            <ul class="sub_menu">
                <li class="active"><a href="/main/about">회사소개</a></li>
                <li class="l">|</li>
                <li><a href="/main/map">찾아오시는 길</a></li>
                <li class="l">|</li>
                <li><a href="/main/?r=access">이용약관</a></li>
                <li class="l">|</li>
                <li><a href="/main/?r=policy">개인정보취급방침이용약관</a></li>
                <li class="l">|</li>
                <li><a href="/main/?r=email">이메일무단수집금지</a></li>
            </ul>
			<?php
				if($cus != "park") {
			?>
            <div class="address">
                <div class="info">
                    <div>
                        <span>주소</span><b>강원도 강릉시 주문진읍 주문로 59</b>
                    </div>
                    <div>
                        <span>이메일</span><b>valuehotelgangneung@ebiznetworks.co.kr </b>
                    </div>
                    <div>
                        <span>예약실</span><b>1666-1243 </b>
                    </div>
                </div>
                <div class="info">
                    <div>
                        <span>사업자명</span><b>㈜강릉밸류호텔 </b>
                    </div>
                    <div>
                        <span>대표이사</span><b>송영철</b>
                    </div>
                    <div>
                        <span>사업자등록번호</span><b>275-81-00923</b>
                    </div>
                    <div>
                        <span>통신판매신고번호</span><b>제2017-서울강남-04727호</b>
                    </div>
                    <div>
                        <span><a onclick="openFtc('2758100923')">[사업자정보확인]</a></span>
                    </div>
                </div>
                <p>COPYRIGHT © 2018 VALUEHOTEL WORLDWIDE GANGNEUNG. ALL RIGHTS RESERVED.</p>
                <div class="footer_logo"></div>
            </div>
			<?php
				}
			?>
        </div>
    </footer>


    <script type="text/javascript" src="http://static.seabay.co.kr/svc/common/javascript/lib/jquery/jquery.parallax.js"></script>
    <script type="text/javascript" src="http://static.seabay.co.kr/svc/common/javascript/lib/datepicker/js/bootstrap-datepicker.min.js"></script>
    <script type="text/javascript" src="http://static.seabay.co.kr/svc/common/javascript/lib/support/jquery.placeholder.min.js"></script>
    <script type="text/javascript" src="http://static.seabay.co.kr/svc/common/javascript/lib/jquery.word-break-keep-all.min.js"></script>
	<!--[if lt IE 9]>
		<script type="text/javascript" src="http://static.seabay.co.kr/svc/common/javascript/lib/support/flexibility.min.js"></script>
	<![endif]-->

	<script type="text/javascript" src="http://static.seabay.co.kr/svc/common/javascript/lib/jssor/jssor.slider.min.js"></script>
    <script type="text/javascript" src="http://static.seabay.co.kr/svc/lib/slick-master/slick/slick.js"></script>
    <script type="text/javascript" src="http://static.seabay.co.kr/svc/common/javascript/func/function01.min.js"></script>
    <script type="text/javascript" src="http://static.seabay.co.kr/svc/js/script.min.js"></script>
</body>

</html>

<?php
	include(INC_DIR."/config/closedb.php");
?>