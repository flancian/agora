### equalized odds

Go back to the [[AI Glossary]]

#fairness
A fairness metric that checks if, for any particular label and attribute, a classifier predicts that label equally well for all values of that attribute.

For example, suppose Glubbdubdrib University admits both Lilliputians and Brobdingnagians to a rigorous mathematics program. Lilliputians' secondary schools offer a robust curriculum of math classes, and the vast majority of students are qualified for the university program. Brobdingnagians' secondary schools don’t offer math classes at all, and as a result, far fewer of their students are qualified. Equalized odds is satisfied provided that no matter whether an applicant is a Lilliputian or a Brobdingnagian, if they are qualified, they are equally as likely to get admitted to the program, and if they are not qualified, they are equally as likely to get rejected.

Let’s say 100 Lilliputians and 100 Brobdingnagians apply to Glubbdubdrib University, and admissions decisions are made as follows:

Table 3. Lilliputian applicants (90% are qualified)

|		|	Qualified	|	Unqualified	|
|	-----------------------	|	-----------------------	|	-----------------------	|
|	Admitted	|	45	|	2	|
|	Rejected	|	45	|	8	|
|	Total	|	90	|	10	|

Percentage of qualified students admitted: 45/90 = 50%
Percentage of unqualified students rejected: 8/10 = 80%
Total percentage of Lilliputian students admitted: (45+2)/100 = 47%

 

Table 4. Brobdingnagian applicants (10% are qualified):

|		|	Qualified	|	Unqualified	|
|	-----------------------	|	-----------------------	|	-----------------------	|
|	Admitted	|	5	|	18	|
|	Rejected	|	5	|	72	|
|	Total	|	10	|	90	|

Percentage of qualified students admitted: 5/10 = 50%
Percentage of unqualified students rejected: 72/90 = 80%
Total percentage of Brobdingnagian students admitted: (5+18)/100 = 23%

Equalized odds is satisfied because qualified Lilliputian and Brobdingnagian students both have a 50% chance of being admitted, and unqualified Lilliputian and Brobdingnagian have an 80% chance of being rejected.

Note: While equalized odds is satisfied here, demographic parity is not satisfied. Lilliputian and Brobdingnagian students are admitted to Glubbdubdrib University at different rates; 47% of Lilliputian students are admitted, and 23% of Brobdingnagian students are admitted.

Equalized odds is formally defined in "Equality of Opportunity in Supervised Learning" as follows: "predictor Ŷ satisfies equalized odds with respect to protected attribute A and outcome Y if Ŷ and A are independent, conditional on Y."
Note: Contrast equalized odds with the more relaxed equality of opportunity metric.

