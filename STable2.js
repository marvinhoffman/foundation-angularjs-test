/**
 * Created by marvinhoffman on 11/18/13.
 */
var myMKApp = angular.module('myMKApp', []);

myMKApp.factory('STable', function() {
    var STable = {};
    STable.userParamsMinusPasswords = [
        {
            Last_Name: 'Fagundes',
            First_Name: 'David',
            UserID: 'Fagundesd',
            DocID: 5354
        },
        {
            Last_Name: 'Moore',
            First_Name: 'Efrim',
            UserID: 'Mooree',
            DocID: 5403
        },
        {
            Last_Name: 'Neal',
            First_Name: 'Don',
            UserID: 'Neald',
            DocID: 5405
        },
        {
            Last_Name: 'Champagne',
            First_Name: 'Janice',
            UserID: 'jchampagne',
            DocID: 5456
        },
        {
            Last_Name: 'Gedevanishvili',
            First_Name: 'Alexander',
            UserID: 'Gedevanishvilia',
            DocID: 10981
        },
        {
            Last_Name: 'Smith',
            First_Name: 'Todd',
            UserID: 'ts',
            DocID: 5662
        },
        {
            Last_Name: 'Snead',
            First_Name: 'Dorothy',
            UserID: 'sneadd',
            DocID: 5668
        },
        {
            Last_Name: 'Sappington',
            First_Name: 'Teresa',
            UserID: 'tsappington',
            DocID: 5290
        },
        {
            Last_Name: 'Otero',
            First_Name: 'Mary',
            UserID: 'meotero',
            DocID: 74636
        },
        {
            Last_Name: 'Lass',
            First_Name: 'Ann',
            UserID: 'amlass',
            DocID: 74637
        },
        {
            Last_Name: 'Simpson',
            First_Name: 'Rachael',
            UserID: 'risimpso',
            DocID: 74638
        },
        {
            Last_Name: 'Gray',
            First_Name: 'Triverr',
            UserID: 'tlgray',
            DocID: 74639
        },
        {
            Last_Name: 'James',
            First_Name: 'Keith',
            UserID: 'kojames',
            DocID: 74640
        },
        {
            Last_Name: 'Bock',
            First_Name: 'Darren ',
            UserID: 'dbock',
            DocID: 76373
        },
        {
            Last_Name: 'Kent',
            First_Name: 'Suze',
            UserID: 'skent',
            DocID: 76382
        },
        {
            Last_Name: 'Wilson',
            First_Name: 'Carol',
            UserID: 'CarolWilson',
            DocID: 239624
        },
        {
            Last_Name: 'Lambert',
            First_Name: 'Deidere',
            UserID: 'dlambert',
            DocID: 247032
        },
        {
            Last_Name: 'Heflin',
            First_Name: 'Janice ',
            UserID: 'JHeflin',
            DocID: 248573
        },
        {
            Last_Name: 'Dodson',
            First_Name: 'Malinda',
            UserID: 'MKDodson',
            DocID: 248584
        },
        {
            Last_Name: 'Dodson',
            First_Name: 'Malinda',
            UserID: 'mkdodson',
            DocID: 248588
        },
        {
            Last_Name: 'LEWIS',
            First_Name: 'ELIZABETH',
            UserID: 'llewis',
            DocID: 119008
        },
        {
            Last_Name: 'INGEMAN',
            First_Name: 'CHERYL',
            UserID: 'cingeman',
            DocID: 119009
        },
        {
            Last_Name: 'Support',
            First_Name: 'Medkinetics',
            UserID: 'GRsupport',
            DocID: 119028
        },
        {
            Last_Name: 'User',
            First_Name: 'Test',
            UserID: 'test',
            DocID: 119030
        },
        {
            Last_Name: 'BYRUM',
            First_Name: 'BARBARA',
            UserID: 'BBYRUM206',
            DocID: 48454
        },
        {
            Last_Name: 'Wooldridge',
            First_Name: 'Sarah',
            UserID: 'SarahWooldridge',
            DocID: 296782
        },
        {
            Last_Name: 'Benggio',
            First_Name: 'Janice',
            UserID: 'jbenggio',
            DocID: 304697
        },
        {
            Last_Name: 'Searcy',
            First_Name: 'Tonya',
            UserID: 'TonyaRizzle',
            DocID: 304703
        },
        {
            Last_Name: 'Hallam',
            First_Name: 'Robin',
            UserID: 'RobinHallam',
            DocID: 304719
        },
        {
            Last_Name: 'Martin',
            First_Name: 'Mark',
            UserID: 'jmmarti',
            DocID: 74641
        },
        {
            Last_Name: 'Moline',
            First_Name: 'Kathleen',
            UserID: 'ksmoline',
            DocID: 74642
        },
        {
            Last_Name: 'Phillips',
            First_Name: 'Maureen',
            UserID: 'msphilli',
            DocID: 74643
        },
        {
            Last_Name: 'Moore',
            First_Name: 'Gail',
            UserID: 'ghmoore',
            DocID: 74644
        },
        {
            Last_Name: 'Usifer',
            First_Name: 'Barbara Jean',
            UserID: 'bjusifer',
            DocID: 74645
        },
        {
            Last_Name: 'Byrnes',
            First_Name: 'Elizabeth',
            UserID: 'elibyr',
            DocID: 76406
        },
        {
            Last_Name: 'Floor',
            First_Name: '5A',
            UserID: '5a',
            DocID: 76422
        },
        {
            Last_Name: 'Floor',
            First_Name: '5B',
            UserID: '5b',
            DocID: 76423
        },
        {
            Last_Name: 'Lebel',
            First_Name: 'Bryan',
            UserID: 'BrianLebel',
            DocID: 248543
        },
        {
            Last_Name: 'Pickell',
            First_Name: 'Heather',
            UserID: 'HeatherPickell',
            DocID: 248547
        },
        {
            Last_Name: 'Inserra',
            First_Name: 'Vanessa',
            UserID: 'VanessaInserra',
            DocID: 248553
        },
        {
            Last_Name: 'Support',
            First_Name: 'Medkinetics',
            UserID: 'VVRHsupport',
            DocID: 119068
        },
        {
            Last_Name: 'Sullivan',
            First_Name: 'Gina',
            UserID: 'ginas',
            DocID: 119082
        },
        {
            Last_Name: 'Support',
            First_Name: 'Medkinetics',
            UserID: 'HRHsupport',
            DocID: 119091
        },
        {
            Last_Name: 'Davis',
            First_Name: 'Polly',
            UserID: 'PollyDavis',
            DocID: 140219
        },
        {
            Last_Name: 'Carr',
            First_Name: 'Brenda',
            UserID: 'bcarr',
            DocID: 151447
        },
        {
            Last_Name: 'Weiss',
            First_Name: 'Deborah',
            UserID: 'dweiss',
            DocID: 162436
        },
        {
            Last_Name: 'Lambert',
            First_Name: 'Deidere',
            UserID: 'dlambert',
            DocID: 191559
        },
        {
            Last_Name: 'Test',
            First_Name: 'Test',
            UserID: 'TestTest',
            DocID: 203454
        },
        {
            Last_Name: 'Benesh',
            First_Name: 'Adonica',
            UserID: 'abenesh',
            DocID: 222287
        },
        {
            Last_Name: 'Support2',
            First_Name: 'Medkinetics ',
            UserID: 'hshssupport',
            DocID: 238044
        },
        {
            Last_Name: 'Glos',
            First_Name: 'Cindy',
            UserID: 'CindyGlos',
            DocID: 296949
        },
        {
            Last_Name: 'Glos',
            First_Name: 'Cindy',
            UserID: 'CindyMGlos',
            DocID: 296950
        },
        {
            Last_Name: 'Mills-Prange',
            First_Name: 'Karla',
            UserID: 'Karla',
            DocID: 296960
        },
        {
            Last_Name: 'Mason',
            First_Name: 'Chase',
            UserID: 'ChaseMason',
            DocID: 304598
        },
        {
            Last_Name: 'Support',
            First_Name: 'Medkinetics',
            UserID: 'NBHSsupport',
            DocID: 304692
        },
        {
            Last_Name: 'Hentz',
            First_Name: 'Carol',
            UserID: 'CHentz',
            DocID: 304784
        },
        {
            Last_Name: 'Craig',
            First_Name: 'Constance',
            UserID: 'ConstanceCraig',
            DocID: 304800
        },
        {
            Last_Name: 'Clark',
            First_Name: 'Guy',
            UserID: 'GuyClark',
            DocID: 304801
        },
        {
            Last_Name: 'Unit',
            First_Name: 'Dialysis',
            UserID: 'dialysis',
            DocID: 69589
        },
        {
            Last_Name: 'Support',
            First_Name: 'Medkinetics',
            UserID: 'mksupport',
            DocID: 289524
        },
        {
            Last_Name: 'Floor',
            First_Name: '5C',
            UserID: '5c',
            DocID: 76424
        },
        {
            Last_Name: 'Floor',
            First_Name: '5D',
            UserID: '5d',
            DocID: 76425
        },
        {
            Last_Name: 'Floor',
            First_Name: '4A',
            UserID: '4a',
            DocID: 76426
        },
        {
            Last_Name: 'Floor',
            First_Name: '4B',
            UserID: '4b',
            DocID: 76427
        },
        {
            Last_Name: 'Czerwonka',
            First_Name: 'Randy',
            UserID: 'RandyBCzerwonka',
            DocID: 219209
        },
        {
            Last_Name: 'Mathews',
            First_Name: 'Eric',
            UserID: 'em',
            DocID: 222300
        },
        {
            Last_Name: 'Powers',
            First_Name: 'Jennifer',
            UserID: 'jpowers',
            DocID: 206687
        },
        {
            Last_Name: 'Dennis-Holley',
            First_Name: 'Margaret',
            UserID: 'MargaretDennisHolley',
            DocID: 296865
        },
        {
            Last_Name: 'Blake',
            First_Name: 'Regina',
            UserID: 'rblake',
            DocID: 304587
        },
        {
            Last_Name: 'Canaday',
            First_Name: 'Beverly',
            UserID: 'bcanaday',
            DocID: 69617
        },
        {
            Last_Name: 'Cleveland',
            First_Name: 'Angela',
            UserID: 'acleveland',
            DocID: 69833
        },
        {
            Last_Name: 'Goebel',
            First_Name: 'Laura',
            UserID: 'lgoebel',
            DocID: 69834
        },
        {
            Last_Name: 'User',
            First_Name: 'MyReports',
            UserID: 'Norton_Corp2295',
            DocID: 289502
        },
        {
            Last_Name: 'Sinclair',
            First_Name: 'Chanis',
            UserID: 'ChanisSinclair',
            DocID: 289583
        },
        {
            Last_Name: 'Floor',
            First_Name: '4C',
            UserID: '4c',
            DocID: 76428
        },
        {
            Last_Name: 'Floor',
            First_Name: '4D',
            UserID: '4d',
            DocID: 76429
        },
        {
            Last_Name: 'Floor',
            First_Name: '3A',
            UserID: '3a',
            DocID: 76430
        },
        {
            Last_Name: 'Floor',
            First_Name: '3B',
            UserID: '3b',
            DocID: 76431
        },
        {
            Last_Name: 'Floor',
            First_Name: '3C',
            UserID: '3c',
            DocID: 76432
        },
        {
            Last_Name: 'Travis',
            First_Name: 'Brenda',
            UserID: 'btravis',
            DocID: 139996
        },
        {
            Last_Name: 'Travis',
            First_Name: 'Cindee',
            UserID: 'ctravis',
            DocID: 139997
        },
        {
            Last_Name: 'Reyer',
            First_Name: 'Jessica',
            UserID: 'jessica',
            DocID: 245719
        },
        {
            Last_Name: 'White',
            First_Name: 'Cathy',
            UserID: 'CathyWhite',
            DocID: 226686
        },
        {
            Last_Name: 'Mecca',
            First_Name: 'Maria',
            UserID: 'MariaMecca',
            DocID: 286744
        },
        {
            Last_Name: 'Rodham-Clinton',
            First_Name: 'Hillary',
            UserID: 'HillaryRodham-Clinton',
            DocID: 286761
        },
        {
            Last_Name: 'Mills',
            First_Name: 'Karla',
            UserID: 'KarlaEMillsPrange',
            DocID: 296959
        },
        {
            Last_Name: 'Lucal',
            First_Name: 'Elizabeth',
            UserID: '',
            DocID: 297052
        },
        {
            Last_Name: '',
            First_Name: '',
            UserID: '',
            DocID: 304865
        },
        {
            Last_Name: 'Halley',
            First_Name: 'Kathy',
            UserID: 'khalley',
            DocID: 70399
        },
        {
            Last_Name: 'Parker',
            First_Name: 'Christy',
            UserID: 'cparker',
            DocID: 70420
        },
        {
            Last_Name: 'Stanley',
            First_Name: 'Karen',
            UserID: 'KarenStanley',
            DocID: 289526
        },
        {
            Last_Name: 'IT',
            First_Name: 'Webword',
            UserID: 'webwordIT',
            DocID: 291090
        },
        {
            Last_Name: 'Webword',
            First_Name: 'IT',
            UserID: 'webwordIT',
            DocID: 291094
        },
        {
            Last_Name: 'Floor',
            First_Name: '3D',
            UserID: '3d',
            DocID: 76433
        },
        {
            Last_Name: 'Floor',
            First_Name: '2A',
            UserID: '2a',
            DocID: 76434
        },
        {
            Last_Name: 'Floor',
            First_Name: '2B',
            UserID: '2b',
            DocID: 76435
        },
        {
            Last_Name: 'Floor',
            First_Name: '2C',
            UserID: '2c',
            DocID: 76436
        },
        {
            Last_Name: 'Floor',
            First_Name: '2D',
            UserID: '2d',
            DocID: 76437
        },
        {
            Last_Name: 'User',
            First_Name: 'MyReports',
            UserID: 'HSHS2462',
            DocID: 244246
        },
        {
            Last_Name: 'hoffman',
            First_Name: 'marvin',
            UserID: 'marvin',
            DocID: 119187
        }
    ];
    return STable
})

function MKSTableCtrl($scope, STable) {
    $scope.users = STable;
}