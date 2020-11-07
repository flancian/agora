PROGRAM GRNDWAV3;              {  AUTHOR:  R.J.Edwards C.Eng. MIEE. FIQA.  }
                               {  SOURCE-CODE LANGUAGE:  Turbo Pascal 6.0  }
                               {  LAST MINOR AMENDMENT:  31st August 2002  }
USES crt;

Const Ro=50;                                   { Rx input resistance, ohms }
      Gt=3;             { transmit antenna power gain relative to isotrope }
      Gr=3;              { receive antenna power gain relative to isotrope }
      ae=8500;   { equivalent radius of the Earth incl atmospheric effects }

VAR  F, lambda, Km, Pt, Et, Er, BasicdB, SoildB, TotDb, Pin,

     CurvedB, PathdB, p, A, SD, R, K, DRH, FS, Vin, dB, S : Real;

     T : Array [1..18] OF String;

     choice, Flag : char;

     N : Integer;

PROCEDURE SoilDescriptions;
Begin
  T[1]:='Perfectly conducting ground.                                R=0   K=1';
  T[2]:='Salt seas, oceans, remote from river estuaries.          R=0.22  K=80';
  T[3]:='Agricultural plains, warm, moist, dark fertile soil.       R=25  K=30';
  T[4]:='Temperate climate, rainfall, steppes, pampas, prairies.    R=40  K=25';
  T[5]:='Pastoral, undulating, damp, fertile soil, streams, trees.  R=60  K=20';
  T[6]:='Farmland, undulating, woods, fields, grasslands, cattle.  R=100  K=17';
  T[7]:='Flat, marshy, slow streams, grasses, weeds, bushes.       R=150  K=15';
  T[8]:='Undulating, drier but some streams, woods, medium soil.   R=200  K=14';
  T[9]:='Hilly, some forests, grasses, weeds, poor clay soil.      R=300  K=13';
  T[10]:='Fairly dry climate, grasses, poor sandy stony soil.       R=500  K=12';
  T[11]:='Dry climate, hilly, poor soil, towns and villages.        R=700  K=11';
  T[12]:='Suburban, low-rise houses, roads, gardens, parks, pools. R=1000  K=10';
  T[13]:='Hilly, rocky, semi-desert, small rainfall, some plants.   R=1500  K=8';
  T[14]:='City blocks, roads, streets, industrial areas, rivers.    R=2000  K=6';
  T[15]:='High-rise city blocks, spaghetti road systems, railways.  R=4000  K=5';
  T[16]:='Mountainous regions, bare rock, vegetation in valleys.    R=6000  K=4';
  T[17]:='Arid sand deserts, minimal plant and animal life.        R=15000  K=3';
  T[18]:='Unpolluted deep fresh water lakes, weeds, fish, birds.   R=1000  K=80';
End;

PROCEDURE SoilLookUpTable;
Begin
    IF N=1 THEN Begin R:=0.00001; K:=1   End;
    IF N=2 THEN Begin R:=0.22;    K:=80  End;
    IF N=3 THEN Begin R:=25;      K:=30  End;
    IF N=4 THEN Begin R:=40;      K:=25  End;
    IF N=5 THEN Begin R:=60;      K:=20  End;
    IF N=6 THEN Begin R:=100;     K:=17  End;
    IF N=7 THEN Begin R:=150;     K:=15  End;
    IF N=8 THEN Begin R:=200;     K:=14  End;
    IF N=9 THEN Begin R:=300;     K:=13  End;
    IF N=10 THEN Begin R:=500;    K:=12  End;
    IF N=11 THEN Begin R:=700;    K:=11  End;
    IF N=12 THEN Begin R:=1000;   K:=10  End;
    IF N=13 THEN Begin R:=1500;   K:=8   End;
    IF N=14 THEN Begin R:=2000;   K:=6   End;
    IF N=15 THEN Begin R:=4000;   K:=5   End;
    IF N=16 THEN Begin R:=6000;   K:=4   End;
    IF N=17 THEN Begin R:=15000;  K:=3   End;
    IF N=18 THEN Begin R:=1000;   K:=80  End;
End;

PROCEDURE QuitProgram;
Begin
  window(1,1,80,25); TextBackground(0); TextColor(7);
  clrscr; Halt
End;

PROCEDURE W25;
Begin
  window(1,25,80,25);
  TextColor(10);TextBackground(4); clrscr
End;

PROCEDURE W1;
Begin
  window(1,1,80,24);
  TextColor(11);TextBackground(0);clrscr;
End;

PROCEDURE W2;
Begin
  window(1,2,80,4);
  TextColor(14);TextBackground(1);clrscr;
End;

PROCEDURE W3;
Begin
  window(1,1,80,3);
  TextBackground(1); TextColor(10);
End;

PROCEDURE W4;
Begin
  window(1,4,80,22);
  TextColor(7);TextBackground(0);
End;

PROCEDURE W5;
Begin
  window(1,5,80,5);
  TextColor(11);TextBackground(4);clrscr;
End;

PROCEDURE W6;
Begin
  window(1,1,80,1);
  TextColor(10);TextBackground(4);clrscr;
End;

PROCEDURE W7;
Begin
  Window(1,2,80,24);
  TextBackground(0);TextColor(11);ClrScr;
End;

PROCEDURE W8;
Begin
  window(1,1,80,1);
  TextColor(10);TextBackground(0);clrscr;
End;

PROCEDURE W23;
Begin
  window(1,23,80,23);
  TextColor(7);TextBackground(1);clrscr;
End;

PROCEDURE W24;
Begin
  window(1,24,80,24);
  TextColor(7);TextBackground(1);clrscr;
End;

PROCEDURE Notes;
Begin
  W1;
  writeln;
  Writeln('Basic or spreading loss is proportional to path length measured in wavelengths.');
  Writeln('It increases by 6 dB, or 1 S-unit, each time the path length doubles. Computed');
  Writeln('basic loss in this program includes power gain of both Tx and Rx antennas rel-');
  Writeln('ative to isotropic.  Gain above isotropic = 3 times = 4.77 dB for each antenna.');
  writeln;
  writeln('Impedance of the ground is measured in units of Ohm*metres. An ohm*metre is the');
  writeln('resistance between opposite faces of a 1-metre cube of the soil. Soil has a -ve');
  writeln('impedance angle which can be represented by a capacitance in parallel with the');
  writeln('resistive component. The capacitance is that between 1 metre square plates, one');
  writeln('metre apart, when the soil has a permittivity of K relative to air.');
  writeln;
  writeln('Soil impedance decreases as the fraction of organic relative to rocky material');
  writeln('increases. It decreases rapidly as the water content increases and as amounts');
  writeln('of ionic salts disolved in the water increase.  It has a negative temperature');
  writeln('coefficient and impedance rises to very high values as water content freezes.');
  writeln('Impedance decreases with increasing frequency due to the shunt capacitance.');
  writeln;
  writeln('It is not essential for the program user to know R and K of the ground - select');
  writeln('the type of terrain from the list which best fits the average of the different');
  writeln('types which may exist along a particular path.  Propagation below 1 MHz is very');
  writeln('insensitive to the value of K. So below 1 MHz if the R value is known enter any');
  write  ('type of terrain which has that R value.  K is of consequence above 3 or 4 MHz.');
  W25;
  write(' N(otes) or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['N','Q'];
  IF Choice='Q' THEN QuitProgram;
  W1;
  Writeln;
  Writeln('Terrain types with crude estimates of ground resistivity and permittivity.');
  writeln;
  writeln('1.  ',T[1]);
  writeln('2.  ',T[2]);
  writeln('3.  ',T[3]);
  writeln('4.  ',T[4]);
  writeln('5.  ',T[5]);
  writeln('6.  ',T[6]);
  writeln('7.  ',T[7]);
  writeln('8.  ',T[8]);
  writeln('9.  ',T[9]);
  writeln('10. ',T[10]);
  writeln('11. ',T[11]);
  writeln('12. ',T[12]);
  writeln('13. ',T[13]);
  writeln('14. ',T[14]);
  writeln('15. ',T[15]);
  writeln('16. ',T[16]);
  writeln('17. ',T[17]);
  writeln('18. ',T[18]);
  Writeln;
  Write  ('Note correlation between R and K except for freshwater lakes and estuaries.');
  W25;
  write(' N(otes) or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['N','Q'];
  IF Choice='Q' THEN QuitProgram;
  W8;
  Write  ('   Crude estimation of radiating efficiency of short vertical antennas at LF');
  W7;
  Writeln;
  Writeln('Radiating (and receiving) efficiency = Rr/(Rr+Rg+Rc)*100% where Rr = radiation');
  Writeln('resistance = 37*Square(Tangent(Phi/2)) ohms,  Phi = angular height of antenna,');
  Writeln('Rg = loss ohms looking into the ground radial system, Rc = the loss resistance');
  Writeln('of the tuning/matching coil = coil reactance divided by coil Q. Coil reactance');
  Writeln('= antenna capacitative reactance which increases as antenna height decreases.');
  Writeln;
  Writeln('As the efficiency equation implies, in the most simple tuning/matching circuit');
  Writeln('Rr, Rg and Rc are effectively all in series. For a given antenna, Rx effncy = ');
  Writeln('Tx effncy. At LF, for a small Rx coil Q=25 to 70. Large Tx coil Q=150 to 400.');
  Writeln;
  Writeln('A 1" dia ground rod, 6-feet deep, in soil with resistivity 100 ohm*metres, Rg');
  Writeln('= 50 ohms.  For 8 radials, 10awg, 30 feet long, buried 4 inches, Rg = 5 ohms.');
  Writeln('For other soil resistivities loss resistance Rg varies directly in proportion.');
  Writeln;
  Writeln('The input capacitance of an 8-foot vertical antenna, 1/3-inch dia, is 25pF with');
  Writeln('a reactance of 1680 ohms at 3.8 MHz and 47,000 ohms at 136 kHz.');
  Writeln;
  Writeln('The efficiency of the 8-foot antenna when used for receiving at 3.8 MHz, tuned');
  Writeln('against the ground rod is approx 0.5 percent.  At 136 KHz it is only 0.00005 %');
  Writeln('For other lengths and frequencies vary the above in appropriate proportions.');
  Writeln('For more accurate efficiency estimates use other programs by the same author.');
  W25;
  write(' N(otes) or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['N','Q'];
  IF Choice='Q' THEN QuitProgram;
  W1;
  writeln;
  writeln('Reference field strength for groundwave prediction is 300 milli-volts per metre');
  writeln('at a distance of 1 km from a transmitter which radiates 1 kilowatt from a short');
  writeln('vertical antenna over a flat lossless ground, subject to the condition that the');
  writeln('groundpath distance is greater than 3 or 4 wavelengths.');
  writeln;
  writeln('"Short" means 1/4-wave or less in height, ie., at heights at which radiation in');
  writeln('the vertical plane is proportional to the cosine of the angle of elevation.');
  writeln;
  writeln('Basic loss increases by exactly 6.01 dB each time path length doubles. Ground');
  Writeln('loss predictions as far as the radio horizon are accurate within the variations');
  writeln('expected in field strength measurements between one location and another due to');
  writeln('random variability in soil characteristics and undulations in the terrain.');
  Writeln;
  Writeln('At distances 5 or 6 times greater than the radio horizon or when the total path');
  Writeln('loss exceeds 150 dB, the uncertainty in predicting field strength may be in the');
  Writeln('range +/- 15 dB. The most accurate predictions are below 2 MHz over oceanic and');
  Writeln('salt sea paths.  The least accurate are at HF over steep hills, mountainous or');
  Writeln('densely populated fully developed regions. The program is useful up to 30 MHz.');
  Writeln;
  Writeln('Above 3.5 MHz in daylight and below 10 MHz at night, at distances greater than');
  Writeln('the radio horizon, ionospheric propagation may be as strong as or stronger than');
  Write  ('the groundwave. In multi-path conditions severe fading and distortion may occur.');
  W25;
  write(' E(nter data now), B(egin again) or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','B','Q'];
  IF Choice='Q' THEN QuitProgram;
END;

PROCEDURE Introduction;
BEGIN
  W6;
  Write(' Program name: GRNDWAV3.exe    Author: R.J.Edwards G4FGQ  (C)  31st August 2002');
  W2;
  Writeln;
  Write('     GROUNDWAVE PROPAGATION vs PATHLENGTH & FREQUENCY FOR VARIOUS TERRAINS');
  Window(1,5,80,24);
  TextColor(11);TextBackground(0);clrscr;
  Writeln;
  Writeln('Both transmitting and receiving antennas are verticals, height = 1/4-wavelength');
  Writeln('or less, above a system of buried radial wires.  A 1/2-wave vertical has 1 dB');
  Writeln('more gain than a short vertical.  A 5/8-wave vertical has 1.6 dB more gain.');
  Writeln;
  Writeln('Predictions are valid at frequencies up to 15 or 20 MHz and at higher freqs if');
  Writeln('there are not many obstructions along the path with heights of the order of 1/4');
  Writeln('wavelength or greater and the landscape is fairly flat, no steep hills.');
  Writeln;
  Writeln('Total dB loss between Tx output and Rx input is the sum of the basic spreading');
  Writeln('loss along the path, loss due to currents induced in the ground by the passing');
  Writeln('wave, diffraction over the horizon due to Earth curvature and antenna radiating');
  Writeln('and receiving inefficiencies including feedline losses, etc.');
  Writeln;
  Writeln('Distance to the radio horizon, approx 80/Cuberoot(MHz) Km, is where diffraction');
  Writeln('loss begins to take effect. Up to the horizon the Earth is assumed flat. Diff- ');
  Writeln('raction loss in dB increases in proportion to path length and to the cube-root');
  Writeln('of frequency. It is also affected by the type of terrain. This program assumes');
  Write  ('antennas are ground-mounted and only a small part of the path is line-of-sight.');
  W25;
  write(' E(nter data now),  N(otes),  Q(uit) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','N','Q'];
  IF Choice='N' THEN Notes;
  IF Choice='Q' THEN QuitProgram;
END;

PROCEDURE InputScreen;
BEGIN
  W3; Textcolor(11); ClrScr;
  WRITELN(' D. Ground path, kilometres              P. Tx power output, watts ...');
  WRITELN(' G. Type of terrain .......              T. Tx antenna effncy, percent');
  WRITE  (' F. Frequency, megahertz ..              R. Rx antenna effncy, percent');
END;

PROCEDURE OutputScreen;
BEGIN
  W4; TextColor(7); ClrScr;
  GotoXY(1,2);
  Writeln(' Terrain:  ');
  Writeln;
  Writeln('               Ground path distance           miles');
  Writeln('                 ..    ..     ..              wavelengths');
  Writeln('          Distance to radio horizon           kilometres');
  Writeln('      RF "skin" depth in the ground           metres');
  Writeln;
  Writeln('               Basic spreading loss           dB incl ant gains rel isotropic');
  Writeln('      Additional loss in the ground           ..');
  Writeln('   Earth curvature diffraction loss           ..');
  Writeln('   Total path loss between antennas           ..');
  Writeln;
  Writeln(' Overall loss Tx output to Rx input           dB includes antenna efficiency');
  Writeln('   Field strength at receiving site             ');
  Writeln('    Power input to matched receiver             ');
  Writeln('      50-ohm matched receiver input                                  S9 = 50uV');
  Write  ('           Receiver S-meter reading                           One S-unit = 6dB');
END;

PROCEDURE EnterKm;
BEGIN
  W23;
  W24;
  WRITE(' 1 mile = 1.609 kilometres.    1 Km = 0.6214 miles.');
  W25;
  REPEAT
    WRITE(' Enter ground path length, kilometres ....   ');
    {$I-}  READ(Km)  {$I+}
  UNTIL IOresult=0;
  IF Km<0.1 THEN Km:=0.1;
  IF Km>20000 THEN Km:=20000;
  W3;
  gotoXY(28,1);write(Km:8:1);
END;

PROCEDURE EnterTerrain;
BEGIN
  W23;
  Write('  Perfect Ground=1.     Oceans=2.    Pastoral=5.    Average=7.    Poor soil=10.');
  W24;
  Write('  Suburban=12.       Cities=14.      Mountains=16.       Fresh water lakes=18.');
  W25;
  REPEAT
    Write(' Select type of terrain along ground path, from 1 to 18 ....  ');
    {$I-}  READ(N)  {$I+}
  UNTIL IOresult=0;
  IF N<1 THEN N:=1;
  IF N>18 THEN N:=18;
  SoilLookUpTable;
  W3;
  gotoXY(28,2);write(N:8);
  W5;
  Textcolor(11); Write(' Terrain: ');
  TextColor(10); Write(T[N]);
END;

PROCEDURE EnterF;
BEGIN
  W23;
  W24;
  W25;
  REPEAT
    WRITE(' Enter Frequency, Megahertz ....   ');
    {$I-} READ(F) {$I+}
  UNTIL IOresult=0;
  IF F<0.001 THEN F:=0.001;
  W3;
  gotoXY(28,3);write(F:8:3);
END;

PROCEDURE EnterWatts;
BEGIN
  W23;
  W24;
  W25;
  REPEAT
    WRITE(' Enter transmitter power output, watts ....   ');
    {$I-}  READ(Pt)  {$I+}
  UNTIL IOresult=0;
  IF Pt>1E+6 THEN Pt:=1E+6;
  IF Pt<0.1 THEN Pt:=0.1;
  W3;
  gotoXY(71,1);write(Pt:9:1);
END;

PROCEDURE EnterTeff;
BEGIN
  W23;
  W24;
  W25;
  REPEAT
    WRITE(' Enter transmitting antenna efficiency, percent ....   ');
    {$I-}  READ(Et)  {$I+}
  UNTIL IOresult=0;
  W3;
  IF Et<0.0001 THEN Et:=0.0001;
  IF Et>100 THEN Et:=100;
  gotoXY(71,2);write(Et:9:4);
END;

PROCEDURE EnterReff;
BEGIN
  W23;
  W24;
  W25;
  REPEAT
    WRITE(' Enter receiving antenna efficiency, percent ....   ');
    {$I-}  READ(Er)  {$I+}
  UNTIL IOresult=0;
  W3;
  IF Er<0.0001 THEN Er:=0.0001;
  IF Er>100 THEN Er:=100;
  gotoXY(71,3);write(Er:9:4);
END;

Function RTP(x,n:Real):Real;
Begin
  RTP:=Exp(n*Ln(x));
End;

Function Tan(y:Real):Real;
Begin
  Tan:=Sin(y)/Cos(y)
End;

Procedure ComputeSkinDepth;
Begin
  SD:=67.6/F/Sqrt(K)/Sqrt(Sqrt(Sqr(18000/R/F/K)+1)-1)
End;

Procedure Compute;
Var xx, y, Z, J, D, AntGain, KH, KV, Beta, X, FX: Real;
Begin
  Flag:='A';
  Lambda:=300/F;                                    { wavelength in metres }
  D:=1000*kM;                                    { Path distance in metres }
  J:=Lambda/4/Pi/D;                     { spreading volts ratio along path }
  AntGain:=4.34295*Ln(Gt*Gr);      { sum of both antenna gains in decibels }
  BasicdB:=8.68589*Ln(1/J)-AntGain;   { basic loss including antenna gains }
  xx:=18000/F/R;
  y:=Sqrt(Sqr(xx)+Sqr(K+1));
  p:=Pi*D/Lambda/y;

  IF p>15000 THEN Begin
                   p:=15000;
                   Flag:='B'
                 End;

  A:=(2+0.3*p)/(2+p+0.6*p*p) - Sqrt(p/2)*Exp(-0.625*p)*(K+1)/y;
                  { A = field strength reduction factor due to ground loss }
  SoildB:=8.68589*Ln(1/A);              { additional dB due to ground loss }

  DRH:=80/RTP(F,1/3);              { distance to radio horizon, kilometres }
  IF kM>DRH THEN
{ *************************************************************************}
 { Code between these two lines is adapted from formulae in Recommendation
       ITU-R P.526-7. "Propagation By Diffraction Over A Spherical Earth." }
  Begin
    KH:=0.36*RTP(ae*F,-0.333)*RTP(Sqr(K-1)+Sqr(18000/R/F),-0.25);
    KV:=KH*Sqrt(Sqr(K)+Sqr(18000/R/F));
    Beta:=(1+1.6*Sqr(KV)+0.75*Sqr(Sqr(KV)))/(1+4.5*Sqr(KV)+1.35*Sqr(sqr(KV)));
    X:=2.2*Beta*RTP(F,0.333)*RTP(ae,-0.666)*Km;
    FX:=11+4.343*Ln(X)-17.6*X;  { extra dB due to diffraction over horizon }
  End
  ELSE FX:=0;
{ *************************************************************************}

  CurvedB:=-FX;
  IF CurvedB<0 THEN CurvedB:=0;

  IF CurvedB>350 THEN Begin
                        CurvedB:=350;
                        Flag:='B'
                      End;


  Z:=Exp(-CurvedB/8.68589);           { volts ratio of Earth curvature loss }
  PathdB:=BasicdB+SoildB+CurvedB;     { includes ant gains rel to isotropic }
  TotDb:=PathdB-4.34295*Ln(Er*Et/10000); { total Tx to Rx includes ineffncy }
  FS:=Sqrt(30*Pt*Gt*Et/100)/D*A*Z*1E+6;           { Field strength uV/metre }
  Vin:=Sqrt(Pt*Gt*Gr*Ro*Et*Er/10000)*J*A*Z*1E+6;      { matched Tx input uV }

  IF Vin>50 THEN dB:=8.6859*Ln(Vin/50) ELSE S:= 9-1.4427*Ln(50/Vin);
  Pin:=Sqr(Vin/1E+6)/Ro;                       { receiver power input Watts }
  ComputeSkinDepth;
End;

PROCEDURE DisplayResults;
BEGIN
  W5;
  Textcolor(11); Write(' Terrain: ');
  TextColor(10); Write(T[N]);
  W4; TextColor(14);
  GotoXY(36,4); Write(Km/1.6093:9:1);
  GotoXY(36,5); Write(1000*kM/Lambda:9:1);
  GotoXY(36,6); Write(DRH:9:1);
  GotoXY(36,7); Write(SD:9:1);
  GotoXY(36,9); Write(BasicdB:9:1);
  GotoXY(36,10); Write(SoildB:9:1);
  GotoXY(36,11); Write(CurvedB:9:1);
  GotoXY(36,12); Write(PathdB:9:1);
  GotoXY(36,14); Write(TotDb:9:1);
  GotoXY(36,15);
  IF FS>=1E+6 THEN Write(FS*1E-6:9:2,'  volts per metre       ');
  IF (FS>=1E+3) AND (FS<1E+6) THEN Write(FS*1E-3:9:2,'  milli-volts per metre ');
  IF FS<1E+3 THEN Write(FS:9:2,'  micro-volts per metre ');
  gotoXY(36,16);
  IF Pin>1 THEN Write(Pin:9:2,'  watts      ');
  IF (Pin>1E-3) AND (Pin<=1) THEN Write(Pin*1E+3:9:2,'  milli-watts  ');
  IF (Pin>1E-6) AND (Pin<1E-3) THEN Write(Pin*1E+6:9:2,'  micro-watts  ');
  IF (Pin>1E-9) AND (Pin<1E-6) THEN Write(Pin*1E+9:9:2,'  nano-watts   ');
  IF Pin<1E-9 THEN Write(Pin*1E+12:9:2,'  pico-watts   ');
  gotoXY(36,17);
  IF Vin>1E+6 THEN Write(Vin*1E-6:9:2,'  volts       ');
  IF (Vin>1E+3) AND (Vin<=1E+6) THEN Write(Vin*1E-3:9:2,'  milli-volts  ');
  IF Vin<=1E+3 THEN Write(Vin:9:2,'  micro-volts  ');
  gotoXY(36,18);
  IF Vin>50 THEN Write('   S9 + ',dB:1:0,'  decibels ')
            ELSE Write('      ',S:2:1,'  S-units  ');

  GotoXY(1,19);
  TextColor(13+Blink);
  IF Flag='B' THEN Write(' NUMERICAL OVERFLOW. RESULTS INVALID. REDUCE FREQ, PATH LENGTH OR GROUND LOSS.');
  IF FLAG='A' THEN Write('                                                                              ');
END;

BEGIN
  SoilDescriptions;
  REPEAT
    REPEAT Introduction UNTIL Choice='E';
  InputScreen;
  OutputScreen;
  EnterKm;
  EnterTerrain;
  EnterF;
  EnterWatts;
  EnterTeff;
  EnterReff;
  REPEAT
    W3;
    IF F<0.001 THEN F:=0.001;
    IF Km<0.1 THEN Km:=0.1;
    IF Km>20000 THEN Km:=20000;
    IF Pt<0.1 THEN Pt:=0.1;
    IF Pt>1E+6 THEN Pt:=1E+6;
    gotoXY(28,2);write(N:8);
    gotoXY(28,3);write(F:8:3);
    gotoXY(28,1);write(Km:8:1);
    gotoXY(71,1);write(Pt:9:1);
    Compute;
    DisplayResults;
    W23;
    Write(' Vary frequency with keys 1,2        Vary ground path distance with keys 3,4');
    W24;
    Write(' Vary Tx power with keys 5,6       Cycle through terrain types with keys 7,8');
    W25;
    Write(' Change data with keys D,G,F,P,T,R.   B(egin again) or Q(uit program) .... ');
    REPEAT
      Choice:=upcase(readkey);
    UNTIL Choice IN ['1'..'8',' ','D','G','F','P','T','R','B','Q'];
      IF Choice='1' THEN F:=F/1.01;
      IF Choice='2' THEN F:=F*1.01;
      IF Choice='3' THEN Km:=Km/1.01;
      IF Choice='4' THEN Km:=Km*1.01;
      IF Choice='5' THEN Pt:=Pt/1.05;
      IF Choice='6' THEN Pt:=Pt*1.05;
      IF Choice='7' THEN Begin N:=N-1; IF N<1 THEN N:=18; SoilLookUpTable End;
      IF Choice='8' THEN Begin N:=N+1; IF N>18 THEN N:=1; SoilLookUpTable End;
      IF Choice='D' THEN EnterKm;
      IF Choice='G' THEN EnterTerrain;
      IF Choice='F' THEN EnterF;
      IF Choice='P' THEN EnterWatts;
      IF Choice='T' THEN EnterTeff;
      IF Choice='R' THEN EnterReff;
      IF Choice='Q' THEN QuitProgram;
    UNTIL Choice='B';
  UNTIL Choice='Q'
END.