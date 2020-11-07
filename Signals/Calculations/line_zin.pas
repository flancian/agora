PROGRAM  LINE_ZIN;                {  Author: R.J.Edwards C.Eng. MIEE. FIQA  }
                                  {  Source Code: Turbo Pascal version 6.0  }
USES crt;                         {  Last amendment: 4th April 2006         }

VAR  Freq, Zo, Len, Dia, Space, VF, SWR1, RL, XL, Rin, Xin, Lambda, Waves,
     Alpha, Rc, Gamma1, Gamma2, Phi, dB, Eff, SWR2 : Real;

     choice, Flag : char;

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
  window(1,1,80,4);
  TextBackground(1); TextColor(10);
End;

PROCEDURE W4;
Begin
  window(1,5,80,22);
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

PROCEDURE Notes;
Begin
  W1;
  TextColor(11);
  Writeln;
  Writeln('                        TYPICAL VELOCITY FACTORS:');
  Writeln;
  Writeln('Impedances are nominal values.');
  Writeln;
  Writeln('Open wire, air-spaced lines of all impedances, VF = 0.995');
  Writeln('450-ohm ladder/window lines, VF = 0.91');
  Writeln('Domestic quality, 300-ohm TV ribbon downlead, VF = 0.85');
  Writeln('Substantial 300-ohm ladder line, VF = 0.8');
  Writeln('130-ohm, 16 to 20 AWG, figure-of-eight cables, VF = 0.7');
  Writeln('75-ohm, close-spaced wires embedded in solid polyethylene, VF = 0.68');
  writeln;
  writeln;
  writeln;
  writeln;
  writeln('When attenuation exceeds 40 dB the input impedance is equal to Zo of the line.');
  writeln('So when the load impedance is put equal to Zo = Ro+jXo, the reflection coeff-');
  writeln('icient becomes zero and the SWR becomes 1-to-1.');
  writeln;
  writeln;
  Writeln('If attenuation exceeds 250 decibels then the program may abort due to numerical');
  Write  ('overflow.  Decrease line length, increase conductor diameter, or reduce frequ.');
  W25;
  write(' E(nter program data now), B(egin again) or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','B','Q'];
  IF Choice='Q' THEN QuitProgram;
End;

PROCEDURE Introduction;
BEGIN
  W6;
  Write(' Program name: LINE_ZIN.exe    Author: R.J.Edwards G4FGQ   (C)   6th April 2006');
  W2;
  Writeln;
  Write('   INPUT IMPEDANCE OF BALANCED-PAIR TRANSMISSION LINES TERMINATED WITH A LOAD');
  W5; Writeln;
  Writeln('This program is a companion to INPUT_Z which deals with coaxial lines.');
  Writeln;
  Writeln('The input impedance of a transmission line is often needed. Much experience is');
  Writeln('required just to guess what it might be. This program accurately calculates it.');
  Writeln;
  Writeln('The load impedance, R+jX, can be anywhere between a short circuit and a virtual');
  Writeln('open circuit. Input impedance is calculated in the same series R+jX form.');
  Writeln;
  Writeln('The program can be used to assist with design of transmission line impedance-');
  Writeln('matching transformers when one or both of the terminations are complex.');
  Writeln;
  Writeln('The reflection coefficient is calculated. Also SWR for both ends of the line.');
  Writeln;
  Writeln('Attenuation and power efficiency are calculated.');
  Writeln('Note how line loss increases when high standing waves are present.');
  Writeln;
  Write  ('Power dissipated in the line as a percent of input power is 100% - Efficiency %');
  W25;
  write(' E(nter program data now),  N(otes),  or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','N','Q'];
  IF Choice='N' THEN Notes;
  IF Choice='Q' THEN QuitProgram;
END;

PROCEDURE InputScreen;
BEGIN
  W3; Textcolor(7); ClrScr;
  Writeln(' F. Frequency, megahertz ..                 V. Line Velocity Factor.    ');
  Writeln(' D. Conductor diameter mm .                 R. Load resistance, ohms    ');
  Writeln(' S. Conductor spacing mm ..                 X. Load reactance,  ohms    ');
  Write  (' L. Line length, metres ...                  ');
END;

PROCEDURE EnterFreq;
BEGIN
  W23;
  Write(' Frequency range is from 200 KHz to 500 MHz.');
  W24;
  Write('');
  W25;
  REPEAT
    WRITE(' Enter frequency, megahertz ....   ');
    {$I-} READ(Freq) {$I+}
  UNTIL IOresult=0;
  IF Freq<0.2 THEN Freq:=0.2;
  IF Freq>500 THEN Freq:=500;
  W3;
  gotoXY(28,1);write(Freq:9:3);
END;

PROCEDURE EnterDia;
BEGIN
  W23;
  Write('');
  W24;
  Write(' 1 inch = 25.4 mm.      1 mm = 0.03937 inches.');
  W25;
  REPEAT
    WRITE(' Enter diameter of conductors, millimetres ....   ');
    {$I-} READ(Dia) {$I+}
  UNTIL IOresult=0;
  IF Dia<0.2 THEN Dia:=0.2;
  W3;
  gotoXY(28,2);write(Dia:9:2);
END;

PROCEDURE EnterSpace;
BEGIN
  W23;
  Write(' Conductor spacing is distance between the conductor centres.');
  W24;
  Write(' 1 inch = 25.4 mm.      1 mm = 0.03937 inches.');
  W25;
  REPEAT
    WRITE(' Enter conductor spacing, millimetres ....   ');
    {$I-}  READ(Space)  {$I+}
  UNTIL IOresult=0;
  IF Space<Dia+0.1 THEN Space:=Dia+0.1;
  W3;
  gotoXY(28,3);write(Space:9:2);
END;

PROCEDURE EnterLen;
BEGIN
  W23;
  Write(' Greatest length accepted is 10 kilometres.  Zero may be entered.');
  W24;
  Write(' Copper conductors assumed.         1 foot = 0.3048 metres.');
  W25;
  REPEAT
    WRITE(' Enter length of line, metres ....   ');
    {$I-}  READ(Len)  {$I+}
  UNTIL IOresult=0;
  IF Len<0.000001 THEN Len:=0.000001;
  IF Len>10000 THEN Len:=10000;
  W3;
  gotoXY(28,4);write(Len:9:2);
END;

PROCEDURE EnterVF;
BEGIN
  W23;
  Write(' For air-spaced lines with well-spaced supports enter VF = 0.995');
  W24;
  Write(' For typical values for various types of line see notes.');
  W25;
  REPEAT
    WRITE(' Enter Velocity Factor of line ....   ');
    {$I-} READ(VF) {$I+}
  UNTIL IOresult=0;
  IF VF<0.5 THEN VF:=0.5;
  IF VF>1.0 THEN VF:=1.0;
  W3;
  gotoXY(69,1);write(VF:10:3);
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
  IF RL<0.000001 THEN RL:=0.000001;
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
  IF Abs(XL)<0.000001 THEN XL:=0.000001;
  IF Abs(XL)>9999999.9 THEN XL:=9999999.9;
  W3;
  gotoXY(69,3);write(XL:10:1);
END;

FUNCTION InvCosh(x:Real):Real;         { inverse hyperbolic cosine function }
Begin
  InvCosh:=Ln(x+Sqrt(Sqr(x)-1));
End;

PROCEDURE Calculate;
Var A,B,C,D,E,F, Omega, Beta, Xo, Ro, SD : Real;
BEGIN
  Omega:=2*Pi*Freq;            { angular frequency, radians per microsecond }
  Lambda:=300/Freq;                                 { free-space wavelength }
  Zo:=120*VF*InvCosh(Space/Dia);                     { impedance Zo of line }
  SD:=0.0661/Sqrt(Freq);                         { skin depth in copper, mm }
  Rc:=2*Sqrt(Freq)*Len/12/Dia;                       { conductor resistance }
  Rc:=Rc/Sqrt(1-Sqr(Dia/Space)*(1-Sqrt(SD/Dia))); { corrected for proximity }
  Waves:=Len/Lambda/VF;       { line length in wavelengths at line velocity }
  Beta:=2*Pi*Waves;                     { overall line phase shift, radians }
  Alpha:=Rc/2/Zo;           { first approximation. Ro is not yet calculated }
  Xo:=-Zo*Alpha/Beta;                      { reactive component of Zo, ohms }
  Ro:=Sqrt(Sqr(Zo)-Sqr(Xo));              { resistive component of Zo, ohms }
  Alpha:=Rc/2/Ro;                        { overall line attenuation, nepers }
  IF Alpha>250/8.68589 THEN FLAG:='A' ELSE Flag:='B'; { to prevent overflow }

  {------------------------ calculate input impedance ----------------------}

  A:=Exp(2*Alpha)*Cos(2*Beta);
  B:=Exp(2*Alpha)*Sin(2*Beta);
  C:=(Sqr(RL)-Sqr(Ro)+Sqr(XL)-Sqr(Xo))/(Sqr(RL+Ro)+Sqr(XL+Xo));
  D:=2*(Ro*XL-RL*Xo)/(Sqr(RL+Ro)+Sqr(XL+Xo));
  E:=(Sqr(A)-Sqr(C)+Sqr(B)-Sqr(D))/(Sqr(A-C)+Sqr(B-D));
  F:=2*(A*D-B*C)/(Sqr(A-C)+Sqr(B-D));
  Rin:=Ro*E-Xo*F;                                   { line input resistance }
  Xin:=Xo*E+Ro*F;                                    { line input reactance }

  {------------------- calculate SWR at load end of line -------------------}

  Gamma1:=Sqrt((Sqr(RL-Ro)+Sqr(XL-Xo))/(Sqr(RL+Ro)+Sqr(XL+Xo)));
  Phi:=ArcTan((XL-Xo)/(RL-Ro))-ArcTan((XL+Xo)/(RL+Ro));    { angle of Gamma }
  SWR1:=Abs((1+Gamma1)/(1-Gamma1));
  IF SWR1>99999.999 THEN SWR1:=99999.999;

  {------------------ calculate SWR at input end of line -------------------}

  Gamma2:=Sqrt((Sqr(Rin-Ro)+Sqr(Xin-Xo))/(Sqr(Rin+Ro)+Sqr(Xin+Xo)));
  SWR2:=Abs((1+Gamma2)/(1-Gamma2));
  IF SWR2>99999.999 THEN SWR2:=99999.999;

  {------------------------- calculate efficiency --------------------------}

  A:=Exp(Alpha)*Cos(Beta);
  B:=Exp(Alpha)*Sin(Beta);
  C:=Exp(-Alpha)*Cos(Beta);
  D:=-Exp(-Alpha)*Sin(Beta);
  E:=A*(Ro+RL)-B*(Xo+XL)+C*(Ro-RL)-D*(Xo-XL);
  F:=A*(Xo+XL)+B*(Ro+RL)+C*(Xo-XL)+D*(Ro-RL);
  Eff:=RL/Rin/(Sqr(E)+Sqr(F))*4*Sqr(Zo);        { line efficiency, Pout/Pin }
  dB:=4.34294*Ln(1/Eff);       { line loss in decibels with SWR on the line }
  Eff:=Eff*100;                                { efficiency as a percentage }
END;

PROCEDURE ResultsScreen;
BEGIN
  W4; TextColor(3);
  Writeln;
  Writeln('      Line series input resistance            ohms  ');
  Writeln('       Line series input reactance            ohms   ');
  Writeln;
  Writeln('      Characteristic Impedance, Zo            ohms');
  Writeln('        Line length in wavelengths            at the line''s own velocity');
  Writeln;
  Writeln('           RF conductor resistance            ohms, for both conductors');
  Writeln('                  Line attenuation            decibels when Zo matched   ');
  Writeln('               Actual loss in line            decibels with standing waves');
  Writeln('              Efficiency, Pout/Pin            percent   ..     ..     .. ');
  Writeln;
  Writeln('            Reflection Coefficient            at load end of line');
  Writeln('                Angle of Ref.Coeff            degrees            ');
  Writeln;
  Writeln('               Standing Wave Ratio           : 1, at load end of line');
  Writeln('                  ..     ..    ..            : 1, at input end of line');
END;

BEGIN
  REPEAT
    REPEAT
      Introduction;
    UNTIL choice='E';
  InputScreen;
  ResultsScreen;
  EnterFreq;
  EnterDia;
  EnterSpace;
  EnterLen;
  EnterVF;
  EnterLoadR;
  EnterLoadX;
  REPEAT
    W3;
    IF Freq<0.2 THEN Freq:=0.2;
    IF Freq>500 THEN Freq:=500;
    gotoXY(28,1); write(Freq:9:3);

    IF Dia<0.2 THEN Dia:=0.2;
    gotoXY(28,2); write(Dia:9:2);

    IF Space<Dia+0.1 THEN Space:=Dia+0.1;
    gotoXY(28,3); write(Space:9:2);

    IF Len<0.000001 THEN Len:=0.000001;
    IF Len>10000 THEN Len:=10000;
    gotoXY(28,4); write(Len:9:2);

    IF VF<0.5 THEN VF:=0.5;
    IF VF>1.0 THEN VF:=1.0;
    gotoXY(69,1); write(VF:10:3);

    IF RL<0.000001 THEN RL:=0.000001;
    IF RL>9999999.9 THEN RL:=9999999.9;
    gotoXY(69,2); write(RL:10:1);

    IF Abs(XL)<0.000001 THEN XL:=0.000001;
    IF Abs(XL)>9999999.9 THEN XL:=9999999.9;
    gotoXY(69,3); write(XL:10:1);

    Calculate;
    ResultsScreen;
    TextColor(14);
    GotoXY(35,2); write(Rin:10:1);
    GotoXY(35,3); write(Xin:10:1);
    GotoXY(35,5); write(Zo:10:1);
    GotoXY(35,6); write(Waves:10:4);
    GotoXY(35,8); write(Rc:10:2);
    GotoXY(35,9); write(Alpha*8.6859:10:3);
    GotoXY(35,10); write(dB:10:3);
    GotoXY(35,11); write(Eff:10:1);
    GotoXY(35,13); write(Gamma1:10:4);
    GotoXY(35,14); write(Phi*57.2958:10:2);
    GotoXY(35,16); write(SWR1:10:3);
    GotoXY(35,17); write(SWR2:10:3);
    GotoXY(1,18); TextColor(12+Blink);
    IF Flag='A' THEN write('     Attenuation exceeds 250 dB.  Program may abort.  Reduce line length.');
    IF Flag='B' THEN write('                                                                         ');
    W23;
    Write(' Vary frequency: 1,2    Vary conductor spacing: 3,4   Vary line length: 5,6');
    W24;
    Write('        Vary Load Resistance: 7,8      Vary Load Reactance: 9,0             ');
    W25;
    Write(' Hit F,D,S,L,V,R,X to change data.  B(egin again),  Q(uit program) ...  ');
    REPEAT
      Choice:=upcase(readkey);
    UNTIL Choice IN ['0'..'9','F','D','S','L','V','R','X','B','Q'];
      IF Choice='F' THEN EnterFreq;
      IF Choice='D' THEN EnterDia;
      IF Choice='S' THEN EnterSpace;
      IF Choice='L' THEN EnterLen;
      IF Choice='V' THEN EnterVF;
      IF Choice='R' THEN EnterLoadR;
      IF Choice='X' THEN EnterLoadX;
      IF Choice='1' THEN Freq:=Freq/1.0005;
      IF Choice='2' THEN Freq:=Freq*1.0005;
      IF Choice='3' THEN Space:=Space/1.01;
      IF Choice='4' THEN Space:=Space*1.01;
      IF Choice='5' THEN Len:=Len/1.0002-0.003;
      IF Choice='6' THEN Len:=Len*1.0002+0.003;
      IF Choice='7' THEN RL:=RL-0.1;
      IF Choice='8' THEN RL:=RL+0.1;
      IF Choice='9' THEN XL:=XL-0.1;
      IF Choice='0' THEN XL:=XL+0.1;
      IF Choice='Q' THEN QuitProgram;
    UNTIL Choice='B';
  UNTIL Choice='Q'
END.