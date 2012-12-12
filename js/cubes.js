function placeCubes(){


// Cinza Quadrangulares Pequenos - 85x85mm – O que quiser dar
var cqp = 10;
// Amarelos Quadrangulares Pequenos - 85x85mm - 25€
var aqp = 25;
// Laranjas Quadrangulares Pequenos - 85x85mm - 50€
var lqp = 50;
// Cinza Rectangulares Pequenos - 85x210mm - 75€
var crp = 75;
// Amarelos Rectangulares Pequenos - 85x210mm - 100€
var arp = 100;
// Cinza Rectangulares Grande - 85x210mm - 200€
var crg = 300;
// Vermelhos Rectangulares Pequenos - 85x210mm - 250€
var vrp = 250;
// Roxo Quadrangulares - 210x210mm - 500€
var rq = 500;
// Vermelhos Quadrangulares - 210x210mm - 1000€
var vq = 1000;
// Laranja Rectangulares Grandes - 210x335mm - 4500€
var lrg = 4500;
// Roxo Rectangulares - 210x335mm - 9500€
var rr = 9500;

 
 lqp = 50, crp = 75, arp = 100, rrp = 4500, rrg = 9500, vq = 1000, rq = 500, vrp = 250;

	createCubeInPosition("C001", -500,500,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C002", -470,500,0, 20, 20,  cinza, cqp);
	createCubeInPosition(3, -500,440,0, 50, 50,  cinza, crg);
	createCubeInPosition(4, -500,380,0, 50, 50,  cinza, crg);
	createCubeInPosition(5, -500,380,0, 50, 50,  cinza, crg);

	createCubeInPosition(6, -500,320,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition(7, -500,260,0, 50, 50,  vermelho, vq);
	createCubeInPosition(8, -500,230,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(10, -500,200,0, 50, 20,  amarelo, arp);

	createCubeInPosition(11, -500,110,0, 50, 50,  cinza, crg);

	createCubeInPosition(12, -500,50,0, 50, 50,  roxo, rq);
	createCubeInPosition(13, -480,20,0, 50, 20,  cinza, crp);
	createCubeInPosition(14, -500,-10,0, 50, 20,  cinza, crp);

	//2 coluna

	createCubeInPosition("C003", -440,500,0, 50, 20,  cinza, crp);
	createCubeInPosition(16, -440,440,0, 50, 50,  cinza, crg);

	createCubeInPosition(17, -440,380,0, 50, 50,  cinzaescuro, 0);

	createCubeInPosition(18, -440,320,0, 50, 50,  vermelho, vq);
	createCubeInPosition(19, -440,290,0, 50, 20,  amarelo, arp);
	createCubeInPosition(20, -440,260,0, 50, 20,  amarelo, arp);

	createCubeInPosition(21, -440,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(22, -410,230,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(23, -440,200,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(24, -410,200,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(25, -440,170,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(26, -410,170,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(27, -440,140,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(28, -410,140,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(29, -440,110,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(30, -410,110,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(31, -440,80,0, 50, 20,  amarelo, arp);

	createCubeInPosition(32, -410,20,0, 50, 50,  vermelho, vq);
	createCubeInPosition(33, -440,-10,0, 20, 20,  cinza, cqp);

	//3 coluna
	createCubeInPosition("C004", -380,500,0, 50, 20,  cinza, crp);
	createCubeInPosition(35, -380,440,0, 50, 50,  cinzaescuro, 0);

	createCubeInPosition(36, -380,380,0, 50, 50,  roxo, rq);

	createCubeInPosition(37, -380,350,0, 50, 20,  amarelo, arp);
	createCubeInPosition(38, -380,320,0, 50, 20,  amarelo, arp);

	createCubeInPosition(39, -380,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(40, -350,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(41, -380,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(42, -350,260,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(43, -380,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(44, -350,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(45, -380,200,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(46, -350,200,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(47, -380,170,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(48, -350,170,0, 20, 20,  laranja, lqp);
	createCubeInPosition(49, -380,140,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(50, -350,140,0, 20, 20,  laranja, lqp);

	createCubeInPosition(51, -380,110,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(52, -350,110,0, 20, 20,  laranja, lqp);
	createCubeInPosition(53, -380,80,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(54, -350,80,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(55, -350,50,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(56, -380, -10 ,0, 20, 20,  cinza, cqp);
	createCubeInPosition(57, -350, -10 ,0, 50, 20,  cinza, crp);


	//4 coluna	
	createCubeInPosition("C005", -320,500,0, 50, 20,  cinza, crp);
	createCubeInPosition(59, -320,440,0, 50, 50,  roxo, rq);
	createCubeInPosition(60, -320,380,0, 50, 50,  vermelho, vq);
	createCubeInPosition(61, -320,350,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(62, -320,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(63, -290,320,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(64, -320,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(65, -290,290,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(66, -320,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(67, -290,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(68, -320,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(69, -290,230,0, 20, 20,  laranja, lqp);

	createCubeInPosition(70, -320,200,0, 20, 20,  laranja, lqp);
	createCubeInPosition(71, -290,200,0, 20, 20,  laranja, lqp);
	createCubeInPosition(72, -320,170,0, 20, 20,  laranja, lqp);
	createCubeInPosition(73, -290,170,0, 20, 20,  laranja, lqp);

	createCubeInPosition(74, -320,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition(75, -290,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition(76, -320,110,0, 20, 20,  laranja, lqp);
	createCubeInPosition(77, -290,110,0, 20, 20,  laranja, lqp);
	createCubeInPosition(78, -320,80,0, 20, 20,  laranja, lqp);
	createCubeInPosition(79, -290,80,0, 20, 20,  laranja, lqp);
	createCubeInPosition(80, -320,50,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(81, -290,50,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(82, -320,20,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(83, -290,20,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(84, -290,-10,0, 20, 20,  cinza, cqp);

	//5coluna
	createCubeInPosition("C006", -260,470,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition(86, -260,410,0, 50, 50,  roxo, rq);

	createCubeInPosition(87, -260,380,0, 50, 20,  vermelho, vrp);
	createCubeInPosition(88, -260,350,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(89, -260,320,0, 50, 20,  amarelo, arp);

	createCubeInPosition(90, -260,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(91, -230,290,0, 50, 20,  amarelo, arp);
	createCubeInPosition(92, -260,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(93, -230,260,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(94, -260,230,0, 20, 20,  laranja, lqp);
	createCubeInPosition(95, -230,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(96, -260,200,0, 20, 20,  laranja, lqp);
	createCubeInPosition(97, -230,200,0, 20, 20,  laranja, lqp);

	createCubeInPosition(98, -260,170,0, 20, 20,  laranja, lqp);
	createCubeInPosition(99, -230,170,0, 20, 20,  laranja, lqp);

	createCubeInPosition(100, -260,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition(101, -230,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition(102, -260,110,0, 20, 20,  laranja, lqp);
	createCubeInPosition(103, -230,110,0, 20, 20,  laranja, lqp);

	createCubeInPosition(104, -260,80,0, 20, 20,  laranja, lqp);
	createCubeInPosition(105, -230,80,0, 20, 20,  laranja, lqp);
	createCubeInPosition(106, -260,50,0, 20, 20,  laranja, lqp);
	createCubeInPosition(107, -230,50,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(108, -260,20,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(109, -230,-10,0, 50, 50,  cinza, crg);
	createCubeInPosition(110, -260,-10,0, 20, 20,  cinza, cqp);

	//6 coluna
	createCubeInPosition("C007", -170,500,0, 50, 20,  cinza, crp);
	createCubeInPosition(112, -200,440,0, 50, 50,  cinzaescuro, 0);

	createCubeInPosition(113, -200,380,0, 50, 50,  roxo, rq);

	createCubeInPosition(114, -200,350,0, 50, 20,  vermelho, vrp);
	createCubeInPosition(115, -200,320,0, 50, 20,  amarelo, arp);

	createCubeInPosition(116, -170,290,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(117, -200,260,0, 50, 20,  amarelo, arp);

	createCubeInPosition(118, -200,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(119, -170,230,0, 50, 20,  amarelo, arp);

	createCubeInPosition(120, -200,200,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(121, -170,200,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(122, -200,170,0, 20, 20,  laranja, lqp);
	createCubeInPosition(123, -170,170,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(124, -200,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition(125, -170,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition(126, -200,110,0, 20, 20,  laranja, lqp);
	createCubeInPosition(127, -170,110,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(128, -200,80,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(129, -170,80,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(130, -200,50,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(131, -170,-10,0, 20, 20,  cinza, cqp);

	//6coluna
	createCubeInPosition("C008", -110,470,0, 50, 50,  cinza, crg);
	createCubeInPosition(133, -140,410,0, 80, 50,  laranja, lrg);
	createCubeInPosition(134, -140,350,0, 80, 50,  roxo, rr);

	createCubeInPosition(135, -140,320,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(136, -140,260,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(137, -110,230,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(138, -140,200,0, 50, 20,  amarelo, arp);

	createCubeInPosition(139, -140,170,0, 20, 20,  amarelo, aqp);
	// aqui está o quadrado que foi lá para o fundo

	createCubeInPosition(141, -140,140,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(142, -110,140,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(143, -140,110,0, 50, 20,  amarelo, arp);


	createCubeInPosition(144, -140,20,0, 50, 50,  vermelho, vq);
	createCubeInPosition(145, -140,-10,0, 50, 20,  cinza, crp);


	//7 coluna
	createCubeInPosition("C009", -50,500,0, 20, 20,  cinza, cqp);
	createCubeInPosition(147, -50,380,0, 20, 20,  cinza, cqp);	
	createCubeInPosition(148, -80,290,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition(149, -80,170,0, 50, 50,  roxo, rq);
	createCubeInPosition(150, -80,80,0, 50, 50,  roxo, rq);
	createCubeInPosition(151, -80,20,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition(152, -50,-10,0, 20, 20,  cinza, cqp);

	//8 coluna				

	createCubeInPosition(153, -20,500,0, 50, 20,  cinzaescuro, 0);
	createCubeInPosition(154, -20,470,0, 50, 20,  cinza, crp);
	createCubeInPosition(155, -20,440,0, 50, 20,  cinza, crp);

	createCubeInPosition(156, -20,410,0, 50, 20,  cinza, crp);
	createCubeInPosition(157, -20,380,0, 50, 50,  cinza, crg);
	createCubeInPosition(158, -20,350,0, 50, 20,  cinza, crp);

	createCubeInPosition(159, -20,290,0, 50, 50,  cinza, crg);

	createCubeInPosition(160, -20,230,0, 80, 50,  laranja, lrg);

	createCubeInPosition(161, -20,200,0, 20, 20,  cinza, cqp);
	createCubeInPosition(162, 10,170,0, 50, 50,  cinza, crg);

	createCubeInPosition(163, -20,110,0, 50, 50,  cinza, crg);

	createCubeInPosition(164, -20,50,0, 50, 50,  cinza, crg);

	createCubeInPosition(165, -20,-10,0, 50, 50,  cinza, crg);


	//9 coluna
	createCubeInPosition(166, 40,500,0, 20, 20,  cinza, cqp);

	createCubeInPosition(167, 40,470,0, 20, 20,  cinza, cqp);
	createCubeInPosition(168, 70,470,0, 20, 20,  cinza, cqp);

	createCubeInPosition(169, 40,440,0, 20, 20,  cinza, cqp);
	createCubeInPosition(170, 70,440,0, 20, 20,  cinza, cqp);

	createCubeInPosition(171, 40,410,0, 20, 20,  cinza, cqp);
	createCubeInPosition(172, 70,410,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition(173, 40,380,0, 50, 20,  cinza, crp);
	//the big one
	createCubeInPosition(174, 40, 290,0, 80, 80,  vermelho, 15000);

	createCubeInPosition(175, 70,230,0, 50, 50,  cinza, crg);

	createCubeInPosition(176, 70,200,0, 50, 20,  cinza, crp);
	createCubeInPosition(177, 70,170,0, 50, 20,  cinza, crp);

	createCubeInPosition(178, 40,110,0, 50, 50,  cinza, crg);
	createCubeInPosition(179, 40,80,0, 50, 20,  cinza, crp);
	createCubeInPosition(180, 40,20,0, 50, 50,  cinza, crg);

	createCubeInPosition(181, 70,-10,0, 50, 20,  cinza, crp);


	//8 coluna
	createCubeInPosition(182, 100,500,0, 20, 20,  cinza, cqp);

	createCubeInPosition(183, 100,440,0, 20, 20,  cinza, cqp);

	createCubeInPosition(184, 100,380,0, 20, 20,  cinza, cqp);

	createCubeInPosition(185, 100,140,0, 50, 20,  cinza, crp);
	createCubeInPosition(186, 100,110,0, 50, 20,  cinza, crp);
	createCubeInPosition(187, 100,80,0, 50, 20,  cinza, crp);
	createCubeInPosition(188, 100,50,0, 50, 20,  cinza, crp);

	createCubeInPosition(189, 100,20,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition(190, 130,-10,0, 20, 20,  cinza, cqp);

	//9 coluna
	createCubeInPosition(191, 160,500,0, 20, 20,  cinza, cqp);
	createCubeInPosition(192, 160,470,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition(193, 130,470,0, 20, 20,  cinza, cqp);
	createCubeInPosition(194, 130,440,0, 20, 20,  cinza, cqp);
	createCubeInPosition(195, 130,410,0, 20, 20,  cinza, cqp);
	createCubeInPosition(196, 130,380,0, 20, 20,  cinza, cqp);
	createCubeInPosition(197, 130,350,0, 20, 20,  cinza, cqp);

	createCubeInPosition(198, 130,290,0, 20, 20,  cinza, cqp);
	createCubeInPosition(199, 130,260,0, 20, 20,  cinza, cqp);
	createCubeInPosition(200, 130,230,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition(201, 130, 170, 0, 50, 20,  cinza, crp);


	//10 coluna
	createCubeInPosition(202, 190,500,0, 20, 20,  cinza, cqp);

	createCubeInPosition(203, 160,410,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition(204, 160,380,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition(205, 160,350,0, 20, 20,  cinza, cqp);
	createCubeInPosition(206, 190,350,0, 20, 20,  cinza, cqp);
	createCubeInPosition(207, 160,320,0, 20, 20,  cinza, cqp);
	createCubeInPosition(208, 190,320,0, 20, 20,  cinza, cqp);

	createCubeInPosition(209, 160,290,0, 20, 20,  cinza, cqp);

	createCubeInPosition(210, 160,260,0, 20, 20,  cinza, cqp);
	createCubeInPosition(211, 190,260,0, 20, 20,  cinza, cqp);


	createCubeInPosition(212, 160,200,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition(213, 190,170,0, 20, 20,  cinza, cqp);
	createCubeInPosition(214, 190,140,0, 20, 20,  cinza, cqp);


	createCubeInPosition(215, 160,110,0, 20, 20,  cinza, cqp);
	createCubeInPosition(216, 190,110,0, 20, 20,  cinza, cqp);
	createCubeInPosition(217, 160,80,0, 20, 20,  cinza, cqp);
	createCubeInPosition(218, 190,80,0, 20, 20,  cinza, cqp);
	createCubeInPosition(219, 160,50,0, 20, 20,  cinza, cqp);
	createCubeInPosition(220, 190,50,0, 20, 20,  cinza, cqp);

	createCubeInPosition(221, 160,-10,0, 50, 50,  cinza, crg);

	//estes sao em baixo mas ja perdi a coluna
	createCubeInPosition(222, 310,50,0, 20, 20,  cinza, cqp);
	createCubeInPosition(223, 310,20,0, 20, 20,  cinza, cqp);

	//11 coluna
	createCubeInPosition(224, 220,470,0, 50, 50,  roxo, rq);
	createCubeInPosition(225, 220,410,0, 80, 50,  roxo, rr);

	createCubeInPosition(226, 220,350,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition(227, 220,290,0, 50, 50,  cinza, crg);

	createCubeInPosition(228, 220,260,0, 50, 20,  cinza, crp);


	createCubeInPosition(229, 220,230,0, 20, 20,  cinza, cqp);
	createCubeInPosition(230, 220,200,0, 20, 20,  cinza, cqp);

	createCubeInPosition(231, 250,200,0, 50, 50,  cinza, crg);

	createCubeInPosition(232, 250,170,0, 50, 20,  cinza, crp);

	createCubeInPosition(233, 220,140,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition(234, 220,110,0, 20, 20,  cinza, cqp);
	createCubeInPosition(235, 250,110,0, 20, 20,  cinza, cqp);
	createCubeInPosition(236, 220,80,0, 20, 20,  cinza, cqp);
	createCubeInPosition(237, 250,80,0, 20, 20,  cinza, cqp);

	createCubeInPosition(238, 250,50,0, 20, 20,  cinza, cqp);

	createCubeInPosition(239, 220,20,0, 20, 20,  cinza, cqp);
	createCubeInPosition(240, 220,-10,0, 20, 20,  cinza, cqp);

	createCubeInPosition(241, 250,-10,0, 50, 20,  cinza, crp);

	//12 coluna
	createCubeInPosition(242, 280,470,0, 50, 50,  vermelho, vq);
	//roxo grande cima
	createCubeInPosition(243, 280,320,0, 50, 50,  roxo, rq);

	createCubeInPosition(244, 310,440,0, 50, 20,  vermelho, vrp);
	createCubeInPosition(245, 310,380,0, 50, 50,  vermelho, vq);


	createCubeInPosition(246, 280,260,0, 50, 50,  cinzaescuro, 0);

	createCubeInPosition(247, 310,170,0, 80, 50,  laranja, lrg);

	createCubeInPosition(248, 280,110,0, 50, 50,  cinza, crg);

	createCubeInPosition(249, 280,80,0, 20, 20,  cinza, cqp);
	createCubeInPosition(250, 280,50,0, 20, 20,  cinza, cqp);
	createCubeInPosition(251, 280,20,0, 20, 20,  cinza, cqp);

	//13 coluna
	createCubeInPosition(252, 340,500,0, 50, 20,  vermelho, vrp);
	createCubeInPosition(253, 340,470,0, 50, 20,  amarelo, arp);


	createCubeInPosition(254, 370,440,0, 50, 20,  vermelho, vrp);
	createCubeInPosition(255, 370,410,0, 50, 20,  amarelo, arp);

	createCubeInPosition(256, 370,380,0, 50, 20,  amarelo, arp);

	createCubeInPosition(257, 340,350,0, 50, 20,  vermelho, vrp);
	createCubeInPosition(258, 340,290,0, 50, 50,  vermelho, vq);
	createCubeInPosition(259, 340,230,0, 50, 50,  roxo, rq);

	createCubeInPosition(260, 340,110,0, 50, 50,  cinza, crg);
	createCubeInPosition(261, 340,80,0, 50, 20,  cinzaescuro, 0);
	createCubeInPosition(262, 340,20,0, 50, 50,  cinza, crg);
	createCubeInPosition(263, 370,-10,0, 20, 20,  cinza, cqp);

	//14 coluna
	createCubeInPosition(264, 400,500,0, 50, 20,  amarelo, arp);
	createCubeInPosition(265, 400,470,0, 50, 20,  amarelo, arp);

	createCubeInPosition(266, 430,440,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(267, 430,410,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(268, 430,380,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(269, 400,350,0, 50, 20,  vermelho, vrp);
	createCubeInPosition(270, 400,320,0, 50, 20,  vermelho, vrp);
	createCubeInPosition(271, 400,290,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(272, 400,230,0, 50, 50,  roxo, rq);
	createCubeInPosition(273, 400,170,0, 50, 50,  roxo, rq);

	createCubeInPosition(274, 400,110,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition(275, 400,50,0, 50, 50,  cinza, crg);

	createCubeInPosition(276, 400,20,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition(277, 400,-10,0, 20, 20,  cinza, cqp);
	createCubeInPosition(278, 430,-10,0, 20, 20,  cinza, cqp);


	//8 coluna
	createCubeInPosition(279, 460,500,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(280, 490,500,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(281, 460,470,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(282, 490,470,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(283, 460,440,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(284, 490,440,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(285, 460,410,0, 20, 20,  laranja, lqp);
	createCubeInPosition(286, 490,410,0, 20, 20,  laranja, lqp);

	createCubeInPosition(287, 460,380,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(288, 490,380,0, 20, 20,  laranja, lqp);
	createCubeInPosition(289, 460,350,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(290, 490,350,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(291, 460,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(292, 490,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(293, 460,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(294, 490,290,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(295, 460,260,0, 50, 20,  amarelo, arp);

	createCubeInPosition(296, 460,230,0, 50, 20,  vermelho, vrp);
	createCubeInPosition(297, 460,200,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(298, 460,140,0, 50, 50,  vermelho, vq);
	createCubeInPosition(299, 460,80,0, 50, 50,  roxo, rq);

	createCubeInPosition(300, 460,20,0, 50, 50,  cinza, crg);

	createCubeInPosition(301, 460,-10,0, 20, 20,  cinza, cqp);
	createCubeInPosition(302, 490,-10,0, 20, 20,  cinza, cqp);


	//antepenultima coluna
	createCubeInPosition(303, 520,500,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(304, 550,500,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(305, 520,470,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(306, 550,470,0, 20, 20,  laranja, lqp);

	createCubeInPosition(307, 520,440,0, 20, 20,  laranja, lqp);
	createCubeInPosition(308, 550,440,0, 20, 20,  laranja, lqp);
	createCubeInPosition(309, 520,410,0, 20, 20,  laranja, lqp);
	createCubeInPosition(310, 550,410,0, 20, 20,  laranja, lqp);

	createCubeInPosition(311, 520,380,0, 20, 20,  laranja, lqp);
	createCubeInPosition(312, 550,380,0, 20, 20,  laranja, lqp);
	createCubeInPosition(313, 520,350,0, 20, 20,  laranja, lqp);
	createCubeInPosition(314, 550,350,0, 20, 20,  laranja, lqp);

	createCubeInPosition(315, 520,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(316, 550,320,0, 20, 20,  laranja, lqp);
	createCubeInPosition(317, 520,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(318, 550,290,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(319, 520,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(320, 550,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(321, 520,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(322, 550,230,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(323, 520,200,0, 50, 20,  amarelo, arp);
	createCubeInPosition(324, 520,170,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(325, 520,110,0, 50, 50,  vermelho, vq);
	createCubeInPosition(326, 520,50,0, 50, 50,  cinzaescuro, 0);

	createCubeInPosition(327, 520,-10,0, 20, 20,  cinza, cqp);

	//penultima coluna
	createCubeInPosition(328, 580,500,0, 20, 20,  laranja, lqp);
	createCubeInPosition(329, 610,500,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(330, 580,470,0, 20, 20,  laranja, lqp);
	createCubeInPosition(331, 610,470,0, 20, 20,  laranja, lqp);
	createCubeInPosition(332, 580,440,0, 20, 20,  laranja, lqp);
	createCubeInPosition(333, 610,440,0, 20, 20,  laranja, lqp);

	createCubeInPosition(334, 580,410,0, 20, 20,  laranja, lqp);
	createCubeInPosition(335, 610,410,0, 20, 20,  laranja, lqp);
	createCubeInPosition(336, 580,380,0, 20, 20,  laranja, lqp);
	createCubeInPosition(337, 610,380,0, 20, 20,  laranja, lqp);

	createCubeInPosition(338, 580,350,0, 20, 20,  laranja, lqp);
	createCubeInPosition(339, 610,350,0, 20, 20,  laranja, lqp);
	createCubeInPosition(340, 580,320,0, 20, 20,  laranja, lqp);
	createCubeInPosition(341, 610,320,0, 20, 20,  laranja, lqp);

	createCubeInPosition(342, 580,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(343, 610,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(344, 580,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(345, 610,260,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(346, 580,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(347, 610,230,0, 20, 20,  amarelo, aqp);

	//createCubeInPosition(348, 580,230,0, 50, 20,  amarelo, arp);
	createCubeInPosition(349, 580,200,0, 50, 20,  amarelo, arp);
	//createCubeInPosition(350, 580,170,0, 50, 20,  amarelo, arp); afinal não existe LOL

	createCubeInPosition(351, 580,140,0, 50, 20,  amarelo, arp);
	createCubeInPosition(352, 580,110,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(353, 580,50,0, 50, 50,  roxo, rq);
	createCubeInPosition(354, 580,-10,0, 50, 50,  cinza, crg);

	//ultima coluna
	createCubeInPosition(355, 640,500,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(356, 670,500,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(357, 640,470,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(358, 670,470,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(359, 640,440,0, 20, 20,  laranja, lqp);
	createCubeInPosition(360, 670,440,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(361, 640,410,0, 20, 20,  laranja, lqp);
	createCubeInPosition(362, 670,410,0, 20, 20,  laranja, lqp);

	createCubeInPosition(363, 640,380,0, 20, 20,  laranja, lqp);
	createCubeInPosition(364, 670,380,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(365, 640,350,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(366, 670,350,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(367, 640,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(368, 670,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(369, 640,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(370, 670,290,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(371, 640,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(372, 670,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(373, 640,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition(374, 670,230,0, 20, 20,  amarelo, aqp);

	createCubeInPosition(375, 640,200,0, 50, 20,  amarelo, arp);
	createCubeInPosition(376, 640,170,0, 50, 20,  amarelo, arp);

	createCubeInPosition(377, 640,140,0, 50, 20,  vermelho, vrp);
	createCubeInPosition(378, 640,110,0, 50, 20,  vermelho, vrp);

	createCubeInPosition(379, 640,50,0, 50, 50,  roxo, rq);

	createCubeInPosition(380, 640,20,0, 50, 20,  cinza, crp);
	createCubeInPosition(381, 640,-10,0, 50, 20,  cinza, crp);
	
	// o tal que dá problemas
	createCubeInPosition(140, -110,170,0, 20, 20,  amarelo, aqp);
}