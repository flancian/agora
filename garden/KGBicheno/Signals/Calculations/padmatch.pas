PROGRAM PADMATCH;     { Author:  R.J.Edwards  C.Eng. MIEE. FIQA.          }
                      { Source Code Language:  Turbo Pascal version 6.0   }
USES crt;

VAR  RS, RL, dB1, dB2, dB3, Theta, R1, R2, R3, RA, RB, RC,
     P1, P2, P3, Pa, Pb, Pc, DBminloss, DBmismatch  : Real;

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

PROCEDURE W3;
Begin
  window(1,1,41,5);
  TextColor(15);TextBackground(4);
End;

PROCEDURE W4;
Begin
  window(1,6,80,22);
  TextColor(14);TextBackground(1);
End;

PROCEDURE W5;
Begin
  window(1,2,80,24);
  TextColor(14);TextBackground(0);clrscr;
End;

PROCEDURE W7;
Begin
  window(42,1,80,5);
  TextColor(15);TextBackground(1);
End;

PROCEDURE W23;
Begin
  window(1,23,80,23);
  TextColor(0);TextBackground(7);clrscr;
End;

PROCEDURE W24;
Begin
  window(1,24,80,24);
  TextColor(0);TextBackground(7);clrscr;
End;

PROCEDURE W6;
Begin
  window(1,1,80,1);
  TextColor(15);TextBackground(4);clrscr;
End;

PROCEDURE Introduction;
BEGIN
  W6;
  Write(' Program name: PADMATCH.exe    Author: R.J.Edwards G4FGQ    (C)  30th June 2002');
  W5; writeln;
  Writeln('                    RESISTIVE MATCHING-PADS & ATTENUATORS');
  Writeln;
  TextColor(11);
  writeln('For given source and load resistances and required attenuation this program');
  writeln('calculates the resistor values of T and Pi networks and minimum-loss pads.');
  writeln;
  writeln('After calculating exact resistor values for a network there is a facility to');
  writeln('insert values from the various resistor tolerance ranges. After each insert-');
  writeln('tion the network''s changed attenuation is automatically re-calculated. The');
  writeln('facility allows attenuator in-circuit performance to be predicted.');
  writeln;
  writeln('If an attenuation less than the minimum allowed by the source and load is put');
  writeln('in the program then one of the resistors will have a negative value. The requ-');
  writeln('ired attenuation must then be increased to the minimum value or more. Minimum-');
  writeln('loss matching pads can be used to prevent reflections and echos originating at');
  writeln('mis-matched junctions of different transmission systems.');
  writeln;
  writeln('The program also computes the mismatch loss which occurs when source and load');
  writeln('are directly connected. It is relative to the maximum possible power in the');
  writeln('load when source and load are impedance matched using an ideal transformer.');
  Writeln;
  write  ('Percent alongside resistors is % of input power dissipated in the resistor.');

  W25;
  write(' E(nter data now)  or  Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','Q'];
  IF Choice='Q' THEN QuitProgram;
END;

PROCEDURE InputWindow;
BEGIN
  W3; Textcolor(10); ClrScr;
  WRITELN;
  WRITELN(' S. Source resistance, ohms ..   ');
  WRITELN(' L. Load resistance, ohms ....   ');
  WRITELN(' D. Decibels attenuation .....   ');
END;

PROCEDURE OutputScreenText;
BEGIN
  W4; TextColor(11); ClrScr;
  writeln;
  writeln('               T-MATCHING PAD                     Pi-MATCHING PAD');
  writeln; writeln;
  WRITEln('       o---$$$$$$----*----$$$$$$---o        o----*-----$$$$$$-----*----o');
  WRITEln('             R1      Ý      R2                   Ý       Rc       Ý');
  Writeln(' From                $                           $                $       To');
  WRITEln(' Source              $                           $                $       Load');
  WRITEln(' ----->              $                           $                $       ---->');
  writeln('                     $ R3                        $ Ra             $ Rb');
  WRITEln('                     Ý                           Ý                Ý');
  WRITEln('       o-------------*-------------o        o----*----------------*----o');
  writeln;
  Writeln('        Mismatch loss with load directly connected to generator =        dB''');
  Writeln('             Power loss with minimum loss matching pad inserted =        dB''');
  Write  ('   dB'' values are relative to maximum available power into a z-matched load.');
  W23
END;

PROCEDURE MessageWindow;
BEGIN
  W7; Textcolor(11); ClrScr;
  WRITELN('  After each change both T and Pi pads');
  WRITELN('  have correct R values to provide the');
  WRITELN('  re-calculated dB attenuation.');
  WRITELN; TextColor(13);
  Write  ('  * Percent of attenuator input power.');
END;

PROCEDURE EnterRG;
BEGIN
  W23;
  W24;
  WRITE(' The source is at the left end of the network.  Minimum value is 1 ohm.');
  W25;
  REPEAT
    WRITE(' Enter internal resistance of source or generator, ohms ....   ');
    {$I-}  READ(RS)  {$I+}
  UNTIL IOresult=0;
  W3;
  IF RS<1 THEN RS:=1;
  gotoXY(31,2);write(RS:9:1);
END;

PROCEDURE EnterRL;
BEGIN
  W23;
  W24;
  WRITE(' The load is at the right end of the network.  Minimum value is 1 ohm.');
  W25;
  REPEAT
    WRITE(' Enter the load or terminating resistance, ohms ....   ');
    {$I-}  READ(RL)  {$I+}
  UNTIL IOresult=0;
  W3;
  IF RL<1 THEN RL:=1;
  gotoXY(31,3);write(RL:9:1);
END;

PROCEDURE EnterDB1;
BEGIN
  W23;
  W24;
  Write(' Min accepted = 0.001 dB.           Max accepted = 80 dB');
  W25;
  REPEAT
    WRITE(' Enter required attenuation, decibels ....   ');
    {$I-} READ(DB1) {$I+}
  UNTIL IOresult=0;
  W3;
  IF DB1<0.001 THEN DB1:=0.001;
  IF DB1>80.0 THEN DB1:=80.0;
  gotoXY(31,4);write(DB1:9:3);
END;

PROCEDURE EnterR1;
BEGIN
  W23;
  W24;
  W25;
  REPEAT
  WRITE(' Enter T resistor R1, ohms ....  ');
    {$I-}  READ(R1)  {$I+}
  UNTIL IOresult=0;
  IF R1<0.00001 THEN R1:=0.00001;
  W4; TextColor(14);
  gotoXY(4,4);   write(R1:12:2);
End;

PROCEDURE EnterR2;
BEGIN
  W23;
  W24;
  W25;
  REPEAT
  WRITE(' Enter T resistor R2, ohms ....  ');
    {$I-}  READ(R2)  {$I+}
  UNTIL IOresult=0;
  IF R2<0.00001 THEN R2:=0.00001;
  W4; TextColor(14);
  gotoXY(19,4);  write(R2:12:2);
End;

PROCEDURE EnterR3;
BEGIN
  W23;
  W24;
  W25;
  REPEAT
  WRITE(' Enter T resistor R3, ohms ....  ');
    {$I-}  READ(R3)  {$I+}
  UNTIL IOresult=0;
  IF R3<0.00001 THEN R3:=0.00001;
  W4; TextColor(14);
  gotoXY(11,9);  write(R3:12:2);
End;

PROCEDURE EnterRA;
BEGIN
  W23;
  W24;
  W25;
  REPEAT
  WRITE(' Enter Pi resistor Ra, ohms ....  ');
    {$I-}  READ(RA)  {$I+}
  UNTIL IOresult=0;
  IF RA<0.00001 THEN RA:=0.00001;
  W4; TextColor(14);
  gotoXY(42,9);   write(RA:13:2);
End;

PROCEDURE EnterRB;
BEGIN
  W23;
  W24;
  W25;
  REPEAT
  WRITE(' Enter Pi resistor Rb, ohms ....  ');
    {$I-}  READ(RB)  {$I+}
  UNTIL IOresult=0;
  IF RB<0.00001 THEN RB:=0.00001;
  W4; TextColor(14);
  gotoXY(59,9);  write(RB:13:2);
End;

PROCEDURE EnterRC;
BEGIN
  W23;
  W24;
  W25;
  REPEAT
  WRITE(' Enter Pi resistor Rc, ohms ....  ');
    {$I-}  READ(RC)  {$I+}
  UNTIL IOresult=0;
  IF RC<0.00001 THEN RC:=0.00001;
  W4; TextColor(14);
  gotoXY(52,4);  write(RC:12:2);
End;

Procedure ComputePowerT;
Var V1, Vin, Rin, Pin, V2, V3 : Real;
Begin
  V1:=1;                                           { Internal source volts }
  V2:=V1*(R3*(R2+RL))/(R3*(R2+RL)+(RS+R1)*(R2+R3+RL)); { V2 at middle of T }
  V3:=V2*RL/(R2+RL);                                        { Output volts }
  Rin:=R1+R3*(R2+RL)/(R2+R3+RL);
  Vin:=V1*Rin/(Rin+RS);
  Pin:=Sqr(Vin)/Rin;                                     { pad input power }
  P1:=Sqr(Vin-V2)/R1;                                 { watts in resistors }
  P3:=Sqr(V2)/R3;
  P2:=Sqr(V2-V3)/R2;
  P1:=100*P1/Pin;             { P is now percent of attenuator input power }
  P2:=100*P2/Pin;
  P3:=100*P3/Pin;
End;

Procedure ComputePowerPi;
Var x, Rin, Vgen, Vin, Pin, Vout : Real;
Begin
  Vgen:=1;
  x:=Rc+Rb*RL/(Rb+RL);
  Rin:=Ra*x/(Ra+x);
  Vin:=Vgen*Rin/(Rin+RS);
  Pin:=Sqr(Vin)/Rin;
  x:=Rb*RL/(Rb+RL);
  Vout:=Vin*x/(x+Rc);
  Pa:=Sqr(Vin)/Ra;
  Pb:=Sqr(Vout)/Rb;
  Pc:=Sqr(Vin-Vout)/Rc;
  Pa:=100*Pa/Pin;
  Pb:=100*Pb/Pin;
  Pc:=100*Pc/Pin;
End;

Procedure ComputeTdecibels;
Var x,V1,V2,V3,Rin,Vin,Pin,Pout,Ptot: Real;
Begin
  V1:=1;                                           { Internal source volts }
  V2:=V1*(R3*(R2+RL))/(R3*(R2+RL)+(RS+R1)*(R2+R3+RL)); { V2 at middle of T }
  V3:=V2*RL/(R2+RL);                                        { Output volts }
  Rin:=R1+R3*(R2+RL)/(R2+R3+RL);
  Vin:=V1*Rin/(Rin+RS);                                  { pad input volts }
  Pin:=Sqr(Vin)/Rin;
  Pout:=Sqr(V3)/RL;
  dB2:=4.342945*Ln(Pin/Pout);
End;

Procedure ComputePiDecibels;
Var x,V1,V2,V3,Rin,Vin,Pin,Pout: Real;
Begin
  V1:=1;                                                    { Source volts }
  x:=RC+RB*RL/(RB+RL);
  Rin:=x*RA/(x+RA);
  Vin:=V1*Rin/(Rin+Rs);
  V3:=Vin*RB*RL/(RB+RL)/x;
  Pout:=Sqr(V3)/RL;
  Pin:=Sqr(Vin)/Rin;
  dB3:=4.342945*Ln(Pin/Pout);
End;

FUNCTION Tanh(x:real):real;
Begin
  Tanh:=(Exp(x)-Exp(-x))/(Exp(x)+Exp(-x));
End;

FUNCTION Sinh(x:real):real;
Begin
  Sinh:=(Exp(x)-Exp(-x))/2;
End;

FUNCTION InverseCosh(x:real):real;
BEGIN
  InverseCosh:=Ln(x+sqrt(x*x-1));
END;

PROCEDURE ComputeTresistors;
VAR Y, CF : Real;
Begin
  CF:=20/Ln(10.0);                  { conversion factor 8.686 dB to nepers }
  Theta:=DB1/CF;                         { image transfer constant, nepers }
  R3:=Sqrt(RS*RL)/Sinh(Theta);
  R1:=RS/Tanh(Theta)-R3;
  R2:=RL/Tanh(Theta)-R3;
  Y:=R1*R2+R1*R3+R2*R3;
  Y:=Sqrt(RS/RL);
  IF Y<1 THEN Y:=1/Y;
  DBminloss:=CF*InverseCosh(Y);
  DBmismatch:=CF/2*Ln(Sqr(RS+RL)/4/RS/RL);
END;

PROCEDURE ComputePiresistors;       { Everitt, Comm. Engineering, page 277 }
VAR Y, CF, RR1, RR2, RR3 : Real;
Begin
  CF:=20/Ln(10.0);                  { conversion factor 8.686 dB to nepers }
  Theta:=DB1/CF;                         { image transfer constant, nepers }
  RR3:=Sqrt(RS*RL)/Sinh(Theta);
  RR1:=RS/Tanh(Theta)-RR3;
  RR2:=RL/Tanh(Theta)-RR3;
  Y:=RR1*RR2+RR1*RR3+RR2*RR3;
  RA:=Y/RR2;
  RB:=Y/RR1;
  RC:=Y/RR3;
  IF Abs(RA)>9999999999.99 THEN RA:=9999999999.99;
  IF Abs(RB)>9999999999.99 THEN RB:=9999999999.99;
  Y:=Sqrt(RS/RL);
  IF Y<1 THEN Y:=1/Y;
  DBminloss:=CF*InverseCosh(Y);
  DBmismatch:=CF/2*Ln(Sqr(RS+RL)/4/RS/RL);
END;

PROCEDURE DisplayResistorValues;
BEGIN
  W4; TextColor(14);
  gotoXY(6,4);   write(R1:12:2);
  gotoXY(21,4);  write(R2:12:2);
  gotoXY(13,9);  write(R3:12:2);

  gotoXY(50,4);  write(RC:12:2);
  gotoXY(40,9);  write(RA:13:2);
  gotoXY(57,9);  write(RB:13:2);

  gotoXY(66,14); write(dBmismatch:7:3);
  gotoXY(66,15); write(DBminloss:7:3);
  gotoXY(1,17);  IF Choice='G' THEN Write(' Above values apply to the minimum loss matching pad between source and load.')
                 ELSE clreol;

  TextColor(13);
  gotoXY(14,7);  write(P1:2:0,'%  ');
  gotoXY(28,7);  write(P2:2:0,'%  ');
  gotoXY(24,11); write(P3:2:0,'%  ');

  gotoXY(52,11);  write(PA:2:0,'%  ');
  gotoXY(69,11);  write(PB:2:0,'%  ');
  gotoXY(58,7);   write(PC:2:0,'%  ');
END;

BEGIN
  REPEAT
  Introduction;
  InputWindow;
  MessageWindow;
  OutputScreenText;
  EnterRG;
  EnterRL;
  EnterDB1;
  REPEAT
    IF DB1<0.001 THEN DB1:=0.001;
    IF DB1>80.0 THEN DB1:=80.0;
    IF Choice in ['1','2','3','A','B','C'] THEN Begin
                        IF Choice in ['1','2','3'] THEN Begin
                                                          ComputeTdecibels;
                                                          DB1:=DB2;
                                                          ComputePiResistors
                                                        End;

                        IF Choice in ['A','B','C'] THEN Begin
                                                          ComputePiDecibels;
                                                          DB1:=DB3;
                                                          ComputeTresistors
                                                        End;
                                                      End
               ELSE Begin ComputePiResistors; ComputeTresistors End;

    ComputePowerT;
    ComputePowerPi;
    OutputScreenText;
    DisplayResistorValues;
    W3;
    gotoXY(31,4);write(DB1:9:3);
    W23;
    WRITE(' Hit keys 1,2,3 to change R1,R2,R3.       Hit keys A,B,C to change Ra,Rb,Rc.');
    W24;
    WRITE(' Vary decibels with keys 9,0       G(et resistor values for minimum loss pad).');
    W25;
    Write(' Hit keys S,L,D to change start data.    I(ntroduction),    Q(uit) ...  ');
    REPEAT
      Choice:=upcase(readkey);
    UNTIL Choice IN ['0'..'9','S','L','A','B','C','G','D','I','Q'];
      IF Choice='9' THEN DB1:=DB1-0.03;
      IF Choice='0' THEN DB1:=DB1+0.03;
      IF Choice='1' THEN EnterR1;
      IF Choice='2' THEN EnterR2;
      IF Choice='3' THEN EnterR3;
      IF Choice='A' THEN EnterRA;
      IF Choice='B' THEN EnterRB;
      IF Choice='C' THEN EnterRC;
      IF Choice='G' THEN DB1:=DBminloss;
      IF Choice='S' THEN EnterRG;
      IF Choice='L' THEN EnterRL;
      IF Choice='D' THEN EnterDB1;
      IF Choice='Q' THEN QuitProgram;
    UNTIL Choice='I';
  UNTIL Choice='Q'
END.