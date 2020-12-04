PROGRAM TRANCO_1;                   { Author: R.J.Edwards C.Eng. MIEE. FIQA }
                                    { Source Code: Turbo Pascal version 6.0 }
USES crt;                           { Last amendment: 1st April 2006        }

VAR  Freq, Len, Dia, N, Ratio, L, C, R, WireL, WireD, Ro, Q, VF,

     Beta, Alpha, AWG, Fres, LL, CC, Rin, Xin, Eff, T, Pit : Real;

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

PROCEDURE Notes;
Begin
  W1;
  TextColor(11);
  Writeln;
  Writeln('Input impedance measurements are made with the coil open circuit at the top.');
  Writeln;
  Writeln('Phase shift, in degrees, along the coil is proportional to test frequency.');
  Writeln;
  Writeln('As the test frequency is varied through 1/4-wave resonance, note that the phase');
  Writeln('shift goes through 90 degrees.  Also note that the input impedance falls to a');
  Writeln('low value and input reactance passes through zero with a change in sign.');
  Writeln;
  Writeln('Examine input impedance when phase shift is 180 degrees corresponding to a line');
  Writeln('resonant length of 1/2-wavelength. Do likewise at 270 and 360 degrees.');
  Writeln;
  writeln('When phase shift is 45, 135, 225 degrees etc., input reactance equals Zo.');
  writeln;
  Writeln('When the number of turns on the coil and the coil diameter are small then coil');
  Writeln('inductance is very small and the velocity factor approaches or equals 1.0');
  writeln;
  writeln('Put coil length to 1000mm, diameter to 1mm, pitch to 1000mm and coil inductance');
  writeln('falls to zero.  Computed inductance and capacitance are then that of a 1 metre');
  writeln('length of wire with a resonant frequency of 75 MHz and a velocity factor = 1.00');
  Writeln;
  Writeln('Radiating efficiency is approximate. Additional loss will also occur in an imp-');
  Write  ('edance matching network to a transmitter.');
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
  Write(' Program name: TRANCO_1.exe    Author: R.J.Edwards G4FGQ   (C)   2nd April 2006');
  W2;
  Writeln;
  Write('      THE BEHAVIOUR OF A SINGLE-LAYER SOLENOID COIL AS A TRANSMISSION LINE ');
  W5; Writeln;
  Writeln('All conductors possess inductance and have capacitance to their environment.');
  Writeln('Series L and shunt C are distributed along their length. The inductance due to');
  Writeln('a coil winding is added to the inductance of a solid cylinder of the same dia-');
  Writeln('meter and length of the coil. The distributed capacitance of the coil is the');
  Writeln('same as that of the solid cylinder provided the turns are not spaced too wide');
  Writeln('apart. L and C can be estimated mathematically from coil dimensions.');
  Writeln;
  Writeln('So the coil behaves as a transmission line with the inductance being greatly');
  Writeln('increased due to its diameter and number of turns. Velocity is much reduced.');
  Writeln('For given length, diameter and number of turns, this program calculates :-');
  Writeln('Overall primary constants of inductance, capacitance, and loss resistance.');
  Writeln('Secondary constants of impedance Zo, phase delay, velocity factor and atten-');
  Writeln('uation. Also calculated are the 1/4-wave resonant frequency when the coil is');
  Writeln('mounted vertically above a ground plane, and the input or feedpoint impedance');
  Writeln('when the coil is used as an antenna. For a sacrifice in radiating efficiency');
  Writeln('the coil can be far shorter than a full size 1/4-wave vertical antenna. The');
  Writeln('coil is often top-capacitance loaded with a short whip, rod or capacity-hat');
  Write  ('which much reduces the resonant frequency.  Further calculations are needed.');
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
  Writeln(' L. Length of coil, mm ....                  R. Ratio, wire dia/pitch    ');
  Writeln(' D. Diameter of coil, mm ..                  F. Test Frequency, MHz .    ');
  Write  (' W. Winding pitch, mm .....    ');
END;

PROCEDURE EnterLen;
BEGIN
  W23;
  Write(' Coil length is distance between the centres of the end turns.');
  W24;
  Write(' 1 inch = 25.4 mm.   1 foot = 304.8 mm.');
  W25;
  REPEAT
    WRITE(' Enter length of coil, millimetres ....   ');
    {$I-}  READ(Len)  {$I+}
  UNTIL IOresult=0;
  IF Len<5 THEN Len:=5;
  W3;
  gotoXY(28,1);write(Len:8:1);
END;

PROCEDURE EnterDia;
BEGIN
  W23;
  Write(' Coil diameter is distance between centres of opposite turns.');
  W24;
  Write(' 1 inch = 25.4 mm.    Coil diameter should not exceed coil length.');
  W25;
  REPEAT
    WRITE(' Enter diameter of coil, millimetres ....   ');
    {$I-}  READ(Dia)  {$I+}
  UNTIL IOresult=0;
  IF Dia<1 THEN Dia:=1;
  IF Dia>Len then Dia:=Len;
  W3;
  gotoXY(28,2);write(Dia:8:1);
END;

PROCEDURE EnterPitch;
BEGIN
  W23;
  Write(' Pitch is spacing between centres of adjacent turns.  Initially enter length of');
  W24;
  Write(' coil in mm.  Increasing winding pitch reduces the number of turns on the coil.');
  W25;
  REPEAT
    WRITE(' Enter winding pitch, millimetres ....   ');
    {$I-} READ(Pit) {$I+}
  UNTIL IOresult=0;
  IF Pit<0.2 THEN Pit:=0.2;
  W3;
  gotoXY(28,3);write(Pit:8:2);
END;

PROCEDURE EnterRatio;
BEGIN
  W23;
  Write(' Ratio allows suitable wire diameters to be chosen relative to pitch.');
  W24;
  Write(' For close-wound, enamel-insulated wire enter 1. For optimum spacing enter 0.71');
  W25;
  REPEAT
    WRITE(' Enter ratio of (Wire diameter)/(Winding pitch) ....   ');
    {$I-} READ(Ratio) {$I+}
  UNTIL IOresult=0;
  IF Ratio>0.96 THEN Ratio:=0.96;
  IF Ratio<0.3 THEN Ratio:=0.3;
  W3;
  gotoXY(70,1);write(Ratio:8:2);
END;

PROCEDURE EnterFreq;
BEGIN
  W23;
  Write(' Frequency range of the test frequency is from 200 KHz to 1000 MHz.');
  W24;
  Write(' For performance at or near 1/4-wave resonant frequency, set Ftest to Fres.');
  W25;
  REPEAT
    WRITE(' Enter test frequency, megahertz ....   ');
    {$I-} READ(Freq) {$I+}
  UNTIL IOresult=0;
  IF Freq<0.2 THEN Freq:=0.2;
  IF Freq>1000 THEN Freq:=1000;
  W3;
  gotoXY(70,1);write(Freq:8:3);
END;

PROCEDURE Calculate;
Var x, A, B, E, F, Xo, uH, Omega, Lambda, Rrad : Real;
BEGIN
  N:=Len/Pit;               { Number of turns on coil, Length/Winding pitch }
  Omega:=2*Pi*Freq;            { angular frequency, radians per microsecond }
  Lambda:=300/Freq;                                 { free-space wavelength }
  Rrad:=2*Sqr(24.2*Len/Lambda/1000);     { distributed radiation resistance }
  IF Rrad>200 THEN Rrad:=200;    { approximates Radres when length>1/3-wave }
  uH:=Sqr(Dia*N)/(1013*Len+457*Dia);                      { coil inductance }
  x:=4*Len/Dia;                                     { intermediate variable }
  L:=uH/Len*1000+0.2*(Ln(x+Sqrt(Sqr(x)+1)));         { microhenys per metre }
  C:=55.5555/(Ln(x+Sqrt(Sqr(x)+1)));                { capacitance per metre }
  Ro:=1000*Sqrt(L/C);                            { characteristic impedance }
  WireD:=Ratio*Len/N;                              { coil wire diameter, mm }
  IF WireD>Dia/5 THEN WireD:=Dia/5; { to prevent impractical wire diameters }
  WireL:=N*Pi*Dia/1000+Len/1000;                 { coil wire length, metres }
  R:=4*Sqrt(Freq)*WireL/12/WireD+Rrad;  { wire ohms incl proximity + radres }
  VF:=10/3/Sqrt(L*C);                   { velocity factor relative to light }
  Q:=Omega*L/R*Len/1000;                          { Coil Q including Radres }
  Alpha:=R/2/Ro;                                      { attenuation, nepers }
  Beta:=Omega*Sqrt(L*C)*Len/1000000;      { phase shift along coil, radians }
  AWG:=8.686*Ln(8.25/WireD);                          { American wire gauge }
  Fres:=75*VF/Len*1000;                       { 1/4-wave resonant frequency }
  LL:=L*Len/1000;                                      { overall inductance }
  CC:=C*Len/1000;                                     { overall capacitance }
  Eff:=100*Rrad/(Rrad+R);    { radiating efficiency of the antenna at Ftest }
  T:=Sqrt(L*C)*Len/1000;   { propagation delay, nano-seconds. Not displayed }

  {--------------- Calculate input impedance at test frequency -------------}

  Xo:=-Ro*Alpha/Beta;  { reactance component of characteristic impedance Zo }
  A:=Exp(2*Alpha)*Cos(2*Beta);
  B:=Exp(2*Alpha)*Sin(2*Beta);
  E:=(Sqr(A)+Sqr(B)-1)/(Sqr(A-1)+Sqr(B));
  F:=-2*B/(Sqr(A-1)+Sqr(B));
  Rin:=Ro*E-Xo*F;                                        { input resistance }
  Xin:=Xo*E+Ro*F;                                         { input reactance }
  IF Rin>9999999.9 THEN Rin:=9999999.9;   { to prevent a mess of the screen }
  IF Abs(Xin)>9999999.9 THEN Xin:=9999999.9;
END;

PROCEDURE ResultsScreen;
BEGIN
  W4; TextColor(3);
  Writeln;
  Writeln('     Distributed series Inductance            micro-henrys  ');
  Writeln('     Distributed shunt Capacitance            pico-farads   ');
  Writeln('            Distributed resistance            ohms, including radiation res.');
  Writeln('                            Coil Q            approx,   ..        ..     .. ');
  Writeln;
  Writeln('      Characteristic Impedance, Zo            ohms          ');
  Writeln('            Phase shift along coil            degrees       ');
  Writeln('                   Velocity Factor            relative to velocity of light ');
  writeln('                       Attenuation            decibels, terminated with Zo  ');
  writeln;
  writeln('       1/4-wave resonant frequency            megahertz, as a vertical antenna');
  Writeln('              Radiating efficiency            percent, at test frequency    ');
  Writeln('           Number of turns on coil                              ');
  Writeln('                     Wire diameter            millimetres =       AWG ');
  Writeln;
  Writeln('                  Input resistance            ohms, at test frequency    ');
  Write  ('                   Input reactance            ohms, ..  ..      ..       ');
END;

BEGIN
  REPEAT
    REPEAT
      Introduction;
    UNTIL choice='E';
  InputScreen;
  ResultsScreen;
  EnterLen;
  EnterDia;
  EnterPitch;
  EnterRatio;
  EnterFreq;
  REPEAT
    W3;
    IF Len<5 THEN Len:=5;
    gotoXY(28,1); write(Len:8:1);

    IF Dia<1 THEN Dia:=1;
    IF Dia>Len THEN Dia:=Len;
    gotoXY(28,2); write(Dia:8:1);

    IF Pit<0.2 THEN Pit:=0.2;
    gotoXY(28,3); write(Pit:8:2);

    IF Ratio>0.96 THEN Ratio:=0.96;
    IF Ratio<0.3 THEN Ratio:=0.3;
    gotoXY(70,1); write(Ratio:8:2);

    IF Freq<0.2 THEN Freq:=0.2;
    IF Freq>1000 THEN Freq:=1000;
    gotoXY(70,2); write(Freq:8:3);

    Calculate;
    ResultsScreen;
    TextColor(14);
    GotoXY(35,2); write(LL:10:2);
    GotoXY(35,3); write(CC:10:2);
    GotoXY(35,4); write(R:10:2);
    GotoXY(35,5); write(Q:10:0);
    GotoXY(35,7); write(Ro:10:0);
    GotoXY(35,8); write(Beta*57.296:10:2);
    GotoXY(35,9); write(VF:10:4);
    GotoXY(35,10); write(Alpha*8.6859:10:3);
    GotoXY(35,12); write(Fres:10:3);
    GotoXY(35,13); write(Eff:10:2);
    GotoXY(35,14); write(N:10:0);
    GotoXY(35,15); write(WireD:10:2);
    gotoXY(60,15); write(AWG:6:1);
    gotoXY(35,17); write(Rin:10:1);
    gotoXY(35,18); write(Xin:10:1);
    W23;
    Write(' Vary frequ, fast: 1,2       Vary frequ, slow: 3,4       Vary coil length: 5,6');
    W24;
    Write('          Vary coil dia: 7,8           Vary winding pitch: 9,0  ');
    W25;
    Write(' Hit L,D,N,R,F to change data.   S(tart again),   Q(uit program) ...  ');
    REPEAT
      Choice:=upcase(readkey);
    UNTIL Choice IN ['0'..'9','L','D','W','R','F','S','Q'];
      IF Choice='L' THEN EnterLen;
      IF Choice='D' THEN EnterDia;
      IF Choice='W' THEN EnterPitch;
      IF Choice='R' THEN EnterRatio;
      IF Choice='F' THEN EnterFreq;
      IF Choice='1' THEN Freq:=Freq/1.01;
      IF Choice='2' THEN Freq:=Freq*1.01;
      IF Choice='3' THEN Freq:=Freq/1.0001;
      IF Choice='4' THEN Freq:=Freq*1.0001;
      IF Choice='5' THEN Len:=Len-0.3;
      IF Choice='6' THEN Len:=Len+0.3;
      IF Choice='7' THEN Dia:=Dia/1.01;
      IF Choice='8' THEN Dia:=Dia*1.01;
      IF Choice='9' THEN Pit:=Pit-0.01;
      IF Choice='0' THEN Pit:=Pit+0.01;
      IF Choice='Q' THEN QuitProgram;
    UNTIL Choice='S';
  UNTIL Choice='Q'
END.