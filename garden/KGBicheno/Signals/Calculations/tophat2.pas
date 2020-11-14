PROGRAM TOPHAT2;                { Author:  R.J.Edwards C.Eng MIEE FIQA    }
                                { Source Code Language:  Turbo Pascal 6.0 }
USES crt;                       { Last Modified:  3rd October 2002        }

VAR  F, H, A1, A2, D, Lr, Dia, Rgrnd, Chat, j, k, Omega, Lambda,

     Ht, Hh, Rrad, Rr2, Rcoil, Rtot, Xt, Ro, Xin, Qc, Q, Wg, Wc, Eff,

     uH, pF, XL, XC, dB, dB1, dB2, Rin : Real;

     N, M, Y, Z : Integer;

     choice : char;

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
  window(1,2,80,3);
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
End;

PROCEDURE W5;
Begin
  window(1,4,80,24);
  TextColor(11);TextBackground(0);clrscr;
End;

PROCEDURE W21;
Begin
  window(1,21,80,21);
  TextBackground(0);clrscr;
End;

PROCEDURE W22;
Begin
  window(1,22,80,22);
  TextColor(13);TextBackground(0);clrscr;
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
  TextColor(10);TextBackground(4);clrscr;
End;

PROCEDURE Notes;
Begin
  W1;
  Writeln;
  Writeln('A variable or switched inductor in a separate tuner, rather than a fixed coil');
  Writeln('at the base or part-way up the antenna, also assists multi-band operation.');
  Writeln;
  Writeln('All short-antenna L-network tuners need large capacitor values. But voltages');
  Writeln('are low and capacitors can consist of several smaller paralleled fixed values.');
  Writeln('Current-carrying capacity is also improved. (T-match tuners have higher loss.)');
  writeln;
  writeln('The improvement in dB due to Top-C loading compared with the same antenna with-');
  writeln('out the hat is computed.  Analysis includes the smaller coil loss due to less');
  writeln('inductance being needed for Top-C loading.');
  writeln;
  Writeln('Values of ground loss resistance and coil Q are the most uncertain of the input');
  Writeln('data. Because coil resistance affects values of the impedances to be matched it');
  Writeln('reacts back on the inductance value needed. The end result is more uncertainty');
  Writeln('in computed matching network L and C values and on efficiency. Such an interac-');
  Writeln('tion matters when coil loss is an appreciable fraction of 50 ohms. But with ant');
  Writeln('-enna and coil proportions normally used this extra uncertainty is unimportant.');
  Writeln;
  Writeln('Antenna feedpoint impedance, R+jX, is included in computed results. This may be');
  Writeln('be useful if an alternative matching network is considered.');
  Writeln;
  Write  ('NOTE: Height + top hat radial length is limited to roughly 1/4 wavelength.');
  W25;
  write(' I(nput program data now), M(ore notes) or E(xit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['M','I','E'];
  IF Choice='E' THEN QuitProgram;
  IF Choice='M' THEN
  Begin
    W1; TextColor(14);
    Writeln('     GUESSTIMATION OF GROUND-LOSS RESISTANCE REFERRED TO ANTENNA FEEDPOINT.');
    Writeln; Textcolor(11);
    Writeln('Ground loss of a vehicle roof-mounted antenna can vary between 3 and 12 ohms,');
    Writeln('being greater for small vehicles. Resistivity of the surface soil underneath a');
    Writeln('vehicle will have an effect. An arid soil may actually reduce loss. Soil cond-');
    Writeln('itions in the surrounding area will also affect hat capacitance to ground.');
    Writeln;
    Writeln('A shallow-buried circular close-mesh mat has a loss resistance not less than');
    Writeln('0.5*(Soil Resistivity)/(Mat Diameter in metres) ohms.   Diameter << lambda.');
    Writeln;
    Writeln('The table below is for a soil resistivity of 100 ohm-metres = 10 milli-Siemens.');
    Writeln('N = Number of shallow-buried 12-gauge = 2mm dia radials.  Length is in metres.');
    Writeln('Ohms = a crude estimate of input resistance referred to the system''s centre.');
    Writeln;
    TextColor(14);
    Writeln('   N   Length Ohms    Length Ohms    Length Ohms    Length Ohms    Length Ohms');
    Writeln('  ---  ------ ----    ------ ----    ------ ----    ------ ----    ------ ----');
    TextColor(11);
    Writeln('   4      2    28        3    20        4    15        6    11       12     6');
    Writeln('   6     ..    23       ..    16       ..    12       ..     9       ..     5');
    Writeln('   8     ..    20       ..    14       ..    11       ..     8       ..     4');
    Writeln('  16     ..    17       ..    11       ..     9       ..     6       ..     3');
    Writeln('  32     ..    14       ..    10       ..     8       ..     5       ..     3');
    Writeln('  64     ..    14       ..     9       ..     7       ..     5       ..     2');
    Write  (' 128     ..    13       ..     9       ..     7       ..     4       ..     2');
    W25;
    write(' I(nput program data now),  B(egin notes again)  or E(xit program) ....   ');
    REPEAT
      Choice:=upcase(readkey);
    UNTIL Choice in ['I','B','E'];
    IF Choice='E' THEN QuitProgram
  End
End;

PROCEDURE Introduction;
BEGIN
  W6;
  Write(' Program name: TOPHAT2.exe   Author: R.J.Edwards G4FGQ   (C)   3rd October 2002');
  W2;
  Writeln;
  Write('        PERFORMANCE OF SHORT, VERTICAL, TOP-CAPACITANCE-LOADED ANTENNAS');
  W5; Writeln;
  Writeln('Capacitance loading of a short vertical antenna can improve radiating effici-');
  Writeln('ency better than inductance loading. Best possible improvement for a 2/3-height');
  Writeln('loading coil relative to base loading is typically 3 dB.  But a large top hat');
  Writeln('can improve performance by more than 6 dB.  In this program the hat is a number');
  Writeln('of horizontal radial wires or rods optionally surrounded by a wire circle.');
  Writeln;
  Writeln('Top-capacitance loading improves radiating efficiency in two ways -');
  Writeln;
  Writeln('(1)  A more uniform distribution of antenna current versus height results in an');
  Writeln('increase in radiation resistance for no loss in the top-hat.  Whereas the high');
  Writeln('loss resistance of a raised coil can outweigh the benefit of increased Rad.Res.');
  Writeln;
  Writeln('(2)  A tuning coil is always necessary. But its inductance is less when a capa-');
  Writeln('citance hat is fitted and if overall coil dimensions are unchanged then loss in');
  Writeln('the coil is much smaller.');
  Writeln;
  Writeln('A more uniform current due to a top hat lessens the advantage of fitting the');
  Writeln('coil part-way up the antenna. The coil can then be combined with the Z-match');
  Write  ('network located between antenna and the transmitter as in this program.');
  W25;
  write(' I(nput program data now),  M(ore notes),  E(xit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['I','M','E'];
  IF Choice='M' THEN Notes;
  IF Choice='E' THEN QuitProgram;
END;

PROCEDURE InputScreen;
BEGIN
  W3; Textcolor(11); ClrScr;
  WRITELN(' H. Mast height, metres .               D. Diameter of radials, mm ');
  WRITELN(' M. Mast diameter, mm ...               G. Ground loss, ohms ..... ');
  Writeln(' N. Number of hat radials               Q. Q of L-match coil ..... ');
  Write  (' R. Radial length, metres               F. Frequency, MHz ........ ');
END;

PROCEDURE OutputScreen;
BEGIN
  W4; TextColor(7); ClrScr;
  writeln;
  Writeln('                    Antenna height            wavelengths');
  Writeln('            Capacitance of top hat            pico-farads');
  Writeln('           Antenna input reactance            ohms');
  Writeln('          Antenna input resistance            ohms referred to feedpoint');
  Writeln('              Coil loss resistance             ..     ..    ..    ..');
  Writeln('              Radiation resistance             ..     ..    ..    ..');
  Writeln('              Power lost in ground            percent of Tx output power');
  Writeln('        Power lost in L-match coil              ..    .. ..   ..    ..');
  Writeln('       Efficiency = Power radiated              ..    .. ..   ..    ..');
  Writeln('     Loss relative to ideal system            decibels');
  Writeln('        Improvement due to top hat            decibels relative to no hat');
  Writeln;
  Writeln('                L-match inductance            micro-henrys');
  Write  ('               L-match capacitance            pico-farads');
END;

PROCEDURE EnterHeight;
BEGIN
  W23;
  Write(' The program automatically limits the sum of antenna height and radial length');
  W24;
  WRITE(' to 1/4-wavelength.       1 inch = 25.4 millimetres.  1 foot = 0.3048 metres.');
  W25;
  REPEAT
    WRITE(' Enter overall antenna height, from ground level to top hat, metres ....   ');
    {$I-}  READ(H)  {$I+}
  UNTIL IOresult=0;
  IF H<1 THEN H:=1;
  W3;
  gotoXY(26,1);write(H:9:2);
END;

PROCEDURE EnterDiameter;
BEGIN
  W23;
  Write(' If antenna is tapered or not circular, enter an average value.');
  W24;
  WRITE(' 1 inch = 25.4 mm.    1 mm = 0.0394 inches.   14awg = 1.6 mm.');
  W25;
  REPEAT
    WRITE(' Enter diameter of antenna conductor or mast, millimetres ....   ');
    {$I-}  READ(D)  {$I+}
  UNTIL IOresult=0;
  IF D<1 THEN D:=1;
  W3;
  gotoXY(26,2);write(D:9:1);
END;

PROCEDURE EnterNumber;
BEGIN
  W23;
  Write(' If no radials enter 0.    One radial = inverted-L.   Two radials = T antenna.');
  W24;
  Write(' For an outer circle of wire (halo) add 3 to number of radials.');
  W25;
  REPEAT
    WRITE(' Enter number of radials forming top-hat ....   ');
    {$I-} READ(N) {$I+}
  UNTIL IOresult=0;
  IF N<0 THEN N:=0;
  IF N>250 THEN N:=250;
  W3;
  gotoXY(26,3);write(N:9);
END;

PROCEDURE EnterRadialLength;
BEGIN
  W23;
  Write(' Predictions unreliable when height + radial length nears 1/4-wavelength.');
  W24;
  Write(' 1 metre = 3.281 feet.   1 foot = 0.3048 metres.   1 inch = 25.4 mm');
  W25;
  REPEAT
    WRITE(' Enter length of a radial forming the top hat, metres ....   ');
    {$I-} READ(Lr) {$I+}
  UNTIL IOresult=0;
  IF Lr<0.01 THEN Lr:=0.01;
  W3;
  gotoXY(26,4);write(Lr:9:2);
END;

PROCEDURE EnterRadialDiameter;
BEGIN
  W23;
  W24;
  Write(' 1 inch = 25.4mm.  1mm = 0.03937 inches.  14 awg = 1.6mm');
  W25;
  REPEAT
    WRITE(' Enter diameter of a radial conductor, millimetres ....   ');
    {$I-} READ(Dia) {$I+}
  UNTIL IOresult=0;
  IF Dia<1 THEN Dia:=1;
  W3;
  gotoXY(67,1);write(Dia:9:1);
END;

PROCEDURE EnterGroundOhms;
BEGIN
  W23;
  Write(' Max accepted ground loss resistance is 150 ohms.     See introductory notes.');
  W24;
  Write(' V.Good <2,   Good 4,   Average 8,   Poor 15,   Bad 30,   V.Bad >60');
  W25;
  REPEAT
    WRITE(' Enter ground loss resistance referred to antenna feedpoint, ohms ....   ');
    {$I-}  READ(Rgrnd)  {$I+}
  UNTIL IOresult=0;
  W3;
  IF Rgrnd<0 THEN Rgrnd:=0;
  IF Rgrnd>100 THEN Rgrnd:=100;
  gotoXY(67,2);write(Rgrnd:9:1);
END;

PROCEDURE EnterCoilQ;
BEGIN
  W23;
  W24;
  Write(' Q ranges from 150 to 700.   Roughly proportional to coil size and to sqrt(F).');
  W25;
  REPEAT
    WRITE(' Enter intrinsic Q of base loading coil or L-match coil ....   ');
    {$I-}  READ(Qc)  {$I+}
  UNTIL IOresult=0;
  W3;
  IF Qc<70 THEN Qc:=70;
  IF Qc>999999 THEN Qc:=999999;
  gotoXY(67,3);write(Qc:9:0);
END;

PROCEDURE EnterFrequency;
BEGIN
  W23;
  W24;
  Write(' Lowest frequency accepted is 0.1 MHz, highest is 35 MHz.');
  W25;
  REPEAT
    WRITE(' Enter frequency, megahertz ....   ');
    {$I-}  READ(F)  {$I+}
  UNTIL IOresult=0;
  IF F<0.1 THEN F:=0.1;
  IF F>35 THEN F:=35;
  W3;
  gotoXY(67,4);write(F:9:3);
END;

Function Tan(x:real):Real;
Begin
  Tan:=Sin(x)/Cos(x)
End;

Procedure LNET1;       { calculate capacitance across 50-ohm coax feedline }
Begin                                   { ANTENNA Rin IS LESS THAN 50 OHMS }
  Z:=1;                  { a flag, capacitor is in shunt with 50-ohms coax }
                                 { Rin = radiation ohms + ground loss ohms }
                                           { Xin = antenna input reactance }
  Q:=Sqrt(50/Rin-1);                         { 1st estimate of L-network Q }
  Xc:=50/Q;                    { reactance of capacitor across 50-ohm coax }
  pF:=1000000/Omega/XC;                                { L-match capacitor }

  XL:=Rin*Q-Xin;               { 1st estimate of reactance of L-match coil }
  Rcoil:=XL/Qc;                     { 1st estimate of coil loss resistance }
  Rtot:=Rin+Rcoil;                      { 1st estimate of total resistance }

  Wc:=Rcoil/Rtot*100;           { percent of Tx power lost in L-match coil }
  Wg:=Rgrnd/Rtot*100;                 { percent of Tx power lost in ground }
  Eff:=Rrad/Rtot*100;           { efficiency, percent of Tx power radiated }
  uH:=XL/Omega                                        { L-match inductance }
End;

Procedure LNET2;          { calculate capacitance across antenna feedpoint }
Var X, R, R3, C, a, b : Real;        { ANTENNA Rin IS GREATER THAN 50 ohms }
Begin
  Z:=2;                       { a flag, capacitor is in shunt with antenna }
  R:=(Rin)+Sqr(Xin)/(Rin);            { parallel antenna feedpoint input R }
  X:=Xin+Sqr(Rin)/Xin;          { equiv parallel antenna feedpoint input X }
  C:=1000000/Omega/X;              { equiv parallel base input capacitance }
  Q:=Sqrt(R/50-1);                                           { L-network Q }
  XL:=50*Q;                                      { reactance of inductance }
  Xc:=R/Q;                              { reactance of L-network capacitor }
  pF:=1000000/Omega/Xc-C;                  { resulting L-network capacitor }
  uH:=XL/Omega;                                     { L-network inductance }
  Rcoil:=XL/Qc;                   { final estimate of coil loss resistance }
  R3:=R/(Sqr(R/Xc)+1);                   { Loss ohms due to Rgrnd and Rrad }
  a:=Rrad/(Rrad+Rgrnd);                           { intermediate variables }
  b:=Rgrnd/(Rrad+Rgrnd);                          
  Wc:=Rcoil/(Rcoil+R3)*100;                { percent of watts lost in coil }
  Wg:=b*R3/(Rcoil+R3)*100;               { percent of watts lost in ground }
  Eff:=a*R3/(Rcoil+R3)*100                            { percent efficiency }
End;

PROCEDURE ComputeResults;
Var x : Real;
Begin
  Z:=0;                                                      { Z is a flag }
  Omega:=2*Pi*F;
  Lambda:=300/F;                                   { free-space wavelength }
  Ht:=H/Lambda;                            { antenna height in wavelengths }
  A1:=2*Pi*Ht;                                 { antenna height in radians }

  IF N=0 THEN Begin       
                Chat:=0.001; Xt:=-1E+10
              End
                             { begin to calculate hat pF and hat reactance }
       ELSE Begin
              x:=60/N*(Ln(4000*H/Dia)+0.785*N-1.785);    { Ro of hat wires }
              x:=-x/Tan(2*Pi*Lr/Lambda);             { Hat input reactance }
              Chat:=-1000000/Omega/x;           { Hat input capacitance pF }
              k:=Chat/70.8/Lr;     { Ratio free-space hat pF to solid disk }
              j:=k*8.84*Pi*Sqr(Lr)/H;       { direct capacitance to ground }
              Chat:=Chat+j;           { Total hat capacitance pF to ground }
              Xt:=-1000000/Omega/Chat;        { Hat capacitative reactance }
            End;

  Ro:=60*(Ln(2000*H/D)-1);              { Zo of vertical antenna conductor }
  Xin:=Ro*(Xt+Ro*Tan(A1))/(Ro-Xt*Tan(A1));   { -ve antenna input reactance }
  A2:=ArcTan(-Ro/Xt);                { effective angle due to hat, radians }
  Hh:=A2*Lambda/2/Pi;       { equivalent extra height due to hat in metres }
  Rr2:=36.57*Sqr(Tan(A1/2));            { radiation resistance with no hat }
  Rrad:=Rr2*Sqr((2*Hh+H)/(Hh+H));          { Radiation resistance with hat }
  Rin:=Rrad+Rgrnd;            { 1st estimate of feedpoint input resistance }
  IF Rin>=50 THEN LNET2 ELSE LNET1;
  dB:=4.343*Ln(100/Eff);                          { loss relative to ideal }
End;

PROCEDURE DisplayResults;
BEGIN
  Y:=0;
  W4; TextColor(14);
  GotoXY(35,2);   Write(Ht:10:4);
  GotoXY(35,3);   Write(Chat:10:1);
  GotoXY(35,4);   Write(Xin:10:1);
  IF Xin>0 THEN Y:=3;
  GotoXY(35,5);   Write(Rrad+Rgrnd:10:1);
  GotoXY(35,6);   Write(Rcoil:10:1);
  GotoXY(35,7);   Write(Rrad:10:3);
  GotoXY(35,8);   Write(Wg:10:1);
  GotoXY(35,9);   Write(Wc:10:1);
  GotoXY(35,10);  Write(Eff:10:1);
  GotoXY(35,11);  Write(dB:10:1);
  GotoXY(35,12);  Write(dB1-dB2:10:1);
  GotoXY(35,14);  Write(uH:10:1);
  GotoXY(35,15);  Write(pF:10:0);
  IF uH<0 THEN Y:=3;
  IF pF<0 THEN Y:=3;
  W21;
  IF Z=1 THEN TextColor(13);
  IF Z=1 THEN Write(' L-match coil is in series with antenna, capacitor is across 50-ohm coax line.');
  IF Z=2 THEN TextColor(10);
  IF Z=2 THEN Write(' L-match coil is in series with 50-ohm coax line, capacitor is across antenna.');
  W22;
  IF Y=3 THEN Begin
                TextColor(12+Blink);
                Write(' Results may be unreliable. Reduce antenna height, radial length or frequency.')
              End
              Else ClrScr
END;

BEGIN
  REPEAT
    REPEAT
      Introduction;
    UNTIL choice='I';
  InputScreen;
  OutputScreen;
  EnterHeight;
  EnterDiameter;
  EnterNumber;
  EnterRadialLength;
  EnterRadialDiameter;
  EnterGroundOhms;
  EnterCoilQ;
  EnterFrequency;
  REPEAT
    IF H>75.01/F THEN H:=75.01/F;
    IF H<1 THEN H:=1;
    IF H+Lr>75.01/F THEN Lr:=75.01/F-H;
    IF Lr<0.01 THEN Lr:=0.01;
    IF N<0 THEN N:=0;
    IF N>250 THEN N:=250;
    IF Rgrnd<0 THEN Rgrnd:=0;
    IF Rgrnd>100 THEN Rgrnd:=100;
    IF F<0.1 THEN F:=0.1;
    IF F>35 THEN F:=35;
    W3;
    gotoXY(26,1);write(H:9:2);
    gotoXY(26,3);write(N:9);
    gotoXY(26,4);write(Lr:9:2);
    gotoXY(67,2);write(Rgrnd:9:1);
    gotoXY(67,4);write(F:9:3);
    M:=N; N:=0;
    ComputeResults;                     { Compute dB1 for no radials }
    dB1:=dB;
    N:=M;
    ComputeResults;                     { Compute dB2 for N radials }
    DB2:=dB;
    DisplayResults;
    W23;
    WRITE(' Vary Height using keys: 1,2   Length of radials: 3,4   Number of radials: 5,6');
    W24;
    Write(' Ground loss resistance: 7,8   Frequency: 9,0');
    W25;
    Write(' Hit keys H,M,N,R,D,G,Q,F to change data.  B(egin again), E(xit program) ...  ');
    REPEAT
      Choice:=upcase(readkey);
    UNTIL Choice IN ['0'..'9','H','M','N','R','D','G','Q','F','B','E'];
      IF Choice='1' THEN H:=H/1.01;          { vary overall antenna height }
      IF Choice='2' THEN H:=H*1.01;
      IF Choice='3' THEN Lr:=Lr/1.01;         { vary top-hat radial length }
      IF Choice='4' THEN Lr:=Lr*1.01;
      IF Choice='5' THEN N:=N-1;                  { vary number of radials }
      IF Choice='6' THEN N:=N+1;
      IF Choice='7' THEN Rgrnd:=Rgrnd-0.2;         { vary ground loss ohms }
      IF Choice='8' THEN Rgrnd:=Rgrnd+0.2;
      IF Choice='9' THEN F:=F/1.003;                      { vary frequency }
      IF Choice='0' THEN F:=F*1.003;
      IF Choice='H' THEN EnterHeight;
      IF Choice='M' THEN EnterDiameter;
      IF Choice='N' THEN EnterNumber;
      IF Choice='R' THEN EnterRadialLength;
      IF Choice='D' THEN EnterRadialDiameter;
      IF Choice='G' THEN EnterGroundOhms;
      IF Choice='Q' THEN EnterCoilQ;
      IF Choice='F' THEN EnterFrequency;
      IF Choice='E' THEN QuitProgram;
    UNTIL Choice='B';
  UNTIL Choice='E'
END.