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
	createCubeInPosition("C016", -500,440,0, 50, 50,  cinza, crg);
	createCubeInPosition("C031", -500,380,0, 50, 50,  cinza, crg);
	createCubeInPosition("C043", -500,380,0, 50, 50,  cinza, crg);

	createCubeInPosition("C043", -500,320,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition("V008", -500,260,0, 50, 50,  vermelho, vq);
	createCubeInPosition("V011", -500,230,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("A030", -500,200,0, 50, 20,  amarelo, arp);

	createCubeInPosition("C74", -500,110,0, 50, 50,  cinza, crg);

	createCubeInPosition("R008", -500,50,0, 50, 50,  roxo, rq);
	createCubeInPosition("C109", -480,20,0, 50, 20,  cinza, crp);
	createCubeInPosition("C120", -500,-10,0, 50, 20,  cinza, crp);

	//2 coluna

	createCubeInPosition("C003", -440,500,0, 50, 20,  cinza, crp);
	createCubeInPosition("C017", -440,440,0, 50, 50,  cinza, crg);

	createCubeInPosition("C032", -440,380,0, 50, 50,  cinzaescuro, 0);

	createCubeInPosition("V003", -440,320,0, 50, 50,  vermelho, vq);
	createCubeInPosition("A007", -440,290,0, 50, 20,  amarelo, arp);
	createCubeInPosition("A014", -440,260,0, 50, 20,  amarelo, arp);

	createCubeInPosition("A022", -440,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A023", -410,230,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A031", -440,200,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A032", -410,200,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A038", -440,170,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A039", -410,170,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A044", -440,140,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A045", -410,140,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A048", -440,110,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A049", -410,110,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A053", -440,80,0, 50, 20,  amarelo, arp);

	createCubeInPosition("V015", -410,20,0, 50, 50,  vermelho, vq);
	createCubeInPosition("C121", -440,-10,0, 20, 20,  cinza, cqp);

	//3 coluna
	createCubeInPosition("C004", -380,500,0, 50, 20,  cinza, crp);
	createCubeInPosition("C018", -380,440,0, 50, 50,  cinzaescuro, 0);

	createCubeInPosition("R003", -380,380,0, 50, 50,  roxo, rq);

	createCubeInPosition("A001", -380,350,0, 50, 20,  amarelo, arp);
	createCubeInPosition("A002", -380,320,0, 50, 20,  amarelo, arp);

	createCubeInPosition("A008", -380,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A009", -350,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A015", -380,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A016", -350,260,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A024", -380,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A025", -350,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A033", -380,200,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A034", -350,200,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A040", -380,170,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("L007", -350,170,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A046", -380,140,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("L013", -350,140,0, 20, 20,  laranja, lqp);

	createCubeInPosition("A050", -380,110,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("L020", -350,110,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A054", -380,80,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A055", -350,80,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A057", -350,50,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("C122", -380, -10 ,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C123", -350, -10 ,0, 50, 20,  cinza, crp);


	//4 coluna	
	createCubeInPosition("C005", -320,500,0, 50, 20,  cinza, crp);
	createCubeInPosition("R001", -320,440,0, 50, 50,  roxo, rq);
	createCubeInPosition("V001", -320,380,0, 50, 50,  vermelho, vq);
	createCubeInPosition("V004", -320,350,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("A003", -320,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A004", -290,320,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A010", -320,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A011", -290,290,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A017", -320,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A018", -290,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A026", -320,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("L001", -290,230,0, 20, 20,  laranja, lqp);

	createCubeInPosition("L003", -320,200,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L004", -290,200,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L008", -320,170,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L009", -290,170,0, 20, 20,  laranja, lqp);

	createCubeInPosition("L014", -320,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L015", -290,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L021", -320,110,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L022", -290,110,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L026", -320,80,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L027", -290,80,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A058", -320,50,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A059", -290,50,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A061", -320,20,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A062", -290,20,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("C124", -290,-10,0, 20, 20,  cinza, cqp);

	//5coluna
	createCubeInPosition("C006", -260,470,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition("R002", -260,410,0, 50, 50,  roxo, rq);

	createCubeInPosition("V002", -260,380,0, 50, 20,  vermelho, vrp);
	createCubeInPosition("V005", -260,350,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("A005", -260,320,0, 50, 20,  amarelo, arp);

	createCubeInPosition("A012", -260,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A013", -230,290,0, 50, 20,  amarelo, arp);
	createCubeInPosition("A019", -260,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A020", -230,260,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("L005", -260,230,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A027", -230,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("L005", -260,200,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L006", -230,200,0, 20, 20,  laranja, lqp);

	createCubeInPosition("L010", -260,170,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L011", -230,170,0, 20, 20,  laranja, lqp);

	createCubeInPosition("L016", -260,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L017", -230,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L023", -260,110,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L024", -230,110,0, 20, 20,  laranja, lqp);

	createCubeInPosition("L028", -260,80,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L029", -230,80,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L030", -260,50,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A060", -230,50,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A063", -260,20,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("C110", -230,-10,0, 50, 50,  cinza, crg);
	createCubeInPosition("C125", -260,-10,0, 20, 20,  cinza, cqp);

	//6 coluna
	createCubeInPosition("C007", -170,500,0, 50, 20,  cinza, crp);
	createCubeInPosition("C019", -200,440,0, 50, 50,  cinzaescuro, 0);

	createCubeInPosition("R004", -200,380,0, 50, 50,  roxo, rq);

	createCubeInPosition("V006", -200,350,0, 50, 20,  vermelho, vrp);
	createCubeInPosition("A006", -200,320,0, 50, 20,  amarelo, arp);

	createCubeInPosition("V009", -170,290,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("A021", -200,260,0, 50, 20,  amarelo, arp);

	createCubeInPosition("A028", -200,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A029", -170,230,0, 50, 20,  amarelo, arp);

	createCubeInPosition("A035", -200,200,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A036", -170,200,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("L012", -200,170,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A041", -170,170,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("L018", -200,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L019", -170,140,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L025", -200,110,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A051", -170,110,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A056", -200,80,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("V014", -170,80,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("V016", -200,50,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("C126", -170,-10,0, 20, 20,  cinza, cqp);

	//6coluna
	createCubeInPosition("C008", -110,470,0, 50, 50,  cinza, crg);
	createCubeInPosition("L061", -140,410,0, 80, 50,  laranja, lrg);
	createCubeInPosition("R005", -140,350,0, 80, 50,  roxo, rr);

	createCubeInPosition("V007", -140,320,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("V010", -140,260,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("V012", -110,230,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("A037", -140,200,0, 50, 20,  amarelo, arp);

	createCubeInPosition("A042", -140,170,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A043", -110,170,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A047", -140,140,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("V013", -110,140,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("A052", -140,110,0, 50, 20,  amarelo, arp);


	createCubeInPosition("V017", -140,20,0, 50, 50,  vermelho, vq);
	createCubeInPosition("C127", -140,-10,0, 50, 20,  cinza, crp);


	//7 coluna
	createCubeInPosition("C009", -50,500,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C037", -50,380,0, 20, 20,  cinza, cqp);	
	createCubeInPosition("C048", -80,290,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition("R006", -80,170,0, 50, 50,  roxo, rq);
	createCubeInPosition("R007", -80,80,0, 50, 50,  roxo, rq);
	createCubeInPosition("C098", -80,20,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition("C128", -50,-10,0, 20, 20,  cinza, cqp);

	//8 coluna				

	createCubeInPosition("C010", -20,500,0, 50, 20,  cinzaescuro, 0);
	createCubeInPosition("C020", -20,470,0, 50, 20,  cinza, crp);
	createCubeInPosition("C025", -20,440,0, 50, 20,  cinza, crp);

	//createCubeInPosition("C033", -20,410,0, 50, 20,  cinza, crp);
	createCubeInPosition("C033", -20,380,0, 50, 50,  cinza, crg);
	createCubeInPosition("C044", -20,350,0, 50, 20,  cinza, crp);

	createCubeInPosition("C049", -20,290,0, 50, 50,  cinza, crg);

	createCubeInPosition("L062", -20,230,0, 80, 50,  laranja, lrg);

	createCubeInPosition("C065", -20,200,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C066", 10,170,0, 50, 50,  cinza, crg);

	createCubeInPosition("C075", -20,110,0, 50, 50,  cinza, crg);

	createCubeInPosition("C088", -20,50,0, 50, 50,  cinza, crg);

	createCubeInPosition("C111", -20,-10,0, 50, 50,  cinza, crg);


	//9 coluna
	createCubeInPosition("C011", 40,500,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C021", 40,470,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C022", 70,470,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C026", 40,440,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C027", 70,440,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C034", 40,410,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C035", 70,410,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition("C038", 40,380,0, 50, 20,  cinza, crp);
	//the big one
	createCubeInPosition("V018", 40, 290,0, 80, 80,  vermelho, 15000);

	createCubeInPosition("C055", 70,230,0, 50, 50,  cinza, crg);

	createCubeInPosition("C067", 70,200,0, 50, 20,  cinza, crp);
	createCubeInPosition("C070", 70,170,0, 50, 20,  cinza, crp);

	createCubeInPosition("C076", 40,110,0, 50, 50,  cinza, crg);
	createCubeInPosition("C089", 40,80,0, 50, 20,  cinza, crp);
	createCubeInPosition("C099", 40,20,0, 50, 50,  cinza, crg);

	createCubeInPosition("C129", 70,-10,0, 50, 20,  cinza, crp);


	//8 coluna
	createCubeInPosition("C012", 100,500,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C023", 100,440,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C028", 100,380,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C029", 100,140,0, 50, 20,  cinza, crp);
	createCubeInPosition("C036", 100,110,0, 50, 20,  cinza, crp);
	createCubeInPosition("C039", 100,80,0, 50, 20,  cinza, crp);
	createCubeInPosition("C040", 100,50,0, 50, 20,  cinza, crp);

	createCubeInPosition("C112", 100,20,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition("C130", 130,-10,0, 20, 20,  cinza, cqp);

	//9 coluna
	
	

	createCubeInPosition("C023", 130,470,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C029", 130,440,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C036", 130,410,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C040", 130,380,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C045", 130,350,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C053", 130,290,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C056", 130,260,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C061", 130,230,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition("C071", 130, 170, 0, 50, 20,  cinza, crp);


	//10 coluna
	createCubeInPosition("C013", 160,500,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C014", 190,500,0, 20, 20,  cinza, cqp); 

	createCubeInPosition("C024", 160,470,0, 50, 20,  cinzaescuro, 0);
	createCubeInPosition("C030", 160,410,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition("C041", 160,380,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition("C046", 160,350,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C047", 190,350,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C050", 160,320,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C051", 190,320,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C054", 160,290,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C057", 160,260,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C058", 190,260,0, 20, 20,  cinza, cqp);


	createCubeInPosition("C068", 160,200,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition("C072", 190,170,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C078", 190,140,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C084", 160,110,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C085", 190,110,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C091", 160,80,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C092", 190,80,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C101", 160,50,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C102", 190,50,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C113", 160,-10,0, 50, 50,  cinza, crg);

	
	
	//11 coluna
	createCubeInPosition("R009", 220,470,0, 50, 50,  roxo, rq);
	createCubeInPosition("R019", 220,410,0, 80, 50,  roxo, rr);

	createCubeInPosition("C042", 220,350,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition("C052", 220,290,0, 50, 50,  cinza, crg);

	createCubeInPosition("C059", 220,260,0, 50, 20,  cinza, crp);


	createCubeInPosition("C062", 220,230,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C069", 220,200,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C063", 250,200,0, 50, 50,  cinza, crg);

	createCubeInPosition("C073", 250,170,0, 50, 20,  cinza, crp);

	createCubeInPosition("C079", 220,140,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition("C086", 220,110,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C087", 250,110,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C093", 220,80,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C094", 250,80,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C103", 250,50,0, 20, 20,  cinza, cqp);

	createCubeInPosition("C114", 220,20,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C131", 220,-10,0, 20, 20,  cinza, cqp);

	//createCubeInPosition(241, 250,-10,0, 50, 20,  cinza, crp); 

	//12 coluna
	createCubeInPosition("V019", 280,470,0, 50, 50,  vermelho, vq);
	//roxo grande cima
	createCubeInPosition("R012", 280,320,0, 50, 50,  roxo, rq);

	createCubeInPosition("V021", 310,440,0, 50, 20,  vermelho, vrp);
	createCubeInPosition("V023", 310,380,0, 50, 50,  vermelho, vq);


	createCubeInPosition("C060", 280,260,0, 50, 50,  cinzaescuro, 0);

	createCubeInPosition("L063", 310,170,0, 80, 50,  laranja, lrg);

	createCubeInPosition("C080", 280,110,0, 50, 50,  cinza, crg);

	createCubeInPosition("C095", 280,80,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C116", 310,20,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C115", 280,20,0, 20, 20,  cinza, cqp);
	
	createCubeInPosition("C104", 310,50,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C103", 280,50,0, 20, 20,  cinza, cqp);
	

	//13 coluna
	createCubeInPosition("V020", 340,500,0, 50, 20,  vermelho, vrp);
	createCubeInPosition("A071", 340,470,0, 50, 20,  amarelo, arp);


	createCubeInPosition("V022", 370,440,0, 50, 20,  vermelho, vrp);
	createCubeInPosition("A082", 370,410,0, 50, 20,  amarelo, arp);

	createCubeInPosition("A084", 370,380,0, 50, 20,  amarelo, arp);

	createCubeInPosition("V024", 340,350,0, 50, 20,  vermelho, vrp);
	createCubeInPosition("V026", 340,290,0, 50, 50,  vermelho, vq);
	createCubeInPosition("R011", 340,230,0, 50, 50,  roxo, rq);

	createCubeInPosition("C082", 340,110,0, 50, 50,  cinza, crg);
	createCubeInPosition("C096", 340,80,0, 50, 20,  cinzaescuro, 0);
	createCubeInPosition("C106", 340,20,0, 50, 50,  cinza, crg);
	createCubeInPosition("C113", 370,-10,0, 20, 20,  cinza, cqp);

	//14 coluna
	createCubeInPosition("A064", 400,500,0, 50, 20,  amarelo, arp);
	createCubeInPosition("A072", 400,470,0, 50, 20,  amarelo, arp);

	createCubeInPosition("A078", 430,440,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A083", 430,410,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A085", 430,380,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("V025", 400,350,0, 50, 20,  vermelho, vrp);
	createCubeInPosition("V027", 400,320,0, 50, 20,  vermelho, vrp);
	createCubeInPosition("V028", 400,290,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("R013", 400,230,0, 50, 50,  roxo, rq);
	createCubeInPosition("R014", 400,170,0, 50, 50,  roxo, rq);

	createCubeInPosition("C082", 400,110,0, 50, 50,  cinzaescuro, 0);
	createCubeInPosition("C097", 400,50,0, 50, 50,  cinza, crg);

	createCubeInPosition("C117", 400,20,0, 50, 20,  cinzaescuro, 0);

	createCubeInPosition("C134", 400,-10,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C135", 430,-10,0, 20, 20,  cinza, cqp);


	//15 coluna
	createCubeInPosition("A065", 460,500,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A066", 490,500,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A073", 460,470,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A074", 490,470,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A079", 460,440,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A080", 490,440,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("L040", 460,410,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L041", 490,410,0, 20, 20,  laranja, lqp);

	createCubeInPosition("A086", 460,380,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("L048", 490,380,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A088", 460,350,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A089", 490,350,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A092", 460,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A093", 490,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A097", 460,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A098", 490,290,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A105", 460,260,0, 50, 20,  amarelo, arp);

	createCubeInPosition("V029", 460,230,0, 50, 20,  vermelho, vrp);
	createCubeInPosition("V030", 460,200,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("V031", 460,140,0, 50, 50,  vermelho, vq);
	createCubeInPosition("R015", 460,80,0, 50, 50,  roxo, rq);

	createCubeInPosition("C107", 460,20,0, 50, 50,  cinza, crg);

	createCubeInPosition("C136", 460,-10,0, 20, 20,  cinza, cqp);
	createCubeInPosition("C137", 490,-10,0, 20, 20,  cinza, cqp);


	//antepenultima coluna
	createCubeInPosition("A067", 520,500,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A068", 550,500,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A075", 520,470,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("L032", 550,470,0, 20, 20,  laranja, lqp);

	createCubeInPosition("L035", 520,440,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L036", 550,440,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L042", 520,410,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L043", 550,410,0, 20, 20,  laranja, lqp);

	createCubeInPosition("L049", 520,380,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L050", 550,380,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L054", 520,350,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L055", 550,350,0, 20, 20,  laranja, lqp);

	createCubeInPosition("A094", 520,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("L058", 550,320,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A099", 520,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A100", 550,290,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A106", 520,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A107", 550,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("C064", 520,230,0, 20, 20,  cinza, cqp); 
	createCubeInPosition("A112", 550,230,0, 20, 20,  amarelo, aqp);
	
	createCubeInPosition("A117", 520,200,0, 50, 20,  amarelo, arp); // NOVO!!!!

	createCubeInPosition("A120", 520,170,0, 50, 20,  amarelo, arp);
	createCubeInPosition("V032", 520,140,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("V034", 520,80,0, 50, 50,  vermelho, vq);
	createCubeInPosition("C108", 520,20,0, 50, 50,  cinzaescuro, 0);

	createCubeInPosition("C138", 520,-10,0, 20, 20,  cinza, cqp);

	//penultima coluna
	createCubeInPosition("L031", 580,500,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A069", 610,500,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("L033", 580,470,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L034", 610,470,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L037", 580,440,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L038", 610,440,0, 20, 20,  laranja, lqp);

	createCubeInPosition("L044", 580,410,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L045", 610,410,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L051", 580,380,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L052", 610,380,0, 20, 20,  laranja, lqp);

	createCubeInPosition("L056", 580,350,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L057", 610,350,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L059", 580,320,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L060", 610,320,0, 20, 20,  laranja, lqp);

	createCubeInPosition("A101", 580,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A102", 610,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A103", 580,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A104", 610,260,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A113", 580,230,0, 20, 20,  amarelo, aqp); 
	createCubeInPosition("A114", 610,230,0, 20, 20,  amarelo, aqp);

	//createCubeInPosition(348, 580,230,0, 50, 20,  amarelo, arp);
	createCubeInPosition("A118", 580,200,0, 50, 20,  amarelo, arp);
	//createCubeInPosition(350, 580,170,0, 50, 20,  amarelo, arp); afinal não existe LOL

	createCubeInPosition("A122", 580,140,0, 50, 20,  amarelo, arp);
	createCubeInPosition("V035", 580,110,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("R016", 580,50,0, 50, 50,  roxo, rq);
	createCubeInPosition("C118", 580,-10,0, 50, 50,  cinza, crg);

	//ultima coluna
	createCubeInPosition("A070", 640,500,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("C015", 670,500,0, 20, 20,  cinza, cqp); 
	createCubeInPosition("A076", 640,470,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A077", 670,470,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("L039", 640,440,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A081", 670,440,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("L046", 640,410,0, 20, 20,  laranja, lqp);
	createCubeInPosition("L047", 670,410,0, 20, 20,  laranja, lqp);

	createCubeInPosition("L053", 640,380,0, 20, 20,  laranja, lqp);
	createCubeInPosition("A087", 670,380,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A090", 640,350,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A091", 670,350,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A095", 640,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A096", 670,320,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A103", 640,290,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A104", 670,290,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A110", 640,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A111", 670,260,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A115", 640,230,0, 20, 20,  amarelo, aqp);
	createCubeInPosition("A116", 670,230,0, 20, 20,  amarelo, aqp);

	createCubeInPosition("A119", 640,200,0, 50, 20,  amarelo, arp);
	createCubeInPosition("A121", 640,170,0, 50, 20,  amarelo, arp);

	createCubeInPosition("V033", 640,140,0, 50, 20,  vermelho, vrp);
	createCubeInPosition("V036", 640,110,0, 50, 20,  vermelho, vrp);

	createCubeInPosition("R017", 640,50,0, 50, 50,  roxo, rq);

	createCubeInPosition("C119", 640,20,0, 50, 20,  cinza, crp);
	createCubeInPosition("C139", 640,-10,0, 50, 20,  cinza, crp);
	

	
}