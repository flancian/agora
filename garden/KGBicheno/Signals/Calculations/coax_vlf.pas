PROGRAM COAX_VLF;                 {  Author: R.J.Edwards C.Eng. MIEE. FIQA  }
                                  {  Source Code: Turbo Pascal version 6.0  }
USES crt;                         {  Last amendment: 13th April 2006        }

VAR  Freq, Zo, Len, Dia, SWR1, SWR2, RL, XL, Zin, Rin, Xin, Lambda, Waves,
     Alpha, Gamma1, Gamma2, Phi1, dB, Eff, OD, Zo1, RR, Ro, Xo, Angle, Po,
     Beta, VelFac, Phi2, AngIn, AA, Ly : Real;

     choice : char;

PROCEDURE QuitProgram;
Begin
  window(1,1,80,25); TextBackground(0); TextColor(7);
  clrscr; Halt
End;

PROCEDURE W25;
Begin
  window(1,25,80,25);
  TextColor(14);TextBackground(4); clrscr
End;

PROCEDURE W1;
Begin
  window(1,1,80,24);
  TextColor(11);TextBackground(0);clrscr;
End;

PROCEDURE W2;
Begin
  window(1,2,80,4);
  TextColor(11);TextBackground(1);clrscr;
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
  clrscr
End;

PROCEDURE W5;
Begin
  window(1,5,80,24);
  TextColor(11);TextBackground(0);clrscr;
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

PROCEDURE W6;
Begin
  window(1,1,80,1);
  TextColor(14);TextBackground(4);clrscr;
End;

PROCEDURE W21;
Begin
  Window(1,21,80,22);
  TextColor(13+Blink);TextBackground(0);clrscr;
End;

PROCEDURE Notes2;
Begin
  W1;
  TextColor(14);
  Writeln('          HOW TO OBTAIN A REFLECTION COEFFICIENT MUCH GREATER THAN UNITY');
  Writeln; TextColor(11);
  Writeln('Clear the screen by going back to S(tart again) and E(nter data).');
  Writeln('Enter a frequency of 10 Hertz. (just hit zero + return).');
  Writeln('Enter nominal HF Zo = 50 ohms.');
  Writeln('Enter a line length of 50,000 metres = 50 kilometres = 31 miles. ');
  Writeln('Enter inner conductor diameter = 1 mm.');
  Writeln;
  Writeln('Enter a load resistance of zero ohms. (it''s actually limited to 1 micro-ohm).');
  Writeln('Enter a load reactance of 2117 ohms. (note the +ve value).');
  Writeln;
  Writeln('You will now have a load reflection coefficient = 2.4128 which is very near to');
  Writeln('the greatest possible value of 1+Sqrt(2) = 2.4142 and which occurs only as the');
  Writeln('frequency ultimately aproaches DC.     Values of RC>1.00 can be obtained at HF');
  Writeln('but only when the load resistance is small and the load reactance is positive.');
  Writeln;
  Writeln('It will be noticed that the load reactance has been set equal to the value of');
  Writeln('the line impedance Zo. Use keys 9,0 to vary load reactance to verify that this');
  Writeln('value of load reactance maximises the reflection coefficient. Also notice that');
  Writeln('the line input SWR is unusually very much greater than the load SWR.');
  Writeln;
  Writeln('Use your pocket calculator to show that 10*log of the ratio of the two computed');
  write  ('RC''s gives the line attenuation in decibels.  Which is what it ought to be.');
  W25;
  write(' E(nter program data now), B(egin again) or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','B','Q'];
  IF Choice='Q' THEN QuitProgram;
End;

PROCEDURE Notes;
Begin
  W1;
  Writeln; TextColor(11);
  Writeln('The program apples only to solid polyethylene insulated cables which at HF have');
  Writeln('a constant velocity factor of 0.665. As may be seen, the VF at low frequencies');
  Writeln('decreases. But this occurs on all types of line at sufficiently low frequencies');
  Writeln('from coax to open-wire. There is nothing unusual about coax.');
  Writeln;
  Writeln('The program takes into account the increase in skin effect as frequency increa-');
  Writeln('ses from power freqs to HF. Skin effect begins to show itself at the high audio');
  Writeln('freqs. See conductor loss resistance versus increasing frequency from 1 KHz.');
  Writeln;
  Writeln('Input data can be varied in small increments from the keyboard. By hitting key');
  Writeln('"T" the line can be terminated with its own Zo. The effects on SWR and the ref-');
  Writeln('lection coefficient can be seen immediately. Calculating accuracy can be judged');
  Writeln('by comparing the re-calculated line input impedance with Zo.  Line Zin = Zo.');
  Writeln('Zo can also be determined by increasing line length and attenuation to greater');
  Writeln('than 35 or 40 dB. In this condition line input Zin again equals line Zo regard-');
  Writeln('less of terminating impedance.');
  Writeln;
  Writeln('An interesting experiment is to set line length to 1/2, 1/4 and 1/8 wavelengths');
  Writeln('at 10 KHz and compare the two reflection coefficients (in dB) and their angles.');
  Writeln;
  Writeln('If line attenuation much exceeds 150 dB the program may abort due to numerical');
  write  ('overflow. Avoid long line lengths at high frequencies with small wire diameter.');
  W25;
  write(' E(nter data now),  M(ore notes),  B(egin again), or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','M','B','Q'];
  IF Choice='M' THEN Notes2;
  IF Choice='Q' THEN QuitProgram;
End;

PROCEDURE Introduction;
BEGIN
  W6;
  Write(' Program name: COAX_VLF.exe    Author: R.J.Edwards G4FGQ   (C)  13th April 2006');
  W2;
  Writeln;
  Write('           BEHAVIOUR OF COAXIAL TRANSMISSION LINES AT LOW FREQUENCIES');
  W5; Writeln;
  Writeln('At decreasing frequencies, when conductor inductive reactance becomes less than');
  Writeln('its resistance, the magnitude of line impedance Zo increases rapidly and the');
  Writeln('angle of Zo becomes progressively more negative. At power frequencies Zo is an');
  Writeln('order of magnitude greater than its HF value and its angle nears -45 degrees.');
  Writeln('From its constant value at HF the propagation velocity decreases to a low value');
  Writeln('which complicates fault-locating techniques which depend on a knowledge of the');
  Writeln('velocity factor. In general, things begin to happen at frequencies less than');
  Writeln('several hundred kilohertz. The Smith Chart makes no provision for a reactive');
  Writeln('component of Zo and becomes useless. It results in errors in the use of coaxial');
  Writeln('cables at frequencies as high as 2 MHz or more.');
  Writeln;
  Writeln('Input data to the program is very simple. The line is defined by its nominal HF');
  Writeln('impedance and the diameter of its inner conductor, plus line length and frequ-');
  Writeln('ency. A load (terminating) impedance is specified in the form of R+jX ohms.');
  Writeln;
  Writeln('First Zo = Ro+jXo is calculated. Then line input impedance Zin = Rin+jXin. Then');
  writeln('transmission loss when the line is terminated with Zo, and actual loss when the');
  write  ('line is loaded and standing waves occur on it. There is other data of interest.');
  W25;
  write(' E(nter data now),  N(otes),  or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','N','Q'];
  IF Choice='N' THEN Notes;
  IF Choice='Q' THEN QuitProgram;
END;

PROCEDURE InputScreen;
BEGIN
  W3; Textcolor(7); ClrScr;
  Writeln(' F. Frequency, kilohertz ..               D. Inner conductor dia, mm   ');
  Writeln(' Z. Line Impedance Zo, ohms               R. Load resistance, ohms .   ');
  Write  (' L. Line length, metres ...               X. Load reactance,  ohms .   ');
END;

PROCEDURE EnterFreq;
BEGIN
  W23;
  Write(' Frequency range is from 10 Hz to 5 MHz.');
  W24;
  Write('');
  W25;
  REPEAT
    WRITE(' Enter frequency, kilohertz ....   ');
    {$I-} READ(Freq) {$I+}
  UNTIL IOresult=0;
  IF Freq<0.01 THEN Freq:=0.01;
  IF Freq>5000 THEN Freq:=5000;
  W3;
  gotoXY(28,1);write(Freq:9:3);
END;

PROCEDURE EnterZo;
BEGIN
  W23;
  Write(' Zo is the nominal characteristic impedance of the coaxial line at HF.');
  W24;
  Write(' It will be in the range 20 to 120 ohms.');
  W25;
  REPEAT
    WRITE(' Enter nominal HF impedance Zo of the line, ohms ....   ');
    {$I-} READ(Zo) {$I+}
  UNTIL IOresult=0;
  IF Zo<20 THEN Zo:=20;
  IF Zo>120 THEN Zo:=120;
  W3;
  gotoXY(28,2);write(Zo:9:1);
END;

PROCEDURE EnterLen;
BEGIN
  W23;
  Write(' This is the physical length of line.  Not related to wavelength.');
  W24;
  Write(' 1 inch = 25.4 mm.   1 foot = 0.3048 mm.   Zero may be entered.  Max = 100 Km');
  W25;
  REPEAT
    WRITE(' Enter line length, metres ....   ');
    {$I-}  READ(Len)  {$I+}
  UNTIL IOresult=0;
  IF Len<0.000001 THEN Len:=0.000001;
  IF Len>99999.99 THEN Len:=99999.99;
  W3;
  gotoXY(28,3);write(Len:9:2);
END;

PROCEDURE EnterDia;
BEGIN
  W23;
  Write(' Inner conductor diameter is needed to calculate line loss. ');
  W24;
  Write(' Copper conductors assumed.     1 inch = 25.4 mm.    1 mm = 0.03937 inches');
  W25;
  REPEAT
    WRITE(' Enter diameter of inner coaxial conductor, millimetres ....   ');
    {$I-}  READ(Dia)  {$I+}
  UNTIL IOresult=0;
  IF Dia<0.1 THEN Dia:=0.1;
  W3;
  gotoXY(69,1);write(Dia:10:2);
END;

PROCEDURE EnterLoadR;
BEGIN
  W23;
  Write(' Load or terminating resistance can be between 0 and 9999999.9 ohms.');
  W24;
  Write(' Load impedance is in the form of R + jX.');
  W25;
  REPEAT
    WRITE(' Enter load resistance ....   ');
    {$I-} READ(RL) {$I+}
  UNTIL IOresult=0;
  IF RL<0.0000001 THEN RL:=0.0000001;
  IF RL>9999999.9 THEN RL:=9999999.9;
  W3;
  gotoXY(69,2);write(RL:10:1);
END;

PROCEDURE EnterLoadX;
BEGIN
  W23;
  Write(' Load or terminating reactance can be between 0 and 9999999.9 ohms.');
  W24;
  Write(' Load impedance is in the form of R + jX.   Do not forget the sign of X.');
  W25;
  REPEAT
    WRITE(' Enter load reactance, X ....   ');
    {$I-} READ(XL) {$I+}
  UNTIL IOresult=0;
  IF Abs(XL)<0.0000001 THEN XL:=0.0000001;
  IF Abs(XL)>9999999.9 THEN XL:=9999999.9;
  W3;
  gotoXY(69,3);write(XL:10:1);
END;

PROCEDURE Calculate;
Var x,K,A,B,C,D,E,F, Router, Omega, VF, Rdc, LL, CC, GG, Rac : Real;
BEGIN
  Omega:=2*Pi*Freq/1000;       { angular frequency, radians per microsecond }
  Lambda:=300000/Freq;                      { free-space wavelength, metres }
  VF:=0.665;                       { velocity factor for solid polyethylene }
  OD:=Dia*Exp(Zo/VF/60);                     { outer conductor diameter, mm }

  {-------------------------- Calculate skin effect ------------------------}

  Rdc:=0.0219524/Sqr(Dia);         { dc resistance of inner, ohms per metre }
  K:=7.565957*Dia*Sqrt(Freq/1000);                 { wire radius/skin depth }
  IF K<1 THEN x:=1+K*K*K*K/48;                       { x = ratio of Rac/Rdc }
  IF (K>=1) AND (K<2) THEN x:=1.07136-0.1462*K+0.070221*K*K+0.025835*K*K*K;
  IF (K>=2) AND (K<3) THEN x:=1.4533-0.85078*K+0.498135*K*K-0.0598291*K*K*K;
  IF (K>=3) AND (K<4) THEN x:=-0.77264+1.36015*K-0.235082*K*K+0.0213675*K*K*K;
  IF K>=4  THEN x:=Sqr(K)/(2*K-1+0.6/Sqr(K));

  {------------- Calculate internal inductance of inner conductor ----------}

  IF x<3 THEN Ly:=0.05*(1.02845-6.96805/x+23.66458/x/x
                -31.98512/x/x/x+20.18296/x/x/x/x-4.92282/x/x/x/x/x);
  IF x>=3 THEN Ly:=0.05*(1/x+1/x/x/x);
                    { Ly = internal inductance per metre of inner conductor }

  {------------- Begin calculate characteristic impedance of line ----------}

  Rac:=x*Rdc;            { AC resistance of inner conductor, ohms per metre }
  Router:=Rac*Dia/OD;                    { estimated ac resistance of outer }
  RR:=Rac+Router;              { both conductor resistances, ohms per metre }
  LL:=0.2*Ln(OD/Dia)+Ly;               { inductance, micro-henrys per metre }
  CC:=2.26*55.55555/Ln(OD/Dia);        { capacitance, pico-farads per metre }
  GG:=1E-10*Freq;                             { conductance, mhos per metre }
  Zo1:=Sqrt(Sqrt((Sqr(RR)+Sqr(Omega*LL))/(Sqr(GG)+Sqr(Omega*CC/1000000))));
  Angle:=ArcTan(Omega*LL/RR)/2-ArcTan(Omega*CC/1000000/GG)/2;
  Ro:=Zo1*Cos(Angle);                                   { R component of Zo }
  Xo:=Zo1*Sin(Angle);                                   { X component of Zo }
  AA:=ArcTan(Xo/Ro);                                          { angle of Zo }

  {------------------------ Calculate propagation values -------------------}

  Po:=Sqrt(Sqrt((Sqr(RR)+Sqr(Omega*LL))*(Sqr(GG)+Sqr(Omega*CC/1000000))));
  Angle:=ArcTan(Omega*LL/RR)/2+ArcTan(Omega*CC/1000000/GG)/2;
  Alpha:=Len*Po*Cos(Angle);                                { nepers overall }
  Beta:=Len*Po*Sin(Angle);                                { radians overall }
  Waves:=Beta/2/Pi;                            { line length in wavelengths }
  VelFac:=Omega*Len/Beta/300;                             { velocity factor }

  {------------------- Begin calculate line input impedance ----------------}

  A:=Exp(2*Alpha)*Cos(2*Beta);            { begin calculate input impedance }
  B:=Exp(2*Alpha)*Sin(2*Beta);
  C:=(Sqr(RL)-Sqr(Ro)+Sqr(XL)-Sqr(Xo))/(Sqr(RL+Ro)+Sqr(XL+Xo));
  D:=2*(Ro*XL-RL*Xo)/(Sqr(RL+Ro)+Sqr(XL+Xo));
  E:=(Sqr(A)-Sqr(C)+Sqr(B)-Sqr(D))/(Sqr(A-C)+Sqr(B-D));
  F:=2*(A*D-B*C)/(Sqr(A-C)+Sqr(B-D));
  Rin:=Ro*E-Xo*F;                                        { input resistance }
  Xin:=Xo*E+Ro*F;                                         { input reactance }
  Zin:=Sqrt(Sqr(Rin)+Sqr(Xin));                           { input impedance }
  AngIn:=ArcTan(Xin/Rin);                           { angle of Zin, radians }

  {---------------------------- Calculate load SWR -------------------------}

  Gamma1:=Sqrt((Sqr(RL-Ro)+Sqr(XL-Xo))/(Sqr(RL+Ro)+Sqr(XL+Xo)));
  Phi1:=ArcTan((XL-Xo)/(RL-Ro))-ArcTan((XL+Xo)/(RL+Ro));
  SWR1:=Abs((1+Gamma1)/(1-Gamma1));               { SWR at load end of line }
  IF SWR1>999.999 THEN SWR1:=999.999;

  {------------------------ Calculate SWR at line input --------------------}

  Gamma2:=Sqrt((Sqr(Rin-Ro)+Sqr(Xin-Xo))/(Sqr(Rin+Ro)+Sqr(Xin+Xo)));
  Phi2:=ArcTan((Xin-Xo)/(Rin-Ro))-ArcTan((Xin+Xo)/(Rin+Ro));
  SWR2:=Abs((1+Gamma2)/(1-Gamma2));              { SWR at input end of line }
  IF SWR2>999.999 THEN SWR2:=999.999;

  {----------------------- Begin calculate efficiency ----------------------}

  A:=Exp(Alpha)*Cos(Beta);
  B:=Exp(Alpha)*Sin(Beta);
  C:=Exp(-Alpha)*Cos(Beta);
  D:=-Exp(-Alpha)*Sin(Beta);
  E:=A*(Ro+RL)-B*(Xo+XL)+C*(Ro-RL)-D*(Xo-XL);
  F:=A*(Xo+XL)+B*(Ro+RL)+C*(Xo-XL)+D*(Ro-RL);
  Eff:=RL/Rin/(Sqr(E)+Sqr(F))*4*Sqr(Zo1);       { line efficiency, Pout/Pin }
  dB:=4.34294*Ln(1/Eff);                        { decibels with SWR on line }
END;

PROCEDURE ResultsScreen;
BEGIN
  W4; TextColor(7);
  Writeln;
  Writeln('                                Zo        Ro       jXo      Angle'      );
  Writeln(' Characteristic Impedance                                          degrees');
  Writeln('     Line input impedance                                          degrees');
  Writeln; TextColor(3);
  Writeln('                   Velocity Factor            relative to velocity of light');
  Writeln('        Line length in wavelengths            at the line''s own velocity');
  Writeln; TextColor(2);
  Writeln('          Outer conductor diameter            millimetres');
  Writeln('         Conductor loss resistance            ohms, for both conductors');
  Writeln('                  Line attenuation            decibels, when Zo matched   ');
  Writeln('               Actual loss in line            decibels, with standing waves');
  Writeln('         Line Efficiency, Pout/Pin            percent,   ..     ..      .. ');
  Writeln; TextColor(7);
  Writeln('    Reflection Coefficient at load            Angle =        degrees    ');
  Writeln('   Reflection Coefficient at input            Angle =        degrees    ');
  Writeln; TextColor(3);
  Write  ('              Load-end SWR         :1     Input-end SWR         :1   ');
END;

BEGIN
  REPEAT
    REPEAT
      Introduction;
    UNTIL choice='E';
  InputScreen;
  ResultsScreen;
  EnterFreq;
  EnterZo;
  EnterLen;
  EnterDia;
  EnterLoadR;
  EnterLoadX;
  REPEAT
    W3;
    IF Freq<0.01 THEN Freq:=0.01;
    IF Freq>5000 THEN Freq:=5000;
    gotoXY(28,1); write(Freq:9:3);

    IF Zo<20 THEN Zo:=20;
    IF Zo>120 THEN Zo:=120;
    gotoXY(28,2); write(Zo:9:1);

    IF Len<0.0000001 THEN Len:=0.0000001;
    IF Len>99999.99 THEN Len:=99999.99;
    gotoXY(28,3); write(Len:9:2);

    IF Dia<0.1 THEN Dia:=0.1;
    gotoXY(69,1); write(Dia:10:2);

    IF RL<0.000001 THEN RL:=0.000001;
    IF RL>9999999.9 THEN RL:=9999999.9;
    gotoXY(69,2); write(RL:10:1);

    IF Abs(XL)<0.0000001 THEN XL:=0.0000001;
    IF Abs(XL)>9999999.9 THEN XL:=9999999.9;
    gotoXY(69,3); write(XL:10:1);

    Calculate;
    ResultsScreen;
    TextColor(14);
    GotoXY(26,3); write(Zo1:10:1);
    GotoXY(36,3); write(Ro:10:1);
    GotoXY(46,3); write(Xo:10:1);
    GotoXY(56,3); write(AA*57.2958:10:2);

    GotoXY(26,4); write(Zin:10:1);
    GotoXY(36,4); write(Rin:10:1);
    GotoXY(46,4); write(Xin:10:1);
    GotoXY(56,4); write(AngIn*57.2958:10:2);

    GotoXY(35,6); write(Velfac:10:4);
    GotoXY(35,7); write(Waves:10:4);

    GotoXY(35,9); write(OD:10:2);
    GotoXY(35,10); write(RR*Len:10:2);
    GotoXY(35,11); write(Alpha*8.6859:10:4);
    GotoXY(35,12); write(dB:10:4);
    GotoXY(35,13); write(Eff*100:10:1);

    GotoXY(35,15); write(Gamma1:10:4);
    GotoXY(54,15); write(Phi1*57.2958:7:2);
    GotoXY(35,16); write(Gamma2:10:4);
    GotoXY(54,16); write(Phi2*57.2958:7:2);

    GotoXY(27,18); write(SWR1:8:3);
    GotoXY(56,18); write(SWR2:8:3);
    W23;
    Write(' Vary frequency: 1,2      Vary impedance Zo: 3,4      Vary line length: 5,6');
    W24;
    Write(' Load Resistance: 7,8     Load Reactance: 9,0       T(erminate line with Zo)');
    W25;
    Write(' Hit F,Z,L,D,R,X,T to change data.   S(tart again),   Q(uit program) ...  ');
    REPEAT
      Choice:=upcase(readkey);
    UNTIL Choice IN ['0'..'9','F','Z','L','D','V','R','X','T','S','Q'];
      IF Choice='F' THEN EnterFreq;
      IF Choice='Z' THEN EnterZo;
      IF Choice='L' THEN EnterLen;
      IF Choice='D' THEN EnterDia;
      IF Choice='R' THEN EnterLoadR;
      IF Choice='X' THEN EnterLoadX;
      IF Choice='1' THEN Freq:=Freq/1.005;
      IF Choice='2' THEN Freq:=Freq*1.005;
      IF Choice='3' THEN Zo:=Zo-0.1;
      IF Choice='4' THEN Zo:=Zo+0.1;
      IF Choice='5' THEN Len:=Len/1.0005-0.01;
      IF Choice='6' THEN Len:=Len*1.0005+0.01;
      IF Choice='7' THEN RL:=RL-0.2;
      IF Choice='8' THEN RL:=RL+0.2;
      IF Choice='9' THEN XL:=XL-0.2;
      IF Choice='0' THEN XL:=XL+0.2;
      IF Choice='T' THEN Begin RL:=Ro+0.00001; XL:=Xo-0.00001 End;
      IF Choice='Q' THEN QuitProgram;
    UNTIL Choice='S';
  UNTIL Choice='Q'
END.