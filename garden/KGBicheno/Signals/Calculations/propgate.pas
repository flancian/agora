PROGRAM PROPGATE;                {  Author:  R.J.Edwards C.Eng. MIEE. FIQA  }
                                 {  Source Code:  Turbo Pascal version 6.0  }
USES crt;                        {  Last amendment:  5th May 2006           }

VAR  Freq, Pt, Snoise, D1, SNR, Smeter, dB3, dB5, dB6, FS : Real;

     H : Integer;
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

PROCEDURE W22;
Begin
  window(1,22,80,22);
  TextColor(7);TextBackground(1);clrscr;
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

PROCEDURE Notes4;
Begin
  W1;
  Writeln('');
  Writeln('Line-of-sight propagation assumes a smooth Earth, without obstructions, high');
  Writeln('antennas at both ends of the path, and over distances not much greater than to');
  Writeln('the radio horizon. Earth curvature is a limitation. Antennas should be at a');
  Writeln('minimum of several wavelengths above ground level.');
  Writeln('');
  Writeln('The radio horizon is notionally at a distance of 80/CubeRoot(F) kilometres,');
  Writeln('between points at low heights above ground, where F is the frequency in MHz.');
  Writeln('');
  Writeln('To ensure high efficiency antennas the dimensions are required to be of the');
  Writeln('order of half-wavelength or greater. Combined with height requirements, this');
  Writeln('makes line-of-sight operation at frequencies below 30 MHz impractical. Propag-');
  Writeln('ation beyond the radio horizon is quite possible, there is no sudden cut off');
  Writeln('but communication becomes progressively more unreliable.');
  Writeln;
  Writeln('                       -------------------------------');
  Writeln('');
  Writeln('At great distances through the ionosphere the number of hops involved will be');
  writeln('very uncertain but computed signal strengths will provide a fair idea of what');
  writeln('can be expected. Ground path distances will be roughly 15% shorter than skywave');
  writeln('paths - a 2000 kM radio hop via the F-Layer corresponding to a 1000 mile ground');
  Writeln('path. It should be remembered if only one hop in a string of hops is in sun-');
  Write  ('light then propagation below about 5 MHz will be seriously affected.');
  W25;
  write(' E(nter data now),  B(egin again)  or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','B','Q'];
  IF Choice='Q' THEN QuitProgram;
End;

PROCEDURE Notes3;
Begin
  W1;
  Writeln('Approximate Antenna Gains Relative to an Isotrope.  Plus typical efficiencies.');
  Writeln;
  Writeln('                                  S-units   Decibels   Power Efficiency');
  Writeln('Short loaded vertical               0.7        4          10-50 % ');
  Writeln('Typical inverted-L                  0.8        5            85 % ');
  Writeln('1/4-wave vertical                   0.8        5            90 % ');
  Writeln('5/8-wave vertical                   1.0        6            96 % ');
  Writeln('Short loaded dipole                 0.2        1            70 % ');
  Writeln('1/2-wave dipole                     0.3        2            97 % ');
  Writeln('Dipole + reflector                  0.5        3            96 % ');
  Writeln('Dipole + reflector + director       1.1        6            95 % ');
  Writeln('5 element Yagi                      1.8       11            90 % ');
  Writeln('10 element Yagi                     2.7       16            90 % ');
  Writeln('Small vertical magloop              0.7        4           5-30 % ');
  Writeln('N-dipole array + reflectors         ---    10*Log(N)+3      95 % ');
  Writeln('N-wavelengths dia parabolic dish    ---    20*Log(N*Pi)     95 % ');
  Writeln;
  Writeln('The efficiency of most antennas exceeds 90 percent which for the purpose of');
  Writeln('estimating received signal strength can be ignored.');
  writeln;
  writeln('In this program, predictions are most accurate with line-of-sight radio paths');
  writeln('and single hops of ionospheric paths. Multiple hop paths, when ionospheric con-');
  Write  ('ditions allow, can vary by plus or minus 2.5 S-units or about 15 decibels.');
  W25;
  write(' E(nter data now),  M(ore notes),  B(egin again)  or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','M','B','Q'];
  IF Choice='M' THEN Notes4;
  IF Choice='Q' THEN QuitProgram;
End;

PROCEDURE Notes2;
Begin
  W1;
  Writeln;
  Writeln('Received signal strength is computed over unobstructed direct line-of-sight');
  Writeln('radio paths, or multi-hop propagation via the ionosphere. The first is chosen');
  Writeln('by selecting zero hops. The second is chosen by selecting one or more hops.');
  Writeln;
  Writeln('In the case of multi-hop propagation additional losses due to passage through');
  Writeln('through the ionosphere and due to reflections from the ground are taken into');
  Writeln('account. These additional losses are average expected values when a path is');
  Writeln('open and depends on frequency, time of day, heights of reflecting layers and');
  Writeln('ionospheric conditions. This program is not intended for accurate predictions');
  Writeln('but is intended to familiarise users with signal strengths and S-meters.');
  Writeln;
  Writeln('An average length of path for one hop is taken as 2000 kM which corresponds to');
  Writeln('an elevation angle of about 15 degrees with the height of the F-layer being an');
  Writeln('average of 350 kM.  The F-layer can vary between heights of 280 and 450 kM and');
  Writeln('can differ from one hop to the next. The E-layer at a constant height of 115 kM');
  Writeln('is present only when radiated by sunlight. It is neglected by this program.');
  Writeln;
  Writeln('The program also neglects the fact that frequencies above the Maximum Usable');
  Writeln('Frequency, the MUF, pass right through both the E and F-layers and never ret-');
  writeln('urn to Earth. For the F-layer, MUF''s are lower when the path is in darkness');
  writeln('than when in sunlight. MUF''s are also lower in winter than in summer. DX MUF''s');
  write  ('range between 7 MHz and 50 MHz, being highest only at a sun-spot maximum.');
  W25;
  write(' E(nter data now),  M(ore notes),  B(egin again) or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','M','B','Q'];
  IF Choice='M' THEN Notes3;
  IF Choice='Q' THEN QuitProgram;
End;

PROCEDURE Notes1;
Begin
  W1;
  Writeln;
  Writeln('The received signal strength as displayed on the receiver''s S-meter is computed');
  Writeln('in terms of S-units. Signal strengths exceeding S9 are displayed as dB above S9');
  Writeln;
  Writeln('The noise level at the receiver, in terms of S-units, is input to the program.');
  Writeln('The received signal-to-noise ratio is computed in decibels.');
  Writeln;
  Writeln('The S-meter is assumed to be perfectly calibrated, S9 corresponding to 50 pico-');
  Writeln('watts receiver input power, with one S-unit corresponding to a change in input');
  Writeln('power of 4 times, or a doubling/halving of receiver input volts.');
  Writeln;
  Writeln('With a standard 50-ohm receiver S9 corresponds to a signal level of 50 micro-V.');
  Writeln;
  Writeln('The noise power level at S = -2 corresponds roughly to an internal thermal agi-');
  Writeln('tation noise from a resistor at room temperature in a 2.5 KHz, SSB, bandwidth.');
  Writeln;
  Writeln('Loss in the ionosphere is greatest when the whole path is in sunlight.  Nearly');
  Writeln('all of the loss occurs in passage through the D-region at a height of 70 to 90');
  Writeln('kM. But only frequencies below 5 MHz are affected. In sunlight the 160m band is');
  Writeln('almost entire absorbed in the D-region, no refraction or reflection from the E');
  Writeln('or F-layers occurs and propagation is restricted to groundwave.  When the sun');
  Writeln('sets on the D-region the 160m band comes to life. The 80m band is less affected');
  Write  ('and signals vary according to yearly seasons and the 11-year sun-spot cycle.');
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
  Write(' Program name: PROPGATE.exe     Author: R.J.Edwards G4FGQ    (C)   5th May 2006');
  W2;
  Writeln;
  Write('       PROPAGATION OF RADIO WAVES.   LINE-OF-SIGHT AND IONOSPHERIC PATHS');
  W5; Writeln;
  Writeln('This program is intended to introduce newcomers to signal strengths expected');
  Writeln('from transmitters of given output power, over various radio path distances and');
  Writeln('under average propagation conditions. It should be borne in mind that ionosph-');
  Writeln('eric conditions can cause path loss to vary by 20 dB about so-called average');
  Writeln('values which may not exist at some hours of the day or time of the year. Much');
  Writeln('depends on operating frequency and transmitting and receiving antennas. However');
  Writeln('average or typical antenna directional power gains can be estimated.');
  Writeln;
  Writeln('The program averages out the great variety of antennas by assuming Tx and Rx');
  Writeln('antennas to be isotropes which radiate and receive equally in all directions.');
  Writeln('Computed received signal strength in particular maximum directions can then be');
  Writeln('mentally adjusted according to Tx and Rx antenna gains in those directions.');
  Writeln;
  Writeln('It is assumed the efficiency of the transmit and receive antennas is 100% and');
  writeln('that the Rx antena is Z-matched to the Rx input impedance. Path loss between');
  writeln('Tx and Rx input is computed in decibels. Radio paths are extended attenuators');
  Writeln('and receiver S-meters are power meters. So its better not to think in terms of');
  Write  ('amps or volts.  S9 corresponds to 50 pico-watts.');
  W25;
  write(' E(nter data now),  M(ore notes),  or Q(uit program) ....   ');
  REPEAT
    Choice:=upcase(readkey);
  UNTIL Choice in ['E','M','Q'];
  IF Choice='M' THEN Notes1;
  IF Choice='Q' THEN QuitProgram;
END;

PROCEDURE InputScreen;
BEGIN
  W3; Textcolor(7); ClrScr;
  Writeln(' F. Frequency, megahertz ..               H. Number of hops .......  ');
  Writeln(' W. Tx output power,  watts               N. Rx noise level S-units  ');
  Write  (' P. Path length, kilometres                 ');
END;

PROCEDURE EnterFreq;
BEGIN
  W22;
  Write(' Frequency range is from 1.5 to 500 MHz. Ionospheric propagation is rare above');
  W23;
  Write(' an MUF of 30 MHz. Line-of-sight propagation is practical above 30 MHz. Antenna');
  W24;
  Write(' size and height needed to clear obstructions are limitations.');
  W25;
  REPEAT
    WRITE(' Enter frequency, Megahertz ....   ');
    {$I-} READ(Freq) {$I+}
  UNTIL IOresult=0;
  IF Freq<1.5 THEN Freq:=1.5;
  IF Freq>500 THEN Freq:=500;
  W3;
  gotoXY(28,1);write(Freq:9:2);
END;

PROCEDURE EnterWatts;
BEGIN
  W22;
  Write(' Tx power output range is from 1 mW to 10 Kilowatts.');
  W23;
  Write(' Both Tx and Rx antennas are assumed to be isotropic and 100% efficient.');
  W24;
  Write(' The receiving antenna is impedance-matched to the receiver.');
  W25;
  REPEAT
    WRITE(' Enter transmitter output power, watts ....   ');
    {$I-} READ(Pt) {$I+}
  UNTIL IOresult=0;
  IF Pt<0.001 THEN Pt:=0.001;
  IF Pt>9999.999 THEN Pt:=9999.999;
  W3;
  gotoXY(28,2);write(Pt:9:3);
END;

PROCEDURE EnterKiloM;
BEGIN
  W22;
  Write(' Enter line-of-sight path distance only when hops = 0.');
  W23;
  Write(' The radio path length of one hop is fixed at 2000 kM.');
  W24;
  Write(' Approx distance to radio horizon = 80/Cuberoot(Freq) kM.');
  W25;
  REPEAT
    WRITE(' Enter line-of-sight path distance, kilometres ....   ');
    {$I-}  READ(D1)  {$I+}
  UNTIL IOresult=0;
  IF D1<1 THEN D1:=1;
  W3;
  gotoXY(28,3);write(D1:9:1);
END;

PROCEDURE EnterHops;
BEGIN
  W22;
  Write(' The radio path length of one hop is 2000 kM = 1243 miles.  Angle = 15 degrees.');
  W23;
  Write(' Enter integer values.  Enter zero hops to go to line-of-sight propagation.');
  W24;
  Write(' Availability of hops depends on ionosheric conditions and MUF.');
  W25;
  REPEAT
    WRITE(' Enter number of hops along the radio path ....   ');
    {$I-}  READ(H)  {$I+}
  UNTIL IOresult=0;
  Flag:='D';
  IF H<0.5 THEN H:=0;
  IF H>10 THEN H:=10;
  W3;
  gotoXY(68,1);write(H:9);
END;

PROCEDURE EnterNoise;
BEGIN
  W22;
  Write(' The received noise level may be due to either atmospherics or man-made noise.');
  W23;
  Write(' For noise levels greater than S9 add 1.7 to S9 for each 10 dB above S9.');
  W24;
  Write(' A noise level of -2 S-units is equal to receiver internal thermal noise.');
  W25;
  REPEAT
    WRITE(' Enter a noise level indicated by the receiver S-meter, S-units ...  ');
    {$I-} READ(Snoise) {$I+}
  UNTIL IOresult=0;
  IF Snoise<-2 THEN Snoise:=-2;
  IF Snoise>15.644 THEN Snoise:=15.644;           { corresponds to S9+40 dB }
  W3;
  gotoXY(68,2);write(Snoise:9:1);
END;

PROCEDURE Calculate;         { ALL CALCULATIONS BASED ON ISOTROPIC ANTENNAS }
Var K, Lambda, S0, Pr, S9, Pnoise, dB, dB1, dB2, SL, D2 : Real;
BEGIN
  Lambda:=300/Freq;
  S9:=50*1E-12;                        { Receiver noise power at S=9, watts }
  S0:=S9/262144;                       { Receiver noise power at S=0, watts }
  Pnoise:=Sqr(Exp(Snoise*Ln(2)))*S0;   { actual receiver noise power, watts }
  IF H>0.5 THEN Begin
     IF Freq<5 THEN Begin
                   K:=Exp(1.7*Ln(5/Freq));
                   K:=Exp(1-K);
                   dB1:=8.686*Ln(1/K)
                 End
            ELSE dB1:=0;  { dB1 = typical loss in one trip through D-region }
  dB2:=3.5;             { Typical dB loss due to one reflection from ground }

                  D1:=2000*H; { total path length, kM.  H is number of hops }
                  SL:=Sqr(Lambda/4/Pi/D1/1000);            { spreading loss }
                  dB:=4.343*Ln(1/SL);                   { dB spreading loss }
                  IF Flag='D' THEN
                  Begin                             { compute darkness loss }
                    dB5:=(H-1)*dB2;
                    IF dB5>250 THEN dB5:=250;
                    Pr:=Pt*Sqr(Lambda/4/Pi/D1/1000)*Exp(-dB5/4.343); { Rx pwr }
                    FS:=Sqrt(30*Pt)/D1*1000*Exp(-dB5/8.686); { uV per metre }
                    dB6:=dB+dB5                     { overall darkness loss }
                  End;
                  IF Flag='S' THEN
                  Begin                             { compute sunlight loss }
                    dB5:=(H-1)*dB2+H*dB1+0.2*H;
                    IF dB5>250 THEN dB5:=250;
                    Pr:=Pt*Sqr(Lambda/4/Pi/D1/1000)*Exp(-dB5/4.343);
                    FS:=Sqrt(30*Pt)/D1*1000*Exp(-dB5/8.686);
                    dB6:=dB+dB5;                    { overall sunlight loss }
                  End;
        SNR:=4.343*Ln(Pr/Pnoise);               { signal-to-noise ratio, dB }
        Smeter:=4.343*Ln(Pr/S0)/6.0206;   { Received signal S-meter reading }
        End ELSE Begin                         { Compute line-of-sight path }
                   Flag:='*';
                   Pr:=Pt*Sqr(Lambda/4/Pi/D1/1000);   { actual receiver pwr }
                   dB6:=4.343*Ln(Pt/Pr);          { line-of-sight path loss }
                   FS:=Sqrt(30*Pt)/D1*1000;  { Field strength, uV per metre }
                   SNR:=4.343*Ln(Pr/Pnoise);    { signal-to-noise ratio, dB }
                   Smeter:=4.343*Ln(Pr/S0)/6.0206  { signal S-meter reading }
                 End;

  IF Smeter<0 THEN Smeter:=0;
  IF Smeter>9 THEN dB3:=(Smeter-9)*6.0206 ELSE dB3:=0;
END;

PROCEDURE ResultsScreen;
BEGIN
  W4; TextColor(7);
  Writeln;
  Writeln; TextColor(7);
  Writeln;
  Writeln('                 Radio path length            miles');
  writeln;
  Writeln('   Total attenuation from Tx to Rx            decibels.  D-Layer in');
  Writeln;
  Writeln('  Field strength at receiving site            micro-volts per metre');
  Writeln;
  Writeln('          Receiver S-meter reading            S-units ');
  Writeln;
  Writeln('             Signal-to-noise ratio            decibels ');
END;

BEGIN

  REPEAT
    REPEAT
      Introduction;
    UNTIL choice='E';
  InputScreen;
  ResultsScreen;
  EnterFreq;
  EnterWatts;
  EnterKiloM;
  EnterHops;
  EnterNoise;
  Flag:='D';
  REPEAT
    W3;
    IF Freq<1.5 THEN Freq:=1.5;
    IF Freq>500 THEN Freq:=500;
    gotoXY(28,1); write(Freq:9:2);

    IF Pt<0.001 THEN Pt:=0.001;
    IF Pt>9999.999 THEN Pt:=9999.999;
    gotoXY(28,2); write(Pt:9:3);

    IF D1<1 THEN D1:=1;
    gotoXY(28,3); write(D1:9:1);

    IF H<0.5 THEN H:=0;
    IF H>10 THEN H:=10;
    gotoXY(68,1); write(H:9);

    IF Snoise<=-2 THEN Snoise:=-2;
    IF Snoise>15.644 THEN Snoise:=15.644;
    gotoXY(68,2); write(Snoise:9:1);

    Calculate;

    gotoXY(28,3); write(D1:9:1);

    ResultsScreen;
    TextColor(14);
    GotoXY(35,4); write(D1*0.6215:10:1);
    GotoXY(35,6); write(dB6:10:1);
    GotoXY(35,8); write(FS:10:2);
    GotoXY(35,10);
    IF Smeter>9 THEN write(' S9 +',dB3:5:1,' dB         ')
                ELSE write(Smeter:10:1);

    GotoXY(35,12); write(SNR:10:1);
    GotoXY(68,6);
    IF Flag='D' THEN write(' Darkness    ');
    IF Flag='S' THEN write(' Sunlight    ');
    GotoXY(66,6);
    IF Flag='*' THEN Write('not involved ');
    W22;
    Write(' Vary frequency: 1,2   Path length: 3,4   Rx noise level: 5,6   Tx power: 7,8');
    W23;
    Write('   T(oggle between Sunlight and Darkness over the D-Layer.)');
    W24;
    Write('     S(et Hops = 0 and set path distance to the radio horizon.)');
    W25;
    Write(' Hit F,W,P,H,N to change data.   B(egin again),   Q(uit program) ...  ');
    REPEAT
      Choice:=upcase(readkey);
    UNTIL Choice IN ['1'..'8','F','W','P','H','N','T','S','B','Q'];
      IF Choice='F' THEN EnterFreq;
      IF Choice='W' THEN EnterWatts;
      IF Choice='P' THEN EnterKiloM;
      IF Choice='H' THEN EnterHops;
      IF Choice='N' THEN EnterNoise;
      IF Choice='T' THEN IF Flag='D' THEN Flag:='S' ELSE Flag:='D';
      IF Choice='1' THEN Freq:=Freq/1.005;
      IF Choice='2' THEN Freq:=Freq*1.005;
      IF Choice='3' THEN D1:=D1/1.002-0.1;
      IF Choice='4' THEN D1:=D1*1.002+0.1;
      IF Choice='5' THEN Snoise:=Snoise-0.1;
      IF Choice='6' THEN Snoise:=Snoise+0.1;
      IF Choice='7' THEN Pt:=Pt/1.02-0.001;
      IF Choice='8' THEN Pt:=Pt*1.02+0.001;
      IF Choice='S' THEN Begin D1:=80/Exp(1/3*Ln(Freq)); H:=0 End;
      IF Choice='Q' THEN QuitProgram;
    UNTIL Choice='B';
  UNTIL Choice='Q'
END.