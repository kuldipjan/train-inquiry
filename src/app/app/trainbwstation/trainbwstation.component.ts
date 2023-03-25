import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-trainbwstation',
  templateUrl: './trainbwstation.component.html',
  styleUrls: ['./trainbwstation.component.scss']
})
export class TrainbwstationComponent implements OnInit {
  fstation: string = '';
  tstation: string = '';
  myGroup: any = FormGroup;


  selected:any;
  filtered :any;
      station = [
         
          { stationname: "CST Mumbai", stationcode:"(CSTM)" },          { stationname: "Ballia", stationcode:"(BUI)" }, 
          { stationname: "Lokmanya Tilak ", stationcode:"(LTT)" },           { stationname: "Basti", stationcode:"(BST)" }, 
          { stationname: "Pune", stationcode:"(PA)" },          { stationname: "Belthara Road", stationcode:"(BLTR)" }, 
          { stationname: "Nagpur", stationcode:"(NGP)" },         { stationname: "Deoria Sadar", stationcode:"(DEOS)" }, 
          { stationname: "Kalyan", stationcode:"(KYN)" },          { stationname: "Gonda", stationcode:"(GD)" }, 
          { stationname: "Dadar", stationcode:"(DR)" },           { stationname: "Kathgodam", stationcode:"(KGM)" }, 
          { stationname: "Thane", stationcode:"(TNA)" },           { stationname: "Khalilabad   ", stationcode:"(KLD)" }, 
          { stationname: "Solapur", stationcode:"(SUR)" },           { stationname: "Mau", stationcode:"(MAU)" }, 
          { stationname: "Visakhapatnam", stationcode:"(VSKP)" },           { stationname: "Rudrapur City", stationcode:"(RUPC)" },    
          { stationname: "Bhubaneswar", stationcode:"(BBS)" },          { stationname: "Siwan", stationcode:"(SV)" }, 
          { stationname: "Puri", stationcode:"(PURI)" },           { stationname: "Alipurduar", stationcode:"(APDJ)" }, 
          { stationname: "Darbhanga", stationcode:"(DBG)" },          { stationname: "Barpeta", stationcode:"(BPRD)" },   
          { stationname: "Dhanbad", stationcode:"(DHN)" },         { stationname: "Bongaigaon", stationcode:"(BNGN)" },  
          { stationname: "Gaya", stationcode:"(GYA)" },          { stationname: "Coochbehar", stationcode:"(COB)" }, 
          { stationname: "Mughalsarai", stationcode:"(MGS)" },           { stationname: "Dibrugarh Town", stationcode:"(DBRT)" }, 
          { stationname: "Muzaffarpur", stationcode:"(MFP)" },          { stationname: "Jogbani", stationcode:"(JBN)" }, 
          { stationname: "Patna", stationcode:"(PNBE)" },          { stationname: "Jorhat Town", stationcode:"(JTTN)" }, 
          { stationname: "BHAGALPUR", stationcode:"(BGP)" },           { stationname: "Kamakhya", stationcode:"(KYQ)" }, 
          { stationname: "Howrah", stationcode:"(HWH)" },          { stationname: "Katihar", stationcode:"(KIR)" }, 
          { stationname: "SEALDAH", stationcode:"(SDAH)" },         { stationname: "Kishanganj", stationcode:"(KNE)" }, 
          { stationname: "Allahabad", stationcode:"(ALD)" },          { stationname: "LUMDING", stationcode:"(LMG)" }, 
          { stationname: "Kanpur Central", stationcode:"(CNB)" },           { stationname: "New Alipurduar", stationcode:"(NOQ)" }, 
          { stationname: "Jhansi", stationcode:"(JHS)" },           { stationname: "New Coochbehar", stationcode:"(NCB)" }, 
          { stationname: "Gwalior", stationcode:"(GWL)" },           { stationname: "Purnea", stationcode:"(PRNA)" }, 
          { stationname: "Agra Cantt", stationcode:"(AGC)" },           { stationname: "Raiganj", stationcode:"(RGJ)" },    
          { stationname: "Mathura", stationcode:"(MTJ)" },          { stationname: "Rangiya", stationcode:"(RNY)" }, 
          { stationname: "Gorakhpur", stationcode:"(GKP)" },           { stationname: "Siliguri", stationcode:"(SGUJ)" }, 
          { stationname: "Lucknow", stationcode:"(LJN)" },          { stationname: "Tinsukia", stationcode:"(TSK)" },   
          { stationname: "Chhapra", stationcode:"(CPR)" },         { stationname: "DIMAPUR", stationcode:"(DMV)" },  
          { stationname: "GUWAHATI", stationcode:"(GHY)" },          { stationname: "SILCHAR", stationcode:"(SCL)" }, 
          { stationname: "New Jalpaiguri", stationcode:"(NJP)" },           { stationname: "Adarshnagardelhi", stationcode:"(ANDI)" }, 
          { stationname: "Jammu Tawi", stationcode:"(JAT)" },          { stationname: "Akbar Pur", stationcode:"(ABP)" }, 
          { stationname: "Lucknow", stationcode:"(LKO)" },          { stationname: "Ayodhya", stationcode:"(AY)" }, 
          { stationname: "Varanasi", stationcode:"(BSB)" },           { stationname: "BALLABGARH", stationcode:"(BVH)" }, 
          { stationname: "DELHI JN.", stationcode:"(DLI)" },          { stationname: "Barabanki", stationcode:"(BBK)" }, 
          { stationname: "NEW DELHI", stationcode:"(NDLS)" },         { stationname: "Bathinda", stationcode:"(BTI)" }, 
          { stationname: "Amritsar", stationcode:"(ASR)" },          { stationname: "Beas", stationcode:"(BES)" }, 
          { stationname: "Ludhiana", stationcode:"(LDH)" },           { stationname: "Bhadohi", stationcode:"(BOY)" }, 
          { stationname: "Ambala Cantt.", stationcode:"(UMB)" },           { stationname: "Chakki Bank", stationcode:"(CHKB)" }, 
          { stationname: "Haridwar", stationcode:"(HW)" },           { stationname: "Chandausi", stationcode:"(CH)" }, 
          { stationname: "Chandigarh", stationcode:"(CDG)" },           { stationname: "DELHI CANTT", stationcode:"(DEC)" },    
          { stationname: "H. NIZAMUDDIN", stationcode:"(HNZM)" },          { stationname: "DELHI SARAI", stationcode:"(DEE)" }, 
          { stationname: "Anand Vihar Terminal", stationcode:"(ANVT)" },           { stationname: "DELHI SHAHAD", stationcode:"(DSA)" }, 
          { stationname: "Bareilly", stationcode:"(BE)" },          { stationname: "Faizabad", stationcode:"(FD)" },   
          { stationname: "Dehradun", stationcode:"(DDN)" },         { stationname: "FARIDABAD", stationcode:"(FDB)" },  
          { stationname: "Jaipur", stationcode:"(JP)" },          { stationname: "Firozpur Cantt.", stationcode:"(FZR)" }, 
          { stationname: "Jodhpur", stationcode:"(JU)" },           { stationname: "GHAZIABAD", stationcode:"(GZB)" }, 
          { stationname: "Ajmer", stationcode:"(AII)" },          { stationname: "GURGAON", stationcode:"(GGN)" },
          { stationname: "SECUNDERABAD", stationcode:"(SC)" },          { stationname: "Hapur", stationcode:"(HPU)" }, 
          { stationname: "VIJAYAWADA", stationcode:"(BZA)" },           { stationname: "Hardoi", stationcode:"(HRI)" }, 
          { stationname: "TIRUPATI", stationcode:"(TPTY)" },          { stationname: "Jagadhri", stationcode:"(JUD)" }, 
          { stationname: "HYDERABAD", stationcode:"(HYB)" },         { stationname: " Jallandhar Cantt", stationcode:"(JRC)" }, 
          { stationname: "KACHEGUDA", stationcode:"(KCG)" },          { stationname: " Jalandhar city", stationcode:"(JUC)" }, 
          { stationname: "Raipur", stationcode:"(R)" },           { stationname: "Janghai", stationcode:"(JNH)" }, 
          { stationname: "Bilaspur", stationcode:"(BSP)" },           { stationname: "Jaunpur", stationcode:"(JNU)" }, 
          { stationname: "Tatanagar", stationcode:"(TATA)" },           { stationname: "Kalka", stationcode:"(KLK)" }, 
          { stationname: "Kharagpur", stationcode:"(KGP)" },           { stationname: "KARNAL", stationcode:"(KUN)" },    
          { stationname: "Chennai central", stationcode:"(MAS)" },          { stationname: "MEERUT", stationcode:"(MUT)" }, 
          { stationname: "Chennai egmore", stationcode:"(MS)" },           { stationname: " MEERUT CITY", stationcode:"(MTC)" }, 
          { stationname: "Coimbatore ", stationcode:"(CBE)" },          { stationname: "Moradabad", stationcode:"(MB)" },   
          { stationname: "Tiruvananthapuram", stationcode:"(TVC)" },         { stationname: "MUZAFFARNAGAR", stationcode:"(MOZ)" },  
          { stationname: "Ernakulam", stationcode:"(ERS)" },          { stationname: "PANIPAT", stationcode:"(PNP)" }, 
          { stationname: "Madurai", stationcode:"(MDU)" },           { stationname: "Partapgarh", stationcode:"(PBH)" }, 
          { stationname: "Thrisur", stationcode:"(TCR)" },          { stationname: "Pathankot", stationcode:"(PTK)" }, 
          { stationname: "Kozhikkode", stationcode:"(CLT)" },          { stationname: "Patiala", stationcode:"(PTA)" }, 
          { stationname: "Bangalore City", stationcode:"(SBC)" },           { stationname: "Phagwara", stationcode:"(PGW)" }, 
          { stationname: "Yesvantpur", stationcode:"(YPR)" },          { stationname: "Rae - Bareli ", stationcode:"(RBL)" }, 
          { stationname: "BHOPAL", stationcode:"(BPL)" },         { stationname: "Rajpura", stationcode:"(RPJ)" }, 
          { stationname: "JABALPUR", stationcode:"(JBP)" },          { stationname: "Rampur", stationcode:"(RMU)" }, 
          { stationname: "Ahmedabad", stationcode:"(ADI)" },           { stationname: "ROHTAK", stationcode:"(ROK)" }, 
          { stationname: "Mumbai Central", stationcode:"(BCT)" },           { stationname: "Roorkee", stationcode:"(RK)" }, 
          { stationname: "Bandra Terminus", stationcode:"(BDTS)" },           { stationname: "Saharanpur", stationcode:"(SRE)" }, 
          { stationname: "Surat", stationcode:"(ST)" },           { stationname: "Shahganj", stationcode:"(SHG)" },    
          { stationname: "Vadodara", stationcode:"(BRC)" },          { stationname: "Shahjahanpur", stationcode:"(SPN)" }, 
          { stationname: "Rajkot", stationcode:"(RJT)" },           { stationname: "Sirhind", stationcode:"(SIR)" }, 
          { stationname: "Akola", stationcode:"(AK)" },          { stationname: "SONIPAT", stationcode:"(SNP)" },   
          { stationname: "Amravati", stationcode:"(AMI)" },         { stationname: "Sultanpur", stationcode:"(SLN)" },  
          { stationname: "Badnera", stationcode:"(BD)" },          { stationname: "Udhampur", stationcode:"(UHP)" }, 
          { stationname: "Bhusawal", stationcode:"(BSL)" },           { stationname: "Unnao", stationcode:"(ON)" }, 
          { stationname: "Burhanpur", stationcode:"(BAU)" },          { stationname: "Aburoad", stationcode:"(ABR)" }, 
          { stationname: "Chalisgaon", stationcode:"(CSN)" },          { stationname: "Alwar", stationcode:"(AWR)" }, 
          { stationname: "Jalgaon", stationcode:"(JL)" },           { stationname: "Bandikui", stationcode:"(BKI)" }, 
          { stationname: "Khandwa", stationcode:"(KNW)" },          { stationname: "Barmer", stationcode:"(BME)" }, 
          { stationname: "Kurduwadi", stationcode:"(KWV)" },         { stationname: "Bhilwara", stationcode:"(BHL)" }, 
          { stationname: "Latur", stationcode:"(LUR)" },          { stationname: "Bhiwani", stationcode:"(BNW)" }, 
          { stationname: "Manmad", stationcode:"(MMR)" },           { stationname: "Bikaner", stationcode:"(BKN)" }, 
          { stationname: "Miraj", stationcode:"(MRJ)" },           { stationname: "Falna", stationcode:"(FA)" }, 
          { stationname: "Nasik Road", stationcode:"(NKRD)" },           { stationname: "Gandhinagar", stationcode:"(GADJ)" }, 
          { stationname: "Panvel", stationcode:"(PNVL)" },           { stationname: "Hanumangarh", stationcode:"(HMH)" },    
          { stationname: "Sainagar Shirdi", stationcode:"(SNSI)" },          { stationname: "Hisar", stationcode:"(HSR)" }, 
          { stationname: "Shegaon", stationcode:"(SEG)" },           { stationname: "Lalgarh", stationcode:"(LGH)" }, 
          { stationname: "Ahmednagar", stationcode:"(ANG)" },          { stationname: "Marwar", stationcode:"(MJ)" },   
          { stationname: "Daund", stationcode:"(DD)" },         { stationname: "Nagaur", stationcode:"(NGO)" },  
          { stationname: "Gulbarga", stationcode:"(GR)" },          { stationname: "Pali Marwar", stationcode:"(PMY)" }, 
          { stationname: "Kolhapur", stationcode:"(KOP)" },           { stationname: "Phulera", stationcode:"(FL)" }, 
          { stationname: "Kopargaon", stationcode:"(KPG)" },          { stationname: "Rani", stationcode:"(RN)" }, 
          { stationname: "Lonavala", stationcode:"(LNL)" },          { stationname: "Rewari", stationcode:"(RE)" }, 
          { stationname: "Ballarshah", stationcode:"(BPQ)" },           { stationname: "Sri Ganganagar ", stationcode:"(SGNR)" }, 
          { stationname: "Betul", stationcode:"(BZU)" },          { stationname: "Suratgarh", stationcode:"(SOG)" }, 
          { stationname: "Chandrapur", stationcode:"(CD)" },         { stationname: "Udaipur City", stationcode:"(UDZ)" }, 
          { stationname: "Wardha", stationcode:"(WR)" },          { stationname: "Jaisalmer", stationcode:"(JSM)" }, 
          { stationname: "Bhadrak", stationcode:"(BHC)" },           { stationname: "ANANTAPUR", stationcode:"(ATP)" }, 
          { stationname: "Brahmapur", stationcode:"(BAM)" },           { stationname: "NANDED", stationcode:"(NED)" }, 
          { stationname: "Cuttack", stationcode:"(CTC)" },           { stationname: "ANAKAPALLE", stationcode:"(AKP)" }, 
          { stationname: "Jajpur-Keonjhar Road", stationcode:"(JJKR)" },           { stationname: "AURANGABAD", stationcode:"(AWB)" },    
          { stationname: "Khurda Road", stationcode:"(KUR)" },          { stationname: "BEABHIMAVARAMAR", stationcode:"(BVRT)" }, 
          { stationname: "Palasa", stationcode:"(PSA)" },           { stationname: "CHIRALA", stationcode:"(CLX)" }, 
          { stationname: "Rayagada", stationcode:"(RGDA)" },          { stationname: "CUDDAPAH", stationcode:"(HX)" },   
          { stationname: "Sambalpur", stationcode:"(SBP)" },         { stationname: "ELURU", stationcode:"(EE)" },  
          { stationname: "Srikakulam road", stationcode:"(CHE)" },          { stationname: "GUDUR", stationcode:"(GDR)" }, 
          { stationname: "Vizianagaram", stationcode:"(VZM)" },           { stationname: "GUNTAKAL", stationcode:"(GTL)" }, 
          { stationname: "Anugraha Narayan", stationcode:"(AUBR)" },          { stationname: "GUNTUR", stationcode:"(GNT)" }, 
          { stationname: "Ara", stationcode:"(ARA)" },                     { stationname: "JALNA", stationcode:"(J)" }, 
          { stationname: "Bakhtiyarpur", stationcode:"(BKP)" },           { stationname: "KAKINADA", stationcode:"(CCT)" }, 
          { stationname: "Barauni", stationcode:"(BJU)" },          { stationname: "KAZIPET", stationcode:"(KZJ)" }, 
          { stationname: "Betiah", stationcode:"(BTH)" },         { stationname: "Khammam", stationcode:"(KMT)" }, 
          { stationname: "Buxar", stationcode:"(BXR)" },          { stationname: "KURNOOL", stationcode:"(KRNT)" }, 
          { stationname: "Daltonganj", stationcode:"(DTO)" },           { stationname: "MANCHIRYAL", stationcode:"(MCI)" }, 
          { stationname: "Danapur", stationcode:"(DNR)" },           { stationname: "NAGARSOL", stationcode:"(NSL)" }, 
          { stationname: "Dehri-on-Sone", stationcode:"(DOS)" },           { stationname: "NELLORE", stationcode:"(NLR)" }, 
          { stationname: "Gomoh", stationcode:"(GMO)" },           { stationname: "NIZAMABAD", stationcode:"(NZB)" },    
          { stationname: "Hajipur", stationcode:"(HJP)" },          { stationname: "ONGOLE", stationcode:"(OGL)" }, 
          { stationname: "Jamui", stationcode:"(JMU)" },           { stationname: "PARBHANI", stationcode:"(PBN)" }, 
          { stationname: "Jaynagar", stationcode:"(JYG)" },          { stationname: "RAICHUR", stationcode:"(RC)" },   
          { stationname: "Khagaria", stationcode:"(KGG)" },         { stationname: "RAJAHMUNDRY", stationcode:"(RJY)" },  
          { stationname: "Kiul", stationcode:"(KEU)" },          { stationname: "RENIGUNTA", stationcode:"(RU)" }, 
          { stationname: "Koderma", stationcode:"(KQR)" },           { stationname: "SAMALKOT", stationcode:"(SLO)" }, 
          { stationname: "Madhubani", stationcode:"(MBI)" },          { stationname: "TADEPALLIGUD", stationcode:"(TDD)" }, 
          { stationname: "Mokama", stationcode:"(MKA)" },          { stationname: "TENALI", stationcode:"(TEL)" }, 
          { stationname: "Bapudham motiha", stationcode:"(BMKI)" },           { stationname: "TUNI", stationcode:"(TUNI)" }, 
          { stationname: "Narkatiaganj", stationcode:"(NKE)" },          { stationname: "WARANGAL", stationcode:"(WL)" }, 
          { stationname: "Parashnath", stationcode:"(PNME)" },         { stationname: "YADGIR", stationcode:"(YG)" }, 
          { stationname: "Patna Sahib ", stationcode:"(PNC)" },          { stationname: "Bhilai Power Hous", stationcode:"(BPHB)" }, 
          { stationname: "Rajendra Nagar", stationcode:"(RJPB)" },           { stationname: "Champa", stationcode:"(CPH)" }, 
          { stationname: "Rauxaul", stationcode:"(RXL)" },           { stationname: "Durg", stationcode:"(DURG)" }, 
          { stationname: "Sagauli", stationcode:"(SGL)" },           { stationname: "Gondia", stationcode:"(G)" }, 
          { stationname: "Saharsa ", stationcode:"(SHC)" },           { stationname: "Raigarh", stationcode:"(RIG)" },    
          { stationname: "Samastipur", stationcode:"(SPJ)" },          { stationname: "Rajnandgaon", stationcode:"(RJN)" }, 
          { stationname: "Sasaram", stationcode:"(SSM)" },           { stationname: "Balasore", stationcode:"(BLS)" }, 
          { stationname: "Singrauli", stationcode:"(SGRL)" },          { stationname: "Bokaro Seel City", stationcode:"(BKSC)" },   
          { stationname: "ASANSOL", stationcode:"(ASN)" },         { stationname: "Digha", stationcode:"(DGHA)" },  
          { stationname: "Bandel", stationcode:"(BDC)" },          { stationname: "Hatia", stationcode:"(HTE)" }, 
          { stationname: "Barddhaman", stationcode:"(BWN)" },           { stationname: "Jharsuguda", stationcode:"(JSG)" }, 
          { stationname: "DURGAPUR", stationcode:"(DGR)" },          { stationname: "Ranchi", stationcode:"(RNC )" }, 
          { stationname: "JAMALPUR", stationcode:"(JMP)" },          { stationname: "Rourkela", stationcode:"(ROU)" }, 
          { stationname: "JASIDIH", stationcode:"(JSME)" },           { stationname: "Shalimar", stationcode:"(SHM)" }, 
          { stationname: "KOLKATA", stationcode:"(KOAA)" },          { stationname: "Alappuzha", stationcode:"(ALLP)" }, 
          { stationname: "MADHUPUR", stationcode:"(MDP)" },         { stationname: "Aluva", stationcode:"(AWY)" }, 
          { stationname: "MALDA TOWN", stationcode:"(MLDT)" },          { stationname: "Arakkonam", stationcode:"(AJJ)" }, 
          { stationname: "NAIHATI JN.", stationcode:"(NH)" },           { stationname: "Chengalpattu", stationcode:"(CGL)" }, 
          { stationname: "NEW FARAKKA", stationcode:"(NFK)" },           { stationname: "Chengannur", stationcode:"(CNGR)" }, 
          { stationname: "Rampurhat", stationcode:"(RPH)" },           { stationname: "Dindigul", stationcode:"(DG)" }, 
          { stationname: "Agra Fort", stationcode:"(AF)" },           { stationname: "Ernakulam town ", stationcode:"(ERN)" },    
          { stationname: "Aligarh", stationcode:"(ALJN)" },          { stationname: "Erode jn", stationcode:"(ED)" }, 
          { stationname: "Banda", stationcode:"(BNDA)" },           { stationname: "Jolarpettai", stationcode:"(JTJ)" }, 
          { stationname: "Chitrakutdham", stationcode:"(CKTD)" },          { stationname: "Kanhangad", stationcode:"(KZE)" },   
          { stationname: "Etawah", stationcode:"(ETW)" },         { stationname: "Kanniyakumari ", stationcode:"(CAPE)" },  
          { stationname: "Fatehpur", stationcode:"(FTP)" },          { stationname: "Kannur", stationcode:"(CAN)" }, 
          { stationname: "Lalitpur", stationcode:"(LAR)" },           { stationname: "Karur", stationcode:"(KRR)" }, 
          { stationname: "Mahoba", stationcode:"(MBA)" },          { stationname: "Kasargod", stationcode:"(KGQ)" }, 
          { stationname: "Morena", stationcode:"(MRA)" },          { stationname: "Katpadi", stationcode:"(KPD)" }, 
          { stationname: "Orai", stationcode:"(ORAI)" },           { stationname: "Kayankulam", stationcode:"(KYJ)" }, 
          { stationname: "Phaphund", stationcode:"(PHD)" },          { stationname: "Kollam", stationcode:"(QLN)" }, 
          { stationname: "Raja Ki Mandi", stationcode:"(RKM)" },         { stationname: "Kottayam", stationcode:"(KTYM)" }, 
          { stationname: "Tundla", stationcode:"(TDL)" },          { stationname: "Kovilpatti", stationcode:"(CVP)" }, 
          { stationname: "Mirzapur", stationcode:"(MZP)" },           { stationname: "Kumbakonam", stationcode:"(KMU)" }, 
          { stationname: "Azamgarh", stationcode:"(AMH)" },           { stationname: "Mangalore centra", stationcode:"(MAQ)" }, 
          { stationname: "Mayiladuthurai", stationcode:"(MV)" },  { stationname: "Tirunelveli", stationcode:"(TEN)" }, 
          { stationname: "Mettupalaiyam", stationcode:"(MTP)" },  { stationname: "Tiruppur", stationcode:"(TUP)" }, 
          { stationname: "Nagercoil", stationcode:"(NCJ)" },  { stationname: "Tirur", stationcode:"(TIR)" }, 
          { stationname: "Palakkad", stationcode:"(PGT)" },  { stationname: "Tiruvalla", stationcode:"(TRVL)" }, 
          { stationname: "Payyannur", stationcode:"(PAY)" },  { stationname: "Tuticorin", stationcode:"(TN)" }, 
          { stationname: "Rameswaram", stationcode:"(RMM)" },  { stationname: "Vadakara", stationcode:"(BDJ)" }, 
          { stationname: "Salem", stationcode:"(SA)" },  { stationname: "Villupuram", stationcode:"(VM)" }, 
          { stationname: "Shoranur", stationcode:"(SRR)" },  { stationname: "Virudhunagar", stationcode:"(VPT)" }, 
          { stationname: "Tambaram", stationcode:"(TBM)" },  { stationname: "Bangalore Cantt", stationcode:"(BNC)" }, 
          { stationname: "Thalassery", stationcode:"(TLY)" },  { stationname: "Bangarpet", stationcode:"(BWT)" }, 
          { stationname: "Thanjavur", stationcode:"(TJ)" },  { stationname: "Belgaum", stationcode:"(BGM)" }, 
          { stationname: "Tiruchchirappalli", stationcode:"(TPJ)" },  { stationname: "Bellary", stationcode:"(BAY)" }, 
 { stationname: "Bijapur", stationcode:"(BJP)" },  { stationname: "HOSHANGABAD", stationcode:"(HBD)" }, 
 { stationname: "Davangere", stationcode:"(DVG)" },  { stationname: "ITARSI", stationcode:"(ET)" }, 
 { stationname: "Dharwad", stationcode:"(DWR)" },  { stationname: "KATNI", stationcode:"(KTE)" }, 
 { stationname: "Hospet", stationcode:"(HPT)" },  { stationname: "Kota", stationcode:"(KOTA)" }, 
 { stationname: "Hubli", stationcode:"(UBL)" },  { stationname: "KOTA", stationcode:"(MYR)" }, 
 { stationname: "Kengeri", stationcode:"(KGI)" },  { stationname: "PIPARIYA", stationcode:"(PPI)" }, 
 { stationname: "Krishnarajapuram", stationcode:"(KJM)" },  { stationname: "Rewa", stationcode:"(REWA)" }, 
 { stationname: "Mysore", stationcode:"(MYS)" },  { stationname: "SATNA", stationcode:"(STA)" }, 
 { stationname: " Shimoga Town", stationcode:"(SMET)" },  { stationname: "SAUGOR", stationcode:"(SGO)" }, 
 { stationname: " SSP Nilayam", stationcode:"(SSPN)" },  { stationname: " SAWAI MADHO", stationcode:"(SWM)" }, 
 { stationname: " Vasco-Da-Gama", stationcode:"(VSG)" },  { stationname: "VIDISHA", stationcode:"(BHS)" }, 
 { stationname: "BHARATPUR", stationcode:"(BTE)" },  { stationname: "Anand", stationcode:"(ANND)" }, 
 { stationname: "Bina", stationcode:"(BINA)" },  { stationname: "Ankleshwar", stationcode:"(AKV)" }, 
 { stationname: "DAMOH", stationcode:"(DMO)" },  { stationname: "Bharuch", stationcode:"(BH)" }, 
 { stationname: "HABIBGANJ", stationcode:"(HBJ)" },  { stationname: "Mahesana", stationcode:"(MSH)" }, 
 { stationname: "Bhavnagar Termin", stationcode:"(BVC)" },  { stationname: "Nagda", stationcode:"(NAD)" }, 
 { stationname: "Chittorgarh Jn.", stationcode:"(COR)" },  { stationname: "Navsari", stationcode:"(NVS)" }, 
 { stationname: "Gandhidham", stationcode:"(GIM)" },  { stationname: "New Bhuj", stationcode:"(NBVJ)" }, 
 { stationname: "Indore", stationcode:"(IND)" },  { stationname: "Palanpur", stationcode:"(PNU)" }, 
 { stationname: "Jamnagar", stationcode:"(JAM)" },  { stationname: "Ratlam", stationcode:"(RTM)" }, 
 { stationname: " Nadiad", stationcode:"(ND)" },  { stationname: "Surendranagar", stationcode:"(SUNR)" }, 
 { stationname: "Udhana", stationcode:"(UDN)" }, { stationname: "Valsad", stationcode:"(BL)" }, 
 { stationname: "Ujjain", stationcode:"(UJN)" }, { stationname: "Veraval", stationcode:"(VAPI)" }, 
 { stationname: "Vapi", stationcode:"(VAPI)" }, { stationname: "Viramgam", stationcode:"(VG)" }, 
 













































        ];
  
  onSubmit() {
    console.log(this.myGroup.value)
    
   
  }
  
  constructor(private builder: FormBuilder) {
    this.myGroup = new FormGroup({
      fstation: new FormControl(''),
      tstation: new FormControl(''),
    });
   }

   onOptionsSelected() {
    console.log(this.fstation); 
    this.filtered = this.station.filter(t=>t.stationname ==this.fstation);

  }

  onOptionsSelectedt() {
    console.log(this.tstation); 
    this.filtered = this.station.filter(t=>t.stationname ==this.tstation);

  }
  clear1(){
    this.fstation = "";
  }
  clear2(){
    this.tstation = "";
  }
  

  ngOnInit(): void {
    this.myGroup = this.builder.group({
      fstation: [null, Validators.required],
      tstation: [null, Validators.required]
    });
    
    
  }
 

    
    
  }


