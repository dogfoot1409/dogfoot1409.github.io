const calender = document.querySelector(".fa-calendar-days");
const title = document.querySelector(".title");
const eraseInfo = document.querySelector(".fa-comment-slash");
const all = document.querySelector(".all");
const everyYearData = [
    {
     "year": 1950,
     "country": "Argentina",
     "pop": 17091823,
     "emp": 6608832,
     "avh": 2034,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1951,
     "country": "Argentina",
     "pop": 17457578,
     "emp": 6713252,
     "avh": 2037,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1952,
     "country": "Argentina",
     "pop": 17815966,
     "emp": 6819320,
     "avh": 2041,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1953,
     "country": "Argentina",
     "pop": 18168618,
     "emp": 6927064,
     "avh": 2045,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1954,
     "country": "Argentina",
     "pop": 18517167,
     "emp": 7036511,
     "avh": 2049,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1955,
     "country": "Argentina",
     "pop": 18863244,
     "emp": 7147687,
     "avh": 2053,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1956,
     "country": "Argentina",
     "pop": 19205762,
     "emp": 7244111,
     "avh": 2057,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1957,
     "country": "Argentina",
     "pop": 19543633,
     "emp": 7341836,
     "avh": 2061,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1958,
     "country": "Argentina",
     "pop": 19878487,
     "emp": 7440879,
     "avh": 2065,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1959,
     "country": "Argentina",
     "pop": 20211958,
     "emp": 7541258,
     "avh": 2069,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1960,
     "country": "Argentina",
     "pop": 20545673,
     "emp": 7642992,
     "avh": 2073,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1961,
     "country": "Argentina",
     "pop": 20879105,
     "emp": 7739992,
     "avh": 2066,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1962,
     "country": "Argentina",
     "pop": 21211169,
     "emp": 7838223,
     "avh": 2059,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1963,
     "country": "Argentina",
     "pop": 21542655,
     "emp": 7937701,
     "avh": 2052,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1964,
     "country": "Argentina",
     "pop": 21874359,
     "emp": 8038441,
     "avh": 2045,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1965,
     "country": "Argentina",
     "pop": 22207077,
     "emp": 8140460,
     "avh": 2039,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1966,
     "country": "Argentina",
     "pop": 22534461,
     "emp": 8240280,
     "avh": 2032,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1967,
     "country": "Argentina",
     "pop": 22855980,
     "emp": 8341324,
     "avh": 2025,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1968,
     "country": "Argentina",
     "pop": 23181155,
     "emp": 8443606,
     "avh": 2019,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1969,
     "country": "Argentina",
     "pop": 23519509,
     "emp": 8547143,
     "avh": 2012,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1970,
     "country": "Argentina",
     "pop": 23880561,
     "emp": 8651949,
     "avh": 2006,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1971,
     "country": "Argentina",
     "pop": 24259561,
     "emp": 8734713,
     "avh": 2002,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1972,
     "country": "Argentina",
     "pop": 24653175,
     "emp": 8818268,
     "avh": 1999,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1973,
     "country": "Argentina",
     "pop": 25056478,
     "emp": 8902623,
     "avh": 1996,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1974,
     "country": "Argentina",
     "pop": 25462302,
     "emp": 9226568,
     "avh": 1992,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1975,
     "country": "Argentina",
     "pop": 25865776,
     "emp": 9285899,
     "avh": 1989,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1976,
     "country": "Argentina",
     "pop": 26264681,
     "emp": 9292825,
     "avh": 1986,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1977,
     "country": "Argentina",
     "pop": 26661398,
     "emp": 9544593,
     "avh": 1983,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1978,
     "country": "Argentina",
     "pop": 27061047,
     "emp": 9631727,
     "avh": 1980,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1979,
     "country": "Argentina",
     "pop": 27471036,
     "emp": 9799654,
     "avh": 1977,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1980,
     "country": "Argentina",
     "pop": 27896528,
     "emp": 9828572,
     "avh": 1974,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1981,
     "country": "Argentina",
     "pop": 28338515,
     "emp": 9851314,
     "avh": 1961,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1982,
     "country": "Argentina",
     "pop": 28794548,
     "emp": 10007144,
     "avh": 1948,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1983,
     "country": "Argentina",
     "pop": 29262047,
     "emp": 10316276,
     "avh": 1935,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1984,
     "country": "Argentina",
     "pop": 29737093,
     "emp": 10556924,
     "avh": 1923,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1985,
     "country": "Argentina",
     "pop": 30216279,
     "emp": 10633323,
     "avh": 1910,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1986,
     "country": "Argentina",
     "pop": 30698964,
     "emp": 10947461,
     "avh": 1898,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1987,
     "country": "Argentina",
     "pop": 31184415,
     "emp": 11175552,
     "avh": 1886,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1988,
     "country": "Argentina",
     "pop": 31668949,
     "emp": 11396119,
     "avh": 1874,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1989,
     "country": "Argentina",
     "pop": 32148134,
     "emp": 11496272,
     "avh": 1862,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1990,
     "country": "Argentina",
     "pop": 32618651,
     "emp": 11811478,
     "avh": 1850,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1991,
     "country": "Argentina",
     "pop": 33079000,
     "emp": 12190682,
     "avh": 1837,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1992,
     "country": "Argentina",
     "pop": 33529326,
     "emp": 12385934,
     "avh": 1826,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1993,
     "country": "Argentina",
     "pop": 33970111,
     "emp": 12345012,
     "avh": 1850,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1994,
     "country": "Argentina",
     "pop": 34402672,
     "emp": 12416181,
     "avh": 1875,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1995,
     "country": "Argentina",
     "pop": 34828170,
     "emp": 11835313,
     "avh": 1881,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1996,
     "country": "Argentina",
     "pop": 35246374,
     "emp": 12137214,
     "avh": 1888,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1997,
     "country": "Argentina",
     "pop": 35657429,
     "emp": 12762511,
     "avh": 1895,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1998,
     "country": "Argentina",
     "pop": 36063459,
     "emp": 13351142,
     "avh": 1903,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1999,
     "country": "Argentina",
     "pop": 36467218,
     "emp": 13461274,
     "avh": 1887,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2000,
     "country": "Argentina",
     "pop": 36870787,
     "emp": 13598359,
     "avh": 1862,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2001,
     "country": "Argentina",
     "pop": 37275652,
     "emp": 13505481,
     "avh": 1811,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2002,
     "country": "Argentina",
     "pop": 37681749,
     "emp": 13412664,
     "avh": 1710,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2003,
     "country": "Argentina",
     "pop": 38087868,
     "emp": 14069103,
     "avh": 1713,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2004,
     "country": "Argentina",
     "pop": 38491972,
     "emp": 14996856,
     "avh": 1743,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2005,
     "country": "Argentina",
     "pop": 38892931,
     "emp": 15749588,
     "avh": 1771,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2006,
     "country": "Argentina",
     "pop": 39289878,
     "emp": 16298122,
     "avh": 1775,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2007,
     "country": "Argentina",
     "pop": 39684295,
     "emp": 16961412,
     "avh": 1787,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2008,
     "country": "Argentina",
     "pop": 40080160,
     "emp": 17370250,
     "avh": 1789,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2009,
     "country": "Argentina",
     "pop": 40482788,
     "emp": 17562055,
     "avh": 1751,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2010,
     "country": "Argentina",
     "pop": 40895752,
     "emp": 18076745,
     "avh": 1760,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2011,
     "country": "Argentina",
     "pop": 41320500,
     "emp": 18488029,
     "avh": 1760,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2012,
     "country": "Argentina",
     "pop": 41755196,
     "emp": 18791292,
     "avh": 1736,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2013,
     "country": "Argentina",
     "pop": 42196030,
     "emp": 19124418,
     "avh": 1725,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2014,
     "country": "Argentina",
     "pop": 42637511,
     "emp": 19383050,
     "avh": 1705,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2015,
     "country": "Argentina",
     "pop": 43075416,
     "emp": 19854450,
     "avh": 1703,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2016,
     "country": "Argentina",
     "pop": 43508460,
     "emp": 19723175,
     "avh": 1646,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2017,
     "country": "Argentina",
     "pop": 43937140,
     "emp": 20033660,
     "avh": 1648,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2018,
     "country": "Argentina",
     "pop": 44361150,
     "emp": 20135070,
     "avh": 1638,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2019,
     "country": "Argentina",
     "pop": 44780677,
     "emp": 20643215,
     "avh": 1609,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 1950,
     "country": "Australia",
     "pop": 8354106,
     "emp": 3429873,
     "avh": 2170,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1951,
     "country": "Australia",
     "pop": 8599922,
     "emp": 3523916,
     "avh": 2150,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1952,
     "country": "Australia",
     "pop": 8782429,
     "emp": 3591674,
     "avh": 2130,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1953,
     "country": "Australia",
     "pop": 8950892,
     "emp": 3653408,
     "avh": 2111,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1954,
     "country": "Australia",
     "pop": 9159148,
     "emp": 3731083,
     "avh": 2091,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1955,
     "country": "Australia",
     "pop": 9374454,
     "emp": 3811291,
     "avh": 2072,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1956,
     "country": "Australia",
     "pop": 9600318,
     "emp": 3895439,
     "avh": 2053,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1957,
     "country": "Australia",
     "pop": 9814506,
     "emp": 3946432,
     "avh": 2034,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1958,
     "country": "Australia",
     "pop": 10019332,
     "emp": 3981426,
     "avh": 2015,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1959,
     "country": "Australia",
     "pop": 10238066,
     "emp": 4030419,
     "avh": 1996,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1960,
     "country": "Australia",
     "pop": 10470018,
     "emp": 4155402,
     "avh": 1978,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1961,
     "country": "Australia",
     "pop": 10710053,
     "emp": 4167400,
     "avh": 1974,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1962,
     "country": "Australia",
     "pop": 10908265,
     "emp": 4267385,
     "avh": 1971,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1963,
     "country": "Australia",
     "pop": 11116948,
     "emp": 4389368,
     "avh": 1967,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1964,
     "country": "Australia",
     "pop": 11336044,
     "emp": 4546845,
     "avh": 1963,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1965,
     "country": "Australia",
     "pop": 11559445,
     "emp": 4684576,
     "avh": 1960,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1966,
     "country": "Australia",
     "pop": 11777407,
     "emp": 4853451,
     "avh": 1956,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1967,
     "country": "Australia",
     "pop": 11996868,
     "emp": 5005279,
     "avh": 1952,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1968,
     "country": "Australia",
     "pop": 12228672,
     "emp": 5127487,
     "avh": 1949,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1969,
     "country": "Australia",
     "pop": 12509311,
     "emp": 5270841,
     "avh": 1945,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1970,
     "country": "Australia",
     "pop": 12793034,
     "emp": 5470687,
     "avh": 1942,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1971,
     "country": "Australia",
     "pop": 13033133,
     "emp": 5582775,
     "avh": 1923,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1972,
     "country": "Australia",
     "pop": 13244171,
     "emp": 5652177,
     "avh": 1903,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1973,
     "country": "Australia",
     "pop": 13431794,
     "emp": 5798769,
     "avh": 1889,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1974,
     "country": "Australia",
     "pop": 13605570,
     "emp": 5898222,
     "avh": 1907,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1975,
     "country": "Australia",
     "pop": 13773288,
     "emp": 5873687,
     "avh": 1893,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1976,
     "country": "Australia",
     "pop": 13935731,
     "emp": 5960297,
     "avh": 1904,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1977,
     "country": "Australia",
     "pop": 14092548,
     "emp": 6014011,
     "avh": 1906,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1978,
     "country": "Australia",
     "pop": 14249401,
     "emp": 6031926,
     "avh": 1906,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1979,
     "country": "Australia",
     "pop": 14413000,
     "emp": 6111774,
     "avh": 1912,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1980,
     "country": "Australia",
     "pop": 14588405,
     "emp": 6277514,
     "avh": 1909,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1981,
     "country": "Australia",
     "pop": 14777243,
     "emp": 6356343,
     "avh": 1894,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1982,
     "country": "Australia",
     "pop": 14979205,
     "emp": 6340231,
     "avh": 1870,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1983,
     "country": "Australia",
     "pop": 15194641,
     "emp": 6241293,
     "avh": 1857,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1984,
     "country": "Australia",
     "pop": 15423166,
     "emp": 6458382,
     "avh": 1878,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1985,
     "country": "Australia",
     "pop": 15663663,
     "emp": 6681814,
     "avh": 1869,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1986,
     "country": "Australia",
     "pop": 15917572,
     "emp": 6977031,
     "avh": 1873,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1987,
     "country": "Australia",
     "pop": 16183168,
     "emp": 7141334,
     "avh": 1871,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1988,
     "country": "Australia",
     "pop": 16452255,
     "emp": 7412162,
     "avh": 1867,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1989,
     "country": "Australia",
     "pop": 16713989,
     "emp": 7722003,
     "avh": 1877,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1990,
     "country": "Australia",
     "pop": 16960597,
     "emp": 7845483,
     "avh": 1863,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1991,
     "country": "Australia",
     "pop": 17189240,
     "emp": 7674020,
     "avh": 1850,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1992,
     "country": "Australia",
     "pop": 17402173,
     "emp": 7635434,
     "avh": 1846,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1993,
     "country": "Australia",
     "pop": 17603205,
     "emp": 7667202,
     "avh": 1863,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1994,
     "country": "Australia",
     "pop": 17798529,
     "emp": 7922579,
     "avh": 1869,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1995,
     "country": "Australia",
     "pop": 17993074,
     "emp": 8215477,
     "avh": 1870,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1996,
     "country": "Australia",
     "pop": 18189277,
     "emp": 8321126,
     "avh": 1863,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1997,
     "country": "Australia",
     "pop": 18387214,
     "emp": 8382689,
     "avh": 1861,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1998,
     "country": "Australia",
     "pop": 18587021,
     "emp": 8528651,
     "avh": 1846,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1999,
     "country": "Australia",
     "pop": 18788186,
     "emp": 8681078,
     "avh": 1848,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2000,
     "country": "Australia",
     "pop": 18991431,
     "emp": 8902647,
     "avh": 1847,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2001,
     "country": "Australia",
     "pop": 19194672,
     "emp": 9011887,
     "avh": 1814,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2002,
     "country": "Australia",
     "pop": 19401368,
     "emp": 9185278,
     "avh": 1808,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2003,
     "country": "Australia",
     "pop": 19624166,
     "emp": 9398048,
     "avh": 1801,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2004,
     "country": "Australia",
     "pop": 19879649,
     "emp": 9560890,
     "avh": 1799,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2005,
     "country": "Australia",
     "pop": 20178540,
     "emp": 9911472,
     "avh": 1797,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2006,
     "country": "Australia",
     "pop": 20526303,
     "emp": 10164608,
     "avh": 1786,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2007,
     "country": "Australia",
     "pop": 20916344,
     "emp": 10489001,
     "avh": 1786,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2008,
     "country": "Australia",
     "pop": 21332282,
     "emp": 10757757,
     "avh": 1786,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2009,
     "country": "Australia",
     "pop": 21750851,
     "emp": 10853535,
     "avh": 1757,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2010,
     "country": "Australia",
     "pop": 22154679,
     "emp": 11121260,
     "avh": 1763,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2011,
     "country": "Australia",
     "pop": 22538001,
     "emp": 11326355,
     "avh": 1765,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2012,
     "country": "Australia",
     "pop": 22903948,
     "emp": 11449159,
     "avh": 1757,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2013,
     "country": "Australia",
     "pop": 23254913,
     "emp": 11553935,
     "avh": 1756,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2014,
     "country": "Australia",
     "pop": 23596424,
     "emp": 11667239,
     "avh": 1746,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2015,
     "country": "Australia",
     "pop": 23932502,
     "emp": 11908493,
     "avh": 1746,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2016,
     "country": "Australia",
     "pop": 24262712,
     "emp": 12071554,
     "avh": 1736,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2017,
     "country": "Australia",
     "pop": 24584620,
     "emp": 12324088,
     "avh": 1736,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2018,
     "country": "Australia",
     "pop": 24898152,
     "emp": 12619437,
     "avh": 1729,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2019,
     "country": "Australia",
     "pop": 25203198,
     "emp": 12863174,
     "avh": 1726,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 1950,
     "country": "Austria",
     "pop": 6980751,
     "emp": 2934920,
     "avh": 2085,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1951,
     "country": "Austria",
     "pop": 6981104,
     "emp": 2990606,
     "avh": 2083,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1952,
     "country": "Austria",
     "pop": 6973375,
     "emp": 2923521,
     "avh": 2080,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1953,
     "country": "Austria",
     "pop": 6978117,
     "emp": 2891931,
     "avh": 2077,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1954,
     "country": "Austria",
     "pop": 6985893,
     "emp": 2976327,
     "avh": 2075,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1955,
     "country": "Austria",
     "pop": 6992613,
     "emp": 3126478,
     "avh": 2072,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1956,
     "country": "Austria",
     "pop": 6998124,
     "emp": 3221801,
     "avh": 2069,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1957,
     "country": "Austria",
     "pop": 7011713,
     "emp": 3295096,
     "avh": 2067,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1958,
     "country": "Austria",
     "pop": 7033353,
     "emp": 3321739,
     "avh": 2064,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1959,
     "country": "Austria",
     "pop": 7060503,
     "emp": 3371424,
     "avh": 2061,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1960,
     "country": "Austria",
     "pop": 7093827,
     "emp": 3440428,
     "avh": 2059,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1961,
     "country": "Austria",
     "pop": 7132945,
     "emp": 3459298,
     "avh": 2046,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1962,
     "country": "Austria",
     "pop": 7176797,
     "emp": 3443099,
     "avh": 2034,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1963,
     "country": "Austria",
     "pop": 7223046,
     "emp": 3419533,
     "avh": 2021,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1964,
     "country": "Austria",
     "pop": 7271352,
     "emp": 3413850,
     "avh": 2009,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1965,
     "country": "Austria",
     "pop": 7318750,
     "emp": 3390900,
     "avh": 1996,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1966,
     "country": "Austria",
     "pop": 7370264,
     "emp": 3362745,
     "avh": 1984,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1967,
     "country": "Austria",
     "pop": 7425558,
     "emp": 3307928,
     "avh": 1972,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1968,
     "country": "Austria",
     "pop": 7464215,
     "emp": 3264507,
     "avh": 1960,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1969,
     "country": "Austria",
     "pop": 7490036,
     "emp": 3258476,
     "avh": 1948,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1970,
     "country": "Austria",
     "pop": 7516239,
     "emp": 3265043,
     "avh": 1890,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1971,
     "country": "Austria",
     "pop": 7550340,
     "emp": 3301126,
     "avh": 1885,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1972,
     "country": "Austria",
     "pop": 7581117,
     "emp": 3319701,
     "avh": 1905,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1973,
     "country": "Austria",
     "pop": 7607065,
     "emp": 3358950,
     "avh": 1900,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1974,
     "country": "Austria",
     "pop": 7626290,
     "emp": 3405431,
     "avh": 1978,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1975,
     "country": "Austria",
     "pop": 7637689,
     "emp": 3394333,
     "avh": 1903,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1976,
     "country": "Austria",
     "pop": 7640749,
     "emp": 3413128,
     "avh": 1898,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1977,
     "country": "Austria",
     "pop": 7636576,
     "emp": 3451448,
     "avh": 1904,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1978,
     "country": "Austria",
     "pop": 7627759,
     "emp": 3467476,
     "avh": 1844,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1979,
     "country": "Austria",
     "pop": 7617884,
     "emp": 3483715,
     "avh": 1876,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1980,
     "country": "Austria",
     "pop": 7609752,
     "emp": 3511729,
     "avh": 1881,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1981,
     "country": "Austria",
     "pop": 7604513,
     "emp": 3488420,
     "avh": 1819,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1982,
     "country": "Austria",
     "pop": 7602181,
     "emp": 3435217,
     "avh": 1835,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1983,
     "country": "Austria",
     "pop": 7603102,
     "emp": 3422595,
     "avh": 1829,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1984,
     "country": "Austria",
     "pop": 7607293,
     "emp": 3420871,
     "avh": 1825,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1985,
     "country": "Austria",
     "pop": 7614868,
     "emp": 3431707,
     "avh": 1821,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1986,
     "country": "Austria",
     "pop": 7625393,
     "emp": 3442780,
     "avh": 1820,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1987,
     "country": "Austria",
     "pop": 7639352,
     "emp": 3442195,
     "avh": 1808,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1988,
     "country": "Austria",
     "pop": 7658840,
     "emp": 3471370,
     "avh": 1812,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1989,
     "country": "Austria",
     "pop": 7686572,
     "emp": 3515850,
     "avh": 1825,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1990,
     "country": "Austria",
     "pop": 7723949,
     "emp": 3560341,
     "avh": 1826,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1991,
     "country": "Austria",
     "pop": 7772701,
     "emp": 3591025,
     "avh": 1836,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1992,
     "country": "Austria",
     "pop": 7830933,
     "emp": 3594428,
     "avh": 1804,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1993,
     "country": "Austria",
     "pop": 7892086,
     "emp": 3573315,
     "avh": 1802,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1994,
     "country": "Austria",
     "pop": 7947209,
     "emp": 3583720,
     "avh": 1800,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1995,
     "country": "Austria",
     "pop": 7990121,
     "emp": 3584954,
     "avh": 1774,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1996,
     "country": "Austria",
     "pop": 8017863,
     "emp": 3606508,
     "avh": 1807,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1997,
     "country": "Austria",
     "pop": 8032876,
     "emp": 3635558,
     "avh": 1815,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1998,
     "country": "Austria",
     "pop": 8041050,
     "emp": 3672077,
     "avh": 1794,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1999,
     "country": "Austria",
     "pop": 8051113,
     "emp": 3725198,
     "avh": 1797,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2000,
     "country": "Austria",
     "pop": 8069276,
     "emp": 3759931,
     "avh": 1798,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2001,
     "country": "Austria",
     "pop": 8097748,
     "emp": 3785838,
     "avh": 1785,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2002,
     "country": "Austria",
     "pop": 8134412,
     "emp": 3780693,
     "avh": 1782,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2003,
     "country": "Austria",
     "pop": 8175852,
     "emp": 3806158,
     "avh": 1773,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2004,
     "country": "Austria",
     "pop": 8216805,
     "emp": 3825345,
     "avh": 1776,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2005,
     "country": "Austria",
     "pop": 8253650,
     "emp": 3862365,
     "avh": 1752,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2006,
     "country": "Austria",
     "pop": 8285343,
     "emp": 3925628,
     "avh": 1735,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2007,
     "country": "Austria",
     "pop": 8313737,
     "emp": 3998071,
     "avh": 1724,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2008,
     "country": "Austria",
     "pop": 8341532,
     "emp": 4075037,
     "avh": 1717,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2009,
     "country": "Austria",
     "pop": 8372663,
     "emp": 4057965,
     "avh": 1673,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2010,
     "country": "Austria",
     "pop": 8409949,
     "emp": 4096951,
     "avh": 1665,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2011,
     "country": "Austria",
     "pop": 8453501,
     "emp": 4168144,
     "avh": 1671,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2012,
     "country": "Austria",
     "pop": 8502227,
     "emp": 4216424,
     "avh": 1647,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2013,
     "country": "Austria",
     "pop": 8556189,
     "emp": 4232905,
     "avh": 1632,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2014,
     "country": "Austria",
     "pop": 8615214,
     "emp": 4269143,
     "avh": 1621,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2015,
     "country": "Austria",
     "pop": 8678660,
     "emp": 4278239,
     "avh": 1605,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2016,
     "country": "Austria",
     "pop": 8747301,
     "emp": 4321228,
     "avh": 1618,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2017,
     "country": "Austria",
     "pop": 8819901,
     "emp": 4398534,
     "avh": 1608,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2018,
     "country": "Austria",
     "pop": 8891388,
     "emp": 4488481,
     "avh": 1612,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2019,
     "country": "Austria",
     "pop": 8955102,
     "emp": 4550281,
     "avh": 1611,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 1950,
     "country": "Belgium",
     "pop": 8634331,
     "emp": 3458555,
     "avh": 2096,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1951,
     "country": "Belgium",
     "pop": 8673324,
     "emp": 3455583,
     "avh": 2085,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1952,
     "country": "Belgium",
     "pop": 8725313,
     "emp": 3457593,
     "avh": 2075,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1953,
     "country": "Belgium",
     "pop": 8772754,
     "emp": 3457587,
     "avh": 2065,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1954,
     "country": "Belgium",
     "pop": 8814236,
     "emp": 3455043,
     "avh": 2055,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1955,
     "country": "Belgium",
     "pop": 8863303,
     "emp": 3455277,
     "avh": 2045,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1956,
     "country": "Belgium",
     "pop": 8918641,
     "emp": 3457733,
     "avh": 2035,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1957,
     "country": "Belgium",
     "pop": 8983869,
     "emp": 3482290,
     "avh": 2025,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1958,
     "country": "Belgium",
     "pop": 9047427,
     "emp": 3444962,
     "avh": 2015,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1959,
     "country": "Belgium",
     "pop": 9098420,
     "emp": 3416476,
     "avh": 2005,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1960,
     "country": "Belgium",
     "pop": 9113382,
     "emp": 3495060,
     "avh": 1996,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1961,
     "country": "Belgium",
     "pop": 9160455,
     "emp": 3521248,
     "avh": 1984,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1962,
     "country": "Belgium",
     "pop": 9213024,
     "emp": 3575638,
     "avh": 1972,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1963,
     "country": "Belgium",
     "pop": 9277686,
     "emp": 3600819,
     "avh": 1960,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1964,
     "country": "Belgium",
     "pop": 9361537,
     "emp": 3652187,
     "avh": 1949,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1965,
     "country": "Belgium",
     "pop": 9442590,
     "emp": 3666288,
     "avh": 1937,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1966,
     "country": "Belgium",
     "pop": 9502255,
     "emp": 3679382,
     "avh": 1926,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1967,
     "country": "Belgium",
     "pop": 9550927,
     "emp": 3663266,
     "avh": 1914,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1968,
     "country": "Belgium",
     "pop": 9584207,
     "emp": 3659238,
     "avh": 1903,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1969,
     "country": "Belgium",
     "pop": 9607094,
     "emp": 3721685,
     "avh": 1891,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1970,
     "country": "Belgium",
     "pop": 9632180,
     "emp": 3724707,
     "avh": 1880,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1971,
     "country": "Belgium",
     "pop": 9663324,
     "emp": 3749523,
     "avh": 1871,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1972,
     "country": "Belgium",
     "pop": 9692846,
     "emp": 3738751,
     "avh": 1845,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1973,
     "country": "Belgium",
     "pop": 9720761,
     "emp": 3771435,
     "avh": 1818,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1974,
     "country": "Belgium",
     "pop": 9747020,
     "emp": 3826558,
     "avh": 1788,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1975,
     "country": "Belgium",
     "pop": 9771586,
     "emp": 3770329,
     "avh": 1778,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1976,
     "country": "Belgium",
     "pop": 9794777,
     "emp": 3752914,
     "avh": 1780,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1977,
     "country": "Belgium",
     "pop": 9816696,
     "emp": 3742068,
     "avh": 1754,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1978,
     "country": "Belgium",
     "pop": 9836814,
     "emp": 3749748,
     "avh": 1735,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1979,
     "country": "Belgium",
     "pop": 9854377,
     "emp": 3787905,
     "avh": 1718,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1980,
     "country": "Belgium",
     "pop": 9868995,
     "emp": 3784775,
     "avh": 1698,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1981,
     "country": "Belgium",
     "pop": 9880592,
     "emp": 3717331,
     "avh": 1676,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1982,
     "country": "Belgium",
     "pop": 9889824,
     "emp": 3671145,
     "avh": 1661,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1983,
     "country": "Belgium",
     "pop": 9897880,
     "emp": 3626199,
     "avh": 1667,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1984,
     "country": "Belgium",
     "pop": 9906371,
     "emp": 3628385,
     "avh": 1691,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1985,
     "country": "Belgium",
     "pop": 9916578,
     "emp": 3648163,
     "avh": 1697,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1986,
     "country": "Belgium",
     "pop": 9928542,
     "emp": 3674398,
     "avh": 1677,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1987,
     "country": "Belgium",
     "pop": 9942289,
     "emp": 3703564,
     "avh": 1662,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1988,
     "country": "Belgium",
     "pop": 9959020,
     "emp": 3776189,
     "avh": 1650,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1989,
     "country": "Belgium",
     "pop": 9980176,
     "emp": 3822038,
     "avh": 1641,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1990,
     "country": "Belgium",
     "pop": 10006544,
     "emp": 3861156,
     "avh": 1655,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1991,
     "country": "Belgium",
     "pop": 10039445,
     "emp": 3872532,
     "avh": 1618,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1992,
     "country": "Belgium",
     "pop": 10078101,
     "emp": 3866686,
     "avh": 1596,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1993,
     "country": "Belgium",
     "pop": 10118674,
     "emp": 3842025,
     "avh": 1552,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1994,
     "country": "Belgium",
     "pop": 10155919,
     "emp": 3828232,
     "avh": 1552,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1995,
     "country": "Belgium",
     "pop": 10186305,
     "emp": 3886936,
     "avh": 1578,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1996,
     "country": "Belgium",
     "pop": 10208275,
     "emp": 3897966,
     "avh": 1552,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1997,
     "country": "Belgium",
     "pop": 10223789,
     "emp": 3920959,
     "avh": 1565,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1998,
     "country": "Belgium",
     "pop": 10237299,
     "emp": 3986483,
     "avh": 1576,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1999,
     "country": "Belgium",
     "pop": 10255160,
     "emp": 4039239,
     "avh": 1575,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2000,
     "country": "Belgium",
     "pop": 10282033,
     "emp": 4121242,
     "avh": 1589,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2001,
     "country": "Belgium",
     "pop": 10319019,
     "emp": 4178331,
     "avh": 1581,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2002,
     "country": "Belgium",
     "pop": 10364885,
     "emp": 4187660,
     "avh": 1593,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2003,
     "country": "Belgium",
     "pop": 10419032,
     "emp": 4188035,
     "avh": 1598,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2004,
     "country": "Belgium",
     "pop": 10480117,
     "emp": 4235822,
     "avh": 1587,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2005,
     "country": "Belgium",
     "pop": 10546886,
     "emp": 4300207,
     "avh": 1577,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2006,
     "country": "Belgium",
     "pop": 10619475,
     "emp": 4349856,
     "avh": 1591,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2007,
     "country": "Belgium",
     "pop": 10697572,
     "emp": 4422259,
     "avh": 1593,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2008,
     "country": "Belgium",
     "pop": 10778758,
     "emp": 4499446,
     "avh": 1582,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2009,
     "country": "Belgium",
     "pop": 10859940,
     "emp": 4489564,
     "avh": 1563,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2010,
     "country": "Belgium",
     "pop": 10938739,
     "emp": 4499626,
     "avh": 1573,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2011,
     "country": "Belgium",
     "pop": 11013853,
     "emp": 4542050,
     "avh": 1590,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2012,
     "country": "Belgium",
     "pop": 11085358,
     "emp": 4562634,
     "avh": 1587,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2013,
     "country": "Belgium",
     "pop": 11154009,
     "emp": 4555912,
     "avh": 1585,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2014,
     "country": "Belgium",
     "pop": 11221231,
     "emp": 4581183,
     "avh": 1581,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2015,
     "country": "Belgium",
     "pop": 11287940,
     "emp": 4622033,
     "avh": 1575,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2016,
     "country": "Belgium",
     "pop": 11354420,
     "emp": 4683881,
     "avh": 1574,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2017,
     "country": "Belgium",
     "pop": 11419748,
     "emp": 4769101,
     "avh": 1577,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2018,
     "country": "Belgium",
     "pop": 11482178,
     "emp": 4839399,
     "avh": 1583,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2019,
     "country": "Belgium",
     "pop": 11539328,
     "emp": 4921936,
     "avh": 1586,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 1970,
     "country": "Bangladesh",
     "pop": 64232482,
     "emp": 20206207,
     "avh": 2520,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1971,
     "country": "Bangladesh",
     "pop": 65531633,
     "emp": 20013914,
     "avh": 2522,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1972,
     "country": "Bangladesh",
     "pop": 66625705,
     "emp": 19833837,
     "avh": 2522,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1973,
     "country": "Bangladesh",
     "pop": 67637530,
     "emp": 19690391,
     "avh": 2523,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1974,
     "country": "Bangladesh",
     "pop": 68742233,
     "emp": 20072776,
     "avh": 2523,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1975,
     "country": "Bangladesh",
     "pop": 70066301,
     "emp": 20646995,
     "avh": 2523,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1976,
     "country": "Bangladesh",
     "pop": 71652381,
     "emp": 21295278,
     "avh": 2522,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1977,
     "country": "Bangladesh",
     "pop": 73463584,
     "emp": 21957880,
     "avh": 2521,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1978,
     "country": "Bangladesh",
     "pop": 75450032,
     "emp": 22639480,
     "avh": 2520,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1979,
     "country": "Bangladesh",
     "pop": 77529045,
     "emp": 23344276,
     "avh": 2519,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1980,
     "country": "Bangladesh",
     "pop": 79639491,
     "emp": 24077302,
     "avh": 2519,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1981,
     "country": "Bangladesh",
     "pop": 81767515,
     "emp": 24756811,
     "avh": 2519,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1982,
     "country": "Bangladesh",
     "pop": 83932127,
     "emp": 25497306,
     "avh": 2522,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1983,
     "country": "Bangladesh",
     "pop": 86142495,
     "emp": 26239114,
     "avh": 2526,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1984,
     "country": "Bangladesh",
     "pop": 88416521,
     "emp": 27065467,
     "avh": 2529,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1985,
     "country": "Bangladesh",
     "pop": 90764183,
     "emp": 27951002,
     "avh": 2485,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1986,
     "country": "Bangladesh",
     "pop": 93187603,
     "emp": 28899253,
     "avh": 2442,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1987,
     "country": "Bangladesh",
     "pop": 95671163,
     "emp": 29907039,
     "avh": 2400,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1988,
     "country": "Bangladesh",
     "pop": 98186350,
     "emp": 30968820,
     "avh": 2360,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1989,
     "country": "Bangladesh",
     "pop": 100695497,
     "emp": 32118541,
     "avh": 2319,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1990,
     "country": "Bangladesh",
     "pop": 103171956,
     "emp": 32147815,
     "avh": 2413,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1991,
     "country": "Bangladesh",
     "pop": 105599127,
     "emp": 32125583,
     "avh": 2507,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1992,
     "country": "Bangladesh",
     "pop": 107983704,
     "emp": 33067626,
     "avh": 2512,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1993,
     "country": "Bangladesh",
     "pop": 110350639,
     "emp": 34044322,
     "avh": 2517,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1994,
     "country": "Bangladesh",
     "pop": 112737683,
     "emp": 35082660,
     "avh": 2522,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1995,
     "country": "Bangladesh",
     "pop": 115169930,
     "emp": 36174591,
     "avh": 2528,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1996,
     "country": "Bangladesh",
     "pop": 117649932,
     "emp": 37224483,
     "avh": 2535,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1997,
     "country": "Bangladesh",
     "pop": 120160564,
     "emp": 38277328,
     "avh": 2541,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1998,
     "country": "Bangladesh",
     "pop": 122682815,
     "emp": 39359836,
     "avh": 2547,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1999,
     "country": "Bangladesh",
     "pop": 125189651,
     "emp": 40441699,
     "avh": 2554,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2000,
     "country": "Bangladesh",
     "pop": 127657854,
     "emp": 41539543,
     "avh": 2560,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2001,
     "country": "Bangladesh",
     "pop": 130088702,
     "emp": 42479740,
     "avh": 2561,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2002,
     "country": "Bangladesh",
     "pop": 132478086,
     "emp": 43403026,
     "avh": 2563,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2003,
     "country": "Bangladesh",
     "pop": 134791603,
     "emp": 44324001,
     "avh": 2565,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2004,
     "country": "Bangladesh",
     "pop": 136986432,
     "emp": 45317592,
     "avh": 2576,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2005,
     "country": "Bangladesh",
     "pop": 139035505,
     "emp": 46279644,
     "avh": 2587,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2006,
     "country": "Bangladesh",
     "pop": 140921167,
     "emp": 47357929,
     "avh": 2597,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2007,
     "country": "Bangladesh",
     "pop": 142660376,
     "emp": 48953212,
     "avh": 2591,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2008,
     "country": "Bangladesh",
     "pop": 144304167,
     "emp": 50475635,
     "avh": 2586,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2009,
     "country": "Bangladesh",
     "pop": 145924797,
     "emp": 51794586,
     "avh": 2581,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2010,
     "country": "Bangladesh",
     "pop": 147575430,
     "emp": 54435997,
     "avh": 2577,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2011,
     "country": "Bangladesh",
     "pop": 149273139,
     "emp": 56097381,
     "avh": 2491,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2012,
     "country": "Bangladesh",
     "pop": 151005739,
     "emp": 57751247,
     "avh": 2405,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2013,
     "country": "Bangladesh",
     "pop": 152761418,
     "emp": 59399421,
     "avh": 2319,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2014,
     "country": "Bangladesh",
     "pop": 154517382,
     "emp": 59445442,
     "avh": 2366,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2015,
     "country": "Bangladesh",
     "pop": 156256276,
     "emp": 59489383,
     "avh": 2418,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2016,
     "country": "Bangladesh",
     "pop": 157977153,
     "emp": 59529796,
     "avh": 2473,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2017,
     "country": "Bangladesh",
     "pop": 159685424,
     "emp": 63028774,
     "avh": 2418,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2018,
     "country": "Bangladesh",
     "pop": 161376708,
     "emp": 64341400,
     "avh": 2418,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2019,
     "country": "Bangladesh",
     "pop": 163046161,
     "emp": 65534065,
     "avh": 2418,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 1995,
     "country": "Bulgaria",
     "pop": 8379308,
     "emp": 3197725,
     "avh": 1710,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 1996,
     "country": "Bulgaria",
     "pop": 8291970,
     "emp": 3176307,
     "avh": 1708,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 1997,
     "country": "Bulgaria",
     "pop": 8211814,
     "emp": 3157399,
     "avh": 1706,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 1998,
     "country": "Bulgaria",
     "pop": 8137670,
     "emp": 3152499,
     "avh": 1649,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 1999,
     "country": "Bulgaria",
     "pop": 8066998,
     "emp": 3087800,
     "avh": 1669,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2000,
     "country": "Bulgaria",
     "pop": 7997957,
     "emp": 3038819,
     "avh": 1640,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2001,
     "country": "Bulgaria",
     "pop": 7930703,
     "emp": 2915464,
     "avh": 1651,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2002,
     "country": "Bulgaria",
     "pop": 7866239,
     "emp": 2962754,
     "avh": 1651,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2003,
     "country": "Bulgaria",
     "pop": 7804312,
     "emp": 3042628,
     "avh": 1640,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2004,
     "country": "Bulgaria",
     "pop": 7744632,
     "emp": 3141968,
     "avh": 1663,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2005,
     "country": "Bulgaria",
     "pop": 7686962,
     "emp": 3154664,
     "avh": 1658,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2006,
     "country": "Bulgaria",
     "pop": 7631012,
     "emp": 3290185,
     "avh": 1654,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2007,
     "country": "Bulgaria",
     "pop": 7576672,
     "emp": 3441048,
     "avh": 1654,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2008,
     "country": "Bulgaria",
     "pop": 7524087,
     "emp": 3555411,
     "avh": 1693,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2009,
     "country": "Bulgaria",
     "pop": 7473513,
     "emp": 3442105,
     "avh": 1646,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2010,
     "country": "Bulgaria",
     "pop": 7425008,
     "emp": 3253475,
     "avh": 1644,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2011,
     "country": "Bulgaria",
     "pop": 7378650,
     "emp": 3136996,
     "avh": 1643,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2012,
     "country": "Bulgaria",
     "pop": 7334003,
     "emp": 3103988,
     "avh": 1644,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2013,
     "country": "Bulgaria",
     "pop": 7290088,
     "emp": 3104941,
     "avh": 1644,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2014,
     "country": "Bulgaria",
     "pop": 7245646,
     "emp": 3154135,
     "avh": 1644,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2015,
     "country": "Bulgaria",
     "pop": 7199741,
     "emp": 3207561,
     "avh": 1644,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2016,
     "country": "Bulgaria",
     "pop": 7151953,
     "emp": 3191586,
     "avh": 1643,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2017,
     "country": "Bulgaria",
     "pop": 7102444,
     "emp": 3332821,
     "avh": 1643,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2018,
     "country": "Bulgaria",
     "pop": 7051608,
     "emp": 3335360,
     "avh": 1644,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2019,
     "country": "Bulgaria",
     "pop": 7000119,
     "emp": 3420418,
     "avh": 1645,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 1950,
     "country": "Brazil",
     "pop": 53124132,
     "emp": 16988243,
     "avh": 2042,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1951,
     "country": "Brazil",
     "pop": 54667327,
     "emp": 17461807,
     "avh": 2051,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1952,
     "country": "Brazil",
     "pop": 56264761,
     "emp": 17952207,
     "avh": 2060,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1953,
     "country": "Brazil",
     "pop": 57918631,
     "emp": 18460180,
     "avh": 2069,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1954,
     "country": "Brazil",
     "pop": 59631212,
     "emp": 18986501,
     "avh": 2078,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1955,
     "country": "Brazil",
     "pop": 61404888,
     "emp": 19531988,
     "avh": 2087,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1956,
     "country": "Brazil",
     "pop": 63252245,
     "emp": 20097494,
     "avh": 2096,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1957,
     "country": "Brazil",
     "pop": 65159970,
     "emp": 20683923,
     "avh": 2105,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1958,
     "country": "Brazil",
     "pop": 67130181,
     "emp": 21292219,
     "avh": 2115,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1959,
     "country": "Brazil",
     "pop": 69165084,
     "emp": 21923377,
     "avh": 2124,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1960,
     "country": "Brazil",
     "pop": 71266944,
     "emp": 22578441,
     "avh": 2134,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1961,
     "country": "Brazil",
     "pop": 73392276,
     "emp": 23113716,
     "avh": 2135,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1962,
     "country": "Brazil",
     "pop": 75585597,
     "emp": 23671733,
     "avh": 2136,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1963,
     "country": "Brazil",
     "pop": 77849214,
     "emp": 24253705,
     "avh": 2137,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1964,
     "country": "Brazil",
     "pop": 80185529,
     "emp": 24860933,
     "avh": 2138,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1965,
     "country": "Brazil",
     "pop": 82597023,
     "emp": 25494775,
     "avh": 2139,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1966,
     "country": "Brazil",
     "pop": 85046846,
     "emp": 26156688,
     "avh": 2140,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1967,
     "country": "Brazil",
     "pop": 87524350,
     "emp": 26848209,
     "avh": 2141,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1968,
     "country": "Brazil",
     "pop": 90028580,
     "emp": 27570980,
     "avh": 2142,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1969,
     "country": "Brazil",
     "pop": 92558549,
     "emp": 28326738,
     "avh": 2143,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1970,
     "country": "Brazil",
     "pop": 95113265,
     "emp": 29117330,
     "avh": 2145,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1971,
     "country": "Brazil",
     "pop": 97482920,
     "emp": 30824386,
     "avh": 2128,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1972,
     "country": "Brazil",
     "pop": 99859383,
     "emp": 32531444,
     "avh": 2112,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1973,
     "country": "Brazil",
     "pop": 102259497,
     "emp": 36504718,
     "avh": 2096,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1974,
     "country": "Brazil",
     "pop": 104706198,
     "emp": 37401508,
     "avh": 2079,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1975,
     "country": "Brazil",
     "pop": 107216205,
     "emp": 38370906,
     "avh": 2063,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1976,
     "country": "Brazil",
     "pop": 109790938,
     "emp": 39418231,
     "avh": 2047,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1977,
     "country": "Brazil",
     "pop": 112425392,
     "emp": 43251895,
     "avh": 2031,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1978,
     "country": "Brazil",
     "pop": 115121153,
     "emp": 44651515,
     "avh": 2016,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1979,
     "country": "Brazil",
     "pop": 117878411,
     "emp": 43831123,
     "avh": 2000,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1980,
     "country": "Brazil",
     "pop": 120694009,
     "emp": 43310600,
     "avh": 1985,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1981,
     "country": "Brazil",
     "pop": 123570327,
     "emp": 45122348,
     "avh": 1974,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1982,
     "country": "Brazil",
     "pop": 126498314,
     "emp": 47564235,
     "avh": 1963,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1983,
     "country": "Brazil",
     "pop": 129448819,
     "emp": 48100803,
     "avh": 1952,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1984,
     "country": "Brazil",
     "pop": 132383568,
     "emp": 49829929,
     "avh": 1941,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1985,
     "country": "Brazil",
     "pop": 135274080,
     "emp": 53524902,
     "avh": 1931,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1986,
     "country": "Brazil",
     "pop": 138108912,
     "emp": 55017719,
     "avh": 1920,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1987,
     "country": "Brazil",
     "pop": 140891602,
     "emp": 56976795,
     "avh": 1909,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1988,
     "country": "Brazil",
     "pop": 143627503,
     "emp": 58944198,
     "avh": 1899,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1989,
     "country": "Brazil",
     "pop": 146328304,
     "emp": 60164524,
     "avh": 1889,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1990,
     "country": "Brazil",
     "pop": 149003223,
     "emp": 61631931,
     "avh": 1879,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1991,
     "country": "Brazil",
     "pop": 151648011,
     "emp": 61448883,
     "avh": 1868,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1992,
     "country": "Brazil",
     "pop": 154259380,
     "emp": 61269615,
     "avh": 1858,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1993,
     "country": "Brazil",
     "pop": 156849078,
     "emp": 61982177,
     "avh": 1858,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1994,
     "country": "Brazil",
     "pop": 159432716,
     "emp": 62458423,
     "avh": 1860,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1995,
     "country": "Brazil",
     "pop": 162019896,
     "emp": 62932060,
     "avh": 1855,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1996,
     "country": "Brazil",
     "pop": 164614688,
     "emp": 61783889,
     "avh": 1850,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1997,
     "country": "Brazil",
     "pop": 167209040,
     "emp": 62795871,
     "avh": 1845,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1998,
     "country": "Brazil",
     "pop": 169785250,
     "emp": 62611366,
     "avh": 1841,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1999,
     "country": "Brazil",
     "pop": 172318675,
     "emp": 65889602,
     "avh": 1813,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2000,
     "country": "Brazil",
     "pop": 174790340,
     "emp": 68130455,
     "avh": 1837,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2001,
     "country": "Brazil",
     "pop": 177196054,
     "emp": 68456390,
     "avh": 1828,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2002,
     "country": "Brazil",
     "pop": 179537520,
     "emp": 71253646,
     "avh": 1818,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2003,
     "country": "Brazil",
     "pop": 181809246,
     "emp": 72304580,
     "avh": 1811,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2004,
     "country": "Brazil",
     "pop": 184006481,
     "emp": 76159278,
     "avh": 1803,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2005,
     "country": "Brazil",
     "pop": 186127103,
     "emp": 78414779,
     "avh": 1783,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2006,
     "country": "Brazil",
     "pop": 188167356,
     "emp": 80879119,
     "avh": 1779,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2007,
     "country": "Brazil",
     "pop": 190130443,
     "emp": 81353782,
     "avh": 1774,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2008,
     "country": "Brazil",
     "pop": 192030362,
     "emp": 82759956,
     "avh": 1771,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2009,
     "country": "Brazil",
     "pop": 193886508,
     "emp": 83151428,
     "avh": 1764,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2010,
     "country": "Brazil",
     "pop": 195713635,
     "emp": 86353828,
     "avh": 1761,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2011,
     "country": "Brazil",
     "pop": 197514536,
     "emp": 88628929,
     "avh": 1769,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2012,
     "country": "Brazil",
     "pop": 199287299,
     "emp": 89506271,
     "avh": 1765,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2013,
     "country": "Brazil",
     "pop": 201035912,
     "emp": 91148193,
     "avh": 1751,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2014,
     "country": "Brazil",
     "pop": 202763739,
     "emp": 92833587,
     "avh": 1738,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2015,
     "country": "Brazil",
     "pop": 204471769,
     "emp": 92447227,
     "avh": 1722,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2016,
     "country": "Brazil",
     "pop": 206163053,
     "emp": 90626472,
     "avh": 1714,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2017,
     "country": "Brazil",
     "pop": 207833823,
     "emp": 90501388,
     "avh": 1709,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2018,
     "country": "Brazil",
     "pop": 209469323,
     "emp": 92090942,
     "avh": 1706,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2019,
     "country": "Brazil",
     "pop": 211049527,
     "emp": 93956825,
     "avh": 1707,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 1950,
     "country": "Canada",
     "pop": 13769420,
     "emp": 6123065,
     "avh": 2209,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1951,
     "country": "Canada",
     "pop": 14083159,
     "emp": 6280704,
     "avh": 2194,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1952,
     "country": "Canada",
     "pop": 14530211,
     "emp": 6330485,
     "avh": 2181,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1953,
     "country": "Canada",
     "pop": 14921131,
     "emp": 6363673,
     "avh": 2180,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1954,
     "country": "Canada",
     "pop": 15366179,
     "emp": 6313892,
     "avh": 2172,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1955,
     "country": "Canada",
     "pop": 15773137,
     "emp": 6388563,
     "avh": 2154,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1956,
     "country": "Canada",
     "pop": 16161051,
     "emp": 6662359,
     "avh": 2142,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1957,
     "country": "Canada",
     "pop": 16716359,
     "emp": 6745328,
     "avh": 2122,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1958,
     "country": "Canada",
     "pop": 17160404,
     "emp": 6546204,
     "avh": 2107,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1959,
     "country": "Canada",
     "pop": 17563352,
     "emp": 6654062,
     "avh": 2104,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1960,
     "country": "Canada",
     "pop": 17951266,
     "emp": 6629171,
     "avh": 2090,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1961,
     "country": "Canada",
     "pop": 18313118,
     "emp": 6645765,
     "avh": 2066,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1962,
     "country": "Canada",
     "pop": 18657930,
     "emp": 6811703,
     "avh": 2065,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1963,
     "country": "Canada",
     "pop": 19008755,
     "emp": 6961044,
     "avh": 2050,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1964,
     "country": "Canada",
     "pop": 19370609,
     "emp": 7201654,
     "avh": 2039,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1965,
     "country": "Canada",
     "pop": 19724440,
     "emp": 7508636,
     "avh": 2021,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1966,
     "country": "Canada",
     "pop": 20095314,
     "emp": 7765839,
     "avh": 1995,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1967,
     "country": "Canada",
     "pop": 20460172,
     "emp": 7906885,
     "avh": 1985,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1968,
     "country": "Canada",
     "pop": 20777922,
     "emp": 7915182,
     "avh": 1961,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1969,
     "country": "Canada",
     "pop": 21077626,
     "emp": 8164087,
     "avh": 1942,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1970,
     "country": "Canada",
     "pop": 21374326,
     "emp": 8155790,
     "avh": 1925,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1971,
     "country": "Canada",
     "pop": 21723460,
     "emp": 8326539,
     "avh": 1912,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1972,
     "country": "Canada",
     "pop": 22072194,
     "emp": 8638175,
     "avh": 1904,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1973,
     "country": "Canada",
     "pop": 22415322,
     "emp": 9093350,
     "avh": 1898,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1974,
     "country": "Canada",
     "pop": 22745903,
     "emp": 9562041,
     "avh": 1891,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1975,
     "country": "Canada",
     "pop": 23059265,
     "emp": 9654721,
     "avh": 1872,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1976,
     "country": "Canada",
     "pop": 23354586,
     "emp": 9784326,
     "avh": 1862,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1977,
     "country": "Canada",
     "pop": 23634387,
     "emp": 9997224,
     "avh": 1834,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1978,
     "country": "Canada",
     "pop": 23901717,
     "emp": 10294616,
     "avh": 1836,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1979,
     "country": "Canada",
     "pop": 24161124,
     "emp": 10760994,
     "avh": 1841,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1980,
     "country": "Canada",
     "pop": 24416886,
     "emp": 11080690,
     "avh": 1827,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1981,
     "country": "Canada",
     "pop": 24668167,
     "emp": 11382224,
     "avh": 1812,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1982,
     "country": "Canada",
     "pop": 24916542,
     "emp": 10984603,
     "avh": 1788,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1983,
     "country": "Canada",
     "pop": 25171436,
     "emp": 11076824,
     "avh": 1780,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1984,
     "country": "Canada",
     "pop": 25444884,
     "emp": 11369482,
     "avh": 1791,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1985,
     "country": "Canada",
     "pop": 25744810,
     "emp": 11795503,
     "avh": 1794,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1986,
     "country": "Canada",
     "pop": 26075498,
     "emp": 12168763,
     "avh": 1798,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1987,
     "country": "Canada",
     "pop": 26432893,
     "emp": 12543771,
     "avh": 1807,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1988,
     "country": "Canada",
     "pop": 26806125,
     "emp": 12978823,
     "avh": 1807,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1989,
     "country": "Canada",
     "pop": 27179502,
     "emp": 13236955,
     "avh": 1802,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1990,
     "country": "Canada",
     "pop": 27541319,
     "emp": 13290200,
     "avh": 1795,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1991,
     "country": "Canada",
     "pop": 27888810,
     "emp": 13058436,
     "avh": 1774,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1992,
     "country": "Canada",
     "pop": 28224409,
     "emp": 12930480,
     "avh": 1772,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1993,
     "country": "Canada",
     "pop": 28547967,
     "emp": 13034626,
     "avh": 1771,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1994,
     "country": "Canada",
     "pop": 28860734,
     "emp": 13291092,
     "avh": 1784,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1995,
     "country": "Canada",
     "pop": 29164152,
     "emp": 13502547,
     "avh": 1785,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1996,
     "country": "Canada",
     "pop": 29457817,
     "emp": 13636177,
     "avh": 1798,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1997,
     "country": "Canada",
     "pop": 29742382,
     "emp": 13899702,
     "avh": 1796,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1998,
     "country": "Canada",
     "pop": 30022073,
     "emp": 14223676,
     "avh": 1792,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1999,
     "country": "Canada",
     "pop": 30302515,
     "emp": 14615461,
     "avh": 1791,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2000,
     "country": "Canada",
     "pop": 30588383,
     "emp": 14952766,
     "avh": 1786,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2001,
     "country": "Canada",
     "pop": 30880073,
     "emp": 15074831,
     "avh": 1773,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2002,
     "country": "Canada",
     "pop": 31178263,
     "emp": 15427290,
     "avh": 1754,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2003,
     "country": "Canada",
     "pop": 31488048,
     "emp": 15770746,
     "avh": 1743,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2004,
     "country": "Canada",
     "pop": 31815494,
     "emp": 16045999,
     "avh": 1753,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2005,
     "country": "Canada",
     "pop": 32164309,
     "emp": 16313701,
     "avh": 1744,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2006,
     "country": "Canada",
     "pop": 32536987,
     "emp": 16594200,
     "avh": 1743,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2007,
     "country": "Canada",
     "pop": 32930794,
     "emp": 16983242,
     "avh": 1742,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2008,
     "country": "Canada",
     "pop": 33337638,
     "emp": 17258270,
     "avh": 1740,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2009,
     "country": "Canada",
     "pop": 33746093,
     "emp": 16971767,
     "avh": 1710,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2010,
     "country": "Canada",
     "pop": 34147564,
     "emp": 17295398,
     "avh": 1714,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2011,
     "country": "Canada",
     "pop": 34539159,
     "emp": 17594886,
     "avh": 1712,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2012,
     "country": "Canada",
     "pop": 34922030,
     "emp": 17793714,
     "avh": 1720,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2013,
     "country": "Canada",
     "pop": 35296528,
     "emp": 18038745,
     "avh": 1714,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2014,
     "country": "Canada",
     "pop": 35664337,
     "emp": 18148748,
     "avh": 1709,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2015,
     "country": "Canada",
     "pop": 36026676,
     "emp": 18355836,
     "avh": 1710,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2016,
     "country": "Canada",
     "pop": 36382944,
     "emp": 18541105,
     "avh": 1705,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2017,
     "country": "Canada",
     "pop": 36732095,
     "emp": 18851814,
     "avh": 1693,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2018,
     "country": "Canada",
     "pop": 37074562,
     "emp": 18966228,
     "avh": 1707,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2019,
     "country": "Canada",
     "pop": 37411047,
     "emp": 19298662,
     "avh": 1689,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 1950,
     "country": "Switzerland",
     "pop": 4607004,
     "emp": 2326811,
     "avh": 2039,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1951,
     "country": "Switzerland",
     "pop": 4660985,
     "emp": 2411276,
     "avh": 2032,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1952,
     "country": "Switzerland",
     "pop": 4725762,
     "emp": 2456734,
     "avh": 2024,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1953,
     "country": "Switzerland",
     "pop": 4787594,
     "emp": 2474272,
     "avh": 2017,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1954,
     "country": "Switzerland",
     "pop": 4837649,
     "emp": 2501889,
     "avh": 2009,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1955,
     "country": "Switzerland",
     "pop": 4887704,
     "emp": 2552790,
     "avh": 2002,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1956,
     "country": "Switzerland",
     "pop": 4951499,
     "emp": 2626873,
     "avh": 1994,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1957,
     "country": "Switzerland",
     "pop": 5030998,
     "emp": 2686744,
     "avh": 1987,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1958,
     "country": "Switzerland",
     "pop": 5102645,
     "emp": 2664469,
     "avh": 1979,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1959,
     "country": "Switzerland",
     "pop": 5161533,
     "emp": 2664771,
     "avh": 1972,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1960,
     "country": "Switzerland",
     "pop": 5262624,
     "emp": 2738652,
     "avh": 1964,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1961,
     "country": "Switzerland",
     "pop": 5409844,
     "emp": 2866660,
     "avh": 1967,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1962,
     "country": "Switzerland",
     "pop": 5560990,
     "emp": 2977129,
     "avh": 1970,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1963,
     "country": "Switzerland",
     "pop": 5681710,
     "emp": 3022890,
     "avh": 1973,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1964,
     "country": "Switzerland",
     "pop": 5777894,
     "emp": 3070162,
     "avh": 1976,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1965,
     "country": "Switzerland",
     "pop": 5832856,
     "emp": 3049298,
     "avh": 1978,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1966,
     "country": "Switzerland",
     "pop": 5884874,
     "emp": 3037605,
     "avh": 1981,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1967,
     "country": "Switzerland",
     "pop": 5950632,
     "emp": 3053732,
     "avh": 1984,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1968,
     "country": "Switzerland",
     "pop": 6018353,
     "emp": 3072177,
     "avh": 1987,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1969,
     "country": "Switzerland",
     "pop": 6096871,
     "emp": 3122977,
     "avh": 1990,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1970,
     "country": "Switzerland",
     "pop": 6150852,
     "emp": 3169011,
     "avh": 1993,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1971,
     "country": "Switzerland",
     "pop": 6202949,
     "emp": 3214117,
     "avh": 1982,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1972,
     "country": "Switzerland",
     "pop": 6251288,
     "emp": 3255565,
     "avh": 1958,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1973,
     "country": "Switzerland",
     "pop": 6292533,
     "emp": 3289324,
     "avh": 1931,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1974,
     "country": "Switzerland",
     "pop": 6322013,
     "emp": 3292544,
     "avh": 1902,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1975,
     "country": "Switzerland",
     "pop": 6337025,
     "emp": 3170340,
     "avh": 1894,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1976,
     "country": "Switzerland",
     "pop": 6335974,
     "emp": 3111644,
     "avh": 1890,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1977,
     "country": "Switzerland",
     "pop": 6321815,
     "emp": 3127920,
     "avh": 1863,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1978,
     "country": "Switzerland",
     "pop": 6302044,
     "emp": 3141221,
     "avh": 1849,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1979,
     "country": "Switzerland",
     "pop": 6286915,
     "emp": 3158085,
     "avh": 1836,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1980,
     "country": "Switzerland",
     "pop": 6283832,
     "emp": 3211817,
     "avh": 1821,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1981,
     "country": "Switzerland",
     "pop": 6295925,
     "emp": 3272851,
     "avh": 1802,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1982,
     "country": "Switzerland",
     "pop": 6321409,
     "emp": 3280789,
     "avh": 1791,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1983,
     "country": "Switzerland",
     "pop": 6356745,
     "emp": 3282408,
     "avh": 1776,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1984,
     "country": "Switzerland",
     "pop": 6396134,
     "emp": 3320336,
     "avh": 1757,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1985,
     "country": "Switzerland",
     "pop": 6435424,
     "emp": 3390088,
     "avh": 1751,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1986,
     "country": "Switzerland",
     "pop": 6473044,
     "emp": 3466601,
     "avh": 1742,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1987,
     "country": "Switzerland",
     "pop": 6510597,
     "emp": 3547481,
     "avh": 1741,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1988,
     "country": "Switzerland",
     "pop": 6550725,
     "emp": 3632669,
     "avh": 1740,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1989,
     "country": "Switzerland",
     "pop": 6597370,
     "emp": 3723863,
     "avh": 1725,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1990,
     "country": "Switzerland",
     "pop": 6652868,
     "emp": 3832724,
     "avh": 1716,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1991,
     "country": "Switzerland",
     "pop": 6718828,
     "emp": 3892463,
     "avh": 1713,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1992,
     "country": "Switzerland",
     "pop": 6792906,
     "emp": 3856037,
     "avh": 1723,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1993,
     "country": "Switzerland",
     "pop": 6868931,
     "emp": 3835206,
     "avh": 1719,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1994,
     "country": "Switzerland",
     "pop": 6938415,
     "emp": 3821989,
     "avh": 1741,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1995,
     "country": "Switzerland",
     "pop": 6995521,
     "emp": 3821544,
     "avh": 1720,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1996,
     "country": "Switzerland",
     "pop": 7038033,
     "emp": 3817150,
     "avh": 1696,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1997,
     "country": "Switzerland",
     "pop": 7068508,
     "emp": 3818881,
     "avh": 1687,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1998,
     "country": "Switzerland",
     "pop": 7091770,
     "emp": 3870784,
     "avh": 1695,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1999,
     "country": "Switzerland",
     "pop": 7115027,
     "emp": 3896463,
     "avh": 1717,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2000,
     "country": "Switzerland",
     "pop": 7143761,
     "emp": 3928282,
     "avh": 1712,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2001,
     "country": "Switzerland",
     "pop": 7179169,
     "emp": 3988105,
     "avh": 1672,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2002,
     "country": "Switzerland",
     "pop": 7220377,
     "emp": 4009218,
     "avh": 1651,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2003,
     "country": "Switzerland",
     "pop": 7268359,
     "emp": 3991737,
     "avh": 1664,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2004,
     "country": "Switzerland",
     "pop": 7323737,
     "emp": 4005636,
     "avh": 1694,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2005,
     "country": "Switzerland",
     "pop": 7386816,
     "emp": 4043704,
     "avh": 1689,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2006,
     "country": "Switzerland",
     "pop": 7457958,
     "emp": 4145472,
     "avh": 1679,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2007,
     "country": "Switzerland",
     "pop": 7536982,
     "emp": 4259325,
     "avh": 1668,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2008,
     "country": "Switzerland",
     "pop": 7622821,
     "emp": 4355261,
     "avh": 1659,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2009,
     "country": "Switzerland",
     "pop": 7713898,
     "emp": 4372973,
     "avh": 1650,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2010,
     "country": "Switzerland",
     "pop": 7808675,
     "emp": 4389478,
     "avh": 1624,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2011,
     "country": "Switzerland",
     "pop": 7906992,
     "emp": 4509389,
     "avh": 1619,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2012,
     "country": "Switzerland",
     "pop": 8008012,
     "emp": 4597781,
     "avh": 1603,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2013,
     "country": "Switzerland",
     "pop": 8108878,
     "emp": 4660590,
     "avh": 1582,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2014,
     "country": "Switzerland",
     "pop": 8206002,
     "emp": 4746589,
     "avh": 1575,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2015,
     "country": "Switzerland",
     "pop": 8296775,
     "emp": 4816497,
     "avh": 1589,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2016,
     "country": "Switzerland",
     "pop": 8379917,
     "emp": 4878805,
     "avh": 1590,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2017,
     "country": "Switzerland",
     "pop": 8455804,
     "emp": 4921966,
     "avh": 1569,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2018,
     "country": "Switzerland",
     "pop": 8525611,
     "emp": 4971501,
     "avh": 1561,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2019,
     "country": "Switzerland",
     "pop": 8591365,
     "emp": 5011204,
     "avh": 1556,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 1951,
     "country": "Chile",
     "pop": 6528592,
     "emp": 2097860,
     "avh": 2527,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1952,
     "country": "Chile",
     "pop": 6659840,
     "emp": 2120328,
     "avh": 2514,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1953,
     "country": "Chile",
     "pop": 6780091,
     "emp": 2143036,
     "avh": 2500,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1954,
     "country": "Chile",
     "pop": 6904737,
     "emp": 2165988,
     "avh": 2487,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1955,
     "country": "Chile",
     "pop": 7041671,
     "emp": 2189809,
     "avh": 2474,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1956,
     "country": "Chile",
     "pop": 7193687,
     "emp": 2215863,
     "avh": 2460,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1957,
     "country": "Chile",
     "pop": 7360332,
     "emp": 2242227,
     "avh": 2447,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1958,
     "country": "Chile",
     "pop": 7539271,
     "emp": 2268905,
     "avh": 2434,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1959,
     "country": "Chile",
     "pop": 7727298,
     "emp": 2295901,
     "avh": 2421,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1960,
     "country": "Chile",
     "pop": 7921014,
     "emp": 2324033,
     "avh": 2408,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1961,
     "country": "Chile",
     "pop": 8117297,
     "emp": 2359631,
     "avh": 2389,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1962,
     "country": "Chile",
     "pop": 8313558,
     "emp": 2395774,
     "avh": 2370,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1963,
     "country": "Chile",
     "pop": 8507884,
     "emp": 2432470,
     "avh": 2327,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1964,
     "country": "Chile",
     "pop": 8699060,
     "emp": 2469728,
     "avh": 2322,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1965,
     "country": "Chile",
     "pop": 8886530,
     "emp": 2509014,
     "avh": 2336,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1966,
     "country": "Chile",
     "pop": 9070323,
     "emp": 2549993,
     "avh": 2355,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1967,
     "country": "Chile",
     "pop": 9250930,
     "emp": 2591640,
     "avh": 2179,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1968,
     "country": "Chile",
     "pop": 9429198,
     "emp": 2636072,
     "avh": 2260,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1969,
     "country": "Chile",
     "pop": 9606200,
     "emp": 2675562,
     "avh": 2289,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1970,
     "country": "Chile",
     "pop": 9783134,
     "emp": 2692786,
     "avh": 2160,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1971,
     "country": "Chile",
     "pop": 9942727,
     "emp": 2796381,
     "avh": 2255,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1972,
     "country": "Chile",
     "pop": 10103674,
     "emp": 2906124,
     "avh": 2270,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1973,
     "country": "Chile",
     "pop": 10265829,
     "emp": 2939574,
     "avh": 2246,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1974,
     "country": "Chile",
     "pop": 10428798,
     "emp": 2856506,
     "avh": 2227,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1975,
     "country": "Chile",
     "pop": 10592307,
     "emp": 2748097,
     "avh": 2270,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1976,
     "country": "Chile",
     "pop": 10756878,
     "emp": 2789627,
     "avh": 2284,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1977,
     "country": "Chile",
     "pop": 10922779,
     "emp": 2911798,
     "avh": 2255,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1978,
     "country": "Chile",
     "pop": 11089165,
     "emp": 2935630,
     "avh": 2279,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1979,
     "country": "Chile",
     "pop": 11254877,
     "emp": 2990487,
     "avh": 2303,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1980,
     "country": "Chile",
     "pop": 11419348,
     "emp": 3161922,
     "avh": 2317,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1981,
     "country": "Chile",
     "pop": 11582014,
     "emp": 3222627,
     "avh": 2360,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1982,
     "country": "Chile",
     "pop": 11743911,
     "emp": 3000592,
     "avh": 2308,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1983,
     "country": "Chile",
     "pop": 11907960,
     "emp": 3197053,
     "avh": 2265,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1984,
     "country": "Chile",
     "pop": 12078135,
     "emp": 3339097,
     "avh": 2298,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1985,
     "country": "Chile",
     "pop": 12257236,
     "emp": 3542331,
     "avh": 2298,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1986,
     "country": "Chile",
     "pop": 12445823,
     "emp": 3729358,
     "avh": 2332,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1987,
     "country": "Chile",
     "pop": 12642924,
     "emp": 3872205,
     "avh": 2351,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1988,
     "country": "Chile",
     "pop": 12847708,
     "emp": 4019821,
     "avh": 2360,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1989,
     "country": "Chile",
     "pop": 13058758,
     "emp": 4203723,
     "avh": 2370,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1990,
     "country": "Chile",
     "pop": 13274623,
     "emp": 4322589,
     "avh": 2408,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1991,
     "country": "Chile",
     "pop": 13495258,
     "emp": 4416958,
     "avh": 2370,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1992,
     "country": "Chile",
     "pop": 13719819,
     "emp": 4621666,
     "avh": 2365,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1993,
     "country": "Chile",
     "pop": 13944937,
     "emp": 4694174,
     "avh": 2370,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1994,
     "country": "Chile",
     "pop": 14166340,
     "emp": 4731424,
     "avh": 2351,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1995,
     "country": "Chile",
     "pop": 14380866,
     "emp": 4920063,
     "avh": 2313,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1996,
     "country": "Chile",
     "pop": 14587370,
     "emp": 5114425,
     "avh": 2313,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1997,
     "country": "Chile",
     "pop": 14786220,
     "emp": 5265700,
     "avh": 2256,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1998,
     "country": "Chile",
     "pop": 14977733,
     "emp": 5385845,
     "avh": 2299,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1999,
     "country": "Chile",
     "pop": 15162800,
     "emp": 5366337,
     "avh": 2277,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2000,
     "country": "Chile",
     "pop": 15342353,
     "emp": 5536605,
     "avh": 2263,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2001,
     "country": "Chile",
     "pop": 15516113,
     "emp": 5619427,
     "avh": 2242,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2002,
     "country": "Chile",
     "pop": 15684409,
     "emp": 5736023,
     "avh": 2250,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2003,
     "country": "Chile",
     "pop": 15849652,
     "emp": 5895637,
     "avh": 2235,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2004,
     "country": "Chile",
     "pop": 16014971,
     "emp": 6012093,
     "avh": 2232,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2005,
     "country": "Chile",
     "pop": 16182721,
     "emp": 6230428,
     "avh": 2157,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2006,
     "country": "Chile",
     "pop": 16354504,
     "emp": 6450592,
     "avh": 2165,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2007,
     "country": "Chile",
     "pop": 16530195,
     "emp": 6631198,
     "avh": 2128,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2008,
     "country": "Chile",
     "pop": 16708258,
     "emp": 6721412,
     "avh": 2095,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2009,
     "country": "Chile",
     "pop": 16886186,
     "emp": 6747425,
     "avh": 2074,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2010,
     "country": "Chile",
     "pop": 17062536,
     "emp": 6889198,
     "avh": 2070,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2011,
     "country": "Chile",
     "pop": 17233576,
     "emp": 7121354,
     "avh": 2047,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2012,
     "country": "Chile",
     "pop": 17400347,
     "emp": 7378933,
     "avh": 2024,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2013,
     "country": "Chile",
     "pop": 17571507,
     "emp": 7545858,
     "avh": 2015,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2014,
     "country": "Chile",
     "pop": 17758959,
     "emp": 7629834,
     "avh": 1990,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2015,
     "country": "Chile",
     "pop": 17969353,
     "emp": 7760435,
     "avh": 1988,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2016,
     "country": "Chile",
     "pop": 18209068,
     "emp": 7844314,
     "avh": 1974,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2017,
     "country": "Chile",
     "pop": 18470439,
     "emp": 7928067,
     "avh": 1954,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2018,
     "country": "Chile",
     "pop": 18729160,
     "emp": 7993834,
     "avh": 1940,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2019,
     "country": "Chile",
     "pop": 18952038,
     "emp": 8100071,
     "avh": 1914,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 1970,
     "country": "China",
     "pop": 827601394,
     "emp": 360956390,
     "avh": 1976,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1971,
     "country": "China",
     "pop": 848759710,
     "emp": 375930297,
     "avh": 1975,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1972,
     "country": "China",
     "pop": 869485964,
     "emp": 386572204,
     "avh": 1975,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1973,
     "country": "China",
     "pop": 889485372,
     "emp": 395443145,
     "avh": 1975,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1974,
     "country": "China",
     "pop": 908464198,
     "emp": 407258117,
     "avh": 1975,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1975,
     "country": "China",
     "pop": 926240885,
     "emp": 419791931,
     "avh": 1974,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1976,
     "country": "China",
     "pop": 942685411,
     "emp": 431858154,
     "avh": 1974,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1977,
     "country": "China",
     "pop": 957891272,
     "emp": 442637634,
     "avh": 1973,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1978,
     "country": "China",
     "pop": 972205442,
     "emp": 454202850,
     "avh": 1972,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1979,
     "country": "China",
     "pop": 986132202,
     "emp": 467560119,
     "avh": 1972,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1980,
     "country": "China",
     "pop": 1000089235,
     "emp": 484668853,
     "avh": 1971,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1981,
     "country": "China",
     "pop": 1014022212,
     "emp": 504651824,
     "avh": 1971,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1982,
     "country": "China",
     "pop": 1027948987,
     "emp": 529559326,
     "avh": 1970,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1983,
     "country": "China",
     "pop": 1042431412,
     "emp": 543172302,
     "avh": 1970,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1984,
     "country": "China",
     "pop": 1058171976,
     "emp": 557972106,
     "avh": 1969,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1985,
     "country": "China",
     "pop": 1075589361,
     "emp": 573328002,
     "avh": 1969,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1986,
     "country": "China",
     "pop": 1095014109,
     "emp": 587222839,
     "avh": 1970,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1987,
     "country": "China",
     "pop": 1116095476,
     "emp": 599649719,
     "avh": 1971,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1988,
     "country": "China",
     "pop": 1137724227,
     "emp": 617746459,
     "avh": 1972,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1989,
     "country": "China",
     "pop": 1158357397,
     "emp": 641050842,
     "avh": 1973,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1990,
     "country": "China",
     "pop": 1176883674,
     "emp": 660476501,
     "avh": 1975,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1991,
     "country": "China",
     "pop": 1192897284,
     "emp": 675503479,
     "avh": 1976,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1992,
     "country": "China",
     "pop": 1206711244,
     "emp": 682740966,
     "avh": 1978,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1993,
     "country": "China",
     "pop": 1218817055,
     "emp": 688579162,
     "avh": 1981,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1994,
     "country": "China",
     "pop": 1230020031,
     "emp": 693913757,
     "avh": 1989,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1995,
     "country": "China",
     "pop": 1240920535,
     "emp": 699202392,
     "avh": 2001,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1996,
     "country": "China",
     "pop": 1251636186,
     "emp": 705632812,
     "avh": 2017,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1997,
     "country": "China",
     "pop": 1261996012,
     "emp": 713376403,
     "avh": 2037,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1998,
     "country": "China",
     "pop": 1271982350,
     "emp": 721141601,
     "avh": 2062,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1999,
     "country": "China",
     "pop": 1281514832,
     "emp": 728701110,
     "avh": 2082,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2000,
     "country": "China",
     "pop": 1290550765,
     "emp": 735723144,
     "avh": 2090,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2001,
     "country": "China",
     "pop": 1299129752,
     "emp": 742675964,
     "avh": 2103,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2002,
     "country": "China",
     "pop": 1307352257,
     "emp": 748695434,
     "avh": 2118,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2003,
     "country": "China",
     "pop": 1315303521,
     "emp": 753550415,
     "avh": 2138,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2004,
     "country": "China",
     "pop": 1323084641,
     "emp": 758614318,
     "avh": 2167,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2005,
     "country": "China",
     "pop": 1330776380,
     "emp": 763212036,
     "avh": 2192,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2006,
     "country": "China",
     "pop": 1338408647,
     "emp": 767209350,
     "avh": 2183,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2007,
     "country": "China",
     "pop": 1345993888,
     "emp": 771038391,
     "avh": 2152,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2008,
     "country": "China",
     "pop": 1353569484,
     "emp": 774456359,
     "avh": 2131,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2009,
     "country": "China",
     "pop": 1361169419,
     "emp": 777627258,
     "avh": 2138,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2010,
     "country": "China",
     "pop": 1368810615,
     "emp": 781035522,
     "avh": 2172,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2011,
     "country": "China",
     "pop": 1376497639,
     "emp": 784713317,
     "avh": 2178,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2012,
     "country": "China",
     "pop": 1384206401,
     "emp": 788292846,
     "avh": 2184,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2013,
     "country": "China",
     "pop": 1391883330,
     "emp": 791642761,
     "avh": 2178,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2014,
     "country": "China",
     "pop": 1399453965,
     "emp": 794645629,
     "avh": 2178,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2015,
     "country": "China",
     "pop": 1406847870,
     "emp": 797335266,
     "avh": 2170,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2016,
     "country": "China",
     "pop": 1414049351,
     "emp": 798530334,
     "avh": 2167,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2017,
     "country": "China",
     "pop": 1421021791,
     "emp": 799186096,
     "avh": 2168,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2018,
     "country": "China",
     "pop": 1427647786,
     "emp": 799306640,
     "avh": 2168,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2019,
     "country": "China",
     "pop": 1433783686,
     "emp": 798807739,
     "avh": 2168,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 1950,
     "country": "Colombia",
     "pop": 11618923,
     "emp": 3345374,
     "avh": 2323,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1951,
     "country": "Colombia",
     "pop": 11993143,
     "emp": 3408783,
     "avh": 2312,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1952,
     "country": "Colombia",
     "pop": 12379822,
     "emp": 3473395,
     "avh": 2301,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1953,
     "country": "Colombia",
     "pop": 12779607,
     "emp": 3539232,
     "avh": 2290,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1954,
     "country": "Colombia",
     "pop": 13192961,
     "emp": 3606316,
     "avh": 2280,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1955,
     "country": "Colombia",
     "pop": 13620366,
     "emp": 3677932,
     "avh": 2269,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1956,
     "country": "Colombia",
     "pop": 14062320,
     "emp": 3756705,
     "avh": 2259,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1957,
     "country": "Colombia",
     "pop": 14520066,
     "emp": 3837165,
     "avh": 2248,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1958,
     "country": "Colombia",
     "pop": 14993461,
     "emp": 3919347,
     "avh": 2238,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1959,
     "country": "Colombia",
     "pop": 15483062,
     "emp": 4003291,
     "avh": 2228,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1960,
     "country": "Colombia",
     "pop": 15990250,
     "emp": 4093657,
     "avh": 2218,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1961,
     "country": "Colombia",
     "pop": 16514878,
     "emp": 4198895,
     "avh": 2213,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1962,
     "country": "Colombia",
     "pop": 17049895,
     "emp": 4306839,
     "avh": 2208,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1963,
     "country": "Colombia",
     "pop": 17587287,
     "emp": 4417557,
     "avh": 2203,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1964,
     "country": "Colombia",
     "pop": 18132550,
     "emp": 4531122,
     "avh": 2198,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1965,
     "country": "Colombia",
     "pop": 18690034,
     "emp": 4655162,
     "avh": 2193,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1966,
     "country": "Colombia",
     "pop": 19246898,
     "emp": 4816287,
     "avh": 2189,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1967,
     "country": "Colombia",
     "pop": 19810514,
     "emp": 4982989,
     "avh": 2184,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1968,
     "country": "Colombia",
     "pop": 20369464,
     "emp": 5155460,
     "avh": 2179,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1969,
     "country": "Colombia",
     "pop": 20918228,
     "emp": 5333902,
     "avh": 2174,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1970,
     "country": "Colombia",
     "pop": 21480065,
     "emp": 5534699,
     "avh": 2170,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1971,
     "country": "Colombia",
     "pop": 22003980,
     "emp": 5717865,
     "avh": 2160,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1972,
     "country": "Colombia",
     "pop": 22516425,
     "emp": 5907092,
     "avh": 2150,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1973,
     "country": "Colombia",
     "pop": 23024517,
     "emp": 6102581,
     "avh": 2141,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1974,
     "country": "Colombia",
     "pop": 23538386,
     "emp": 6304542,
     "avh": 2131,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1975,
     "country": "Colombia",
     "pop": 24065507,
     "emp": 6656195,
     "avh": 2121,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1976,
     "country": "Colombia",
     "pop": 24608113,
     "emp": 6875525,
     "avh": 2112,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1977,
     "country": "Colombia",
     "pop": 25164545,
     "emp": 7195661,
     "avh": 2102,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1978,
     "country": "Colombia",
     "pop": 25733673,
     "emp": 7399928,
     "avh": 2092,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1979,
     "country": "Colombia",
     "pop": 26312994,
     "emp": 7618254,
     "avh": 2083,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1980,
     "country": "Colombia",
     "pop": 26900506,
     "emp": 7781164,
     "avh": 2074,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1981,
     "country": "Colombia",
     "pop": 27496617,
     "emp": 8137970,
     "avh": 2063,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1982,
     "country": "Colombia",
     "pop": 28101819,
     "emp": 8280908,
     "avh": 2052,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1983,
     "country": "Colombia",
     "pop": 28714190,
     "emp": 8293473,
     "avh": 2041,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1984,
     "country": "Colombia",
     "pop": 29331238,
     "emp": 8376859,
     "avh": 2031,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1985,
     "country": "Colombia",
     "pop": 29951201,
     "emp": 8606322,
     "avh": 2020,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1986,
     "country": "Colombia",
     "pop": 30572478,
     "emp": 8924141,
     "avh": 2010,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1987,
     "country": "Colombia",
     "pop": 31195413,
     "emp": 9391930,
     "avh": 1999,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1988,
     "country": "Colombia",
     "pop": 31822525,
     "emp": 9748680,
     "avh": 1989,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1989,
     "country": "Colombia",
     "pop": 32457499,
     "emp": 10220754,
     "avh": 1979,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1990,
     "country": "Colombia",
     "pop": 33102575,
     "emp": 10505453,
     "avh": 1969,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1991,
     "country": "Colombia",
     "pop": 33758337,
     "emp": 11193827,
     "avh": 1958,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1992,
     "country": "Colombia",
     "pop": 34422569,
     "emp": 11339091,
     "avh": 1949,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1993,
     "country": "Colombia",
     "pop": 35091275,
     "emp": 12053429,
     "avh": 1961,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1994,
     "country": "Colombia",
     "pop": 35758979,
     "emp": 12520749,
     "avh": 1975,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1995,
     "country": "Colombia",
     "pop": 36421438,
     "emp": 13095464,
     "avh": 1970,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1996,
     "country": "Colombia",
     "pop": 37076387,
     "emp": 13300181,
     "avh": 1965,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1997,
     "country": "Colombia",
     "pop": 37723800,
     "emp": 13576702,
     "avh": 1960,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1998,
     "country": "Colombia",
     "pop": 38364309,
     "emp": 13599688,
     "avh": 1956,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1999,
     "country": "Colombia",
     "pop": 38999471,
     "emp": 13398020,
     "avh": 1956,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2000,
     "country": "Colombia",
     "pop": 39629968,
     "emp": 14237122,
     "avh": 1956,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2001,
     "country": "Colombia",
     "pop": 40255967,
     "emp": 14333669,
     "avh": 1956,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2002,
     "country": "Colombia",
     "pop": 40875360,
     "emp": 14681527,
     "avh": 2032,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2003,
     "country": "Colombia",
     "pop": 41483869,
     "emp": 15246300,
     "avh": 2016,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2004,
     "country": "Colombia",
     "pop": 42075955,
     "emp": 15829067,
     "avh": 2004,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2005,
     "country": "Colombia",
     "pop": 42647723,
     "emp": 16476457,
     "avh": 2013,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2006,
     "country": "Colombia",
     "pop": 43200897,
     "emp": 17057182,
     "avh": 2037,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2007,
     "country": "Colombia",
     "pop": 43737516,
     "emp": 17972843,
     "avh": 2061,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2008,
     "country": "Colombia",
     "pop": 44254975,
     "emp": 18254554,
     "avh": 2085,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2009,
     "country": "Colombia",
     "pop": 44750054,
     "emp": 18429765,
     "avh": 2051,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2010,
     "country": "Colombia",
     "pop": 45222700,
     "emp": 18891344,
     "avh": 2045,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2011,
     "country": "Colombia",
     "pop": 45662748,
     "emp": 19497694,
     "avh": 2029,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2012,
     "country": "Colombia",
     "pop": 46075718,
     "emp": 19976184,
     "avh": 2016,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2013,
     "country": "Colombia",
     "pop": 46495493,
     "emp": 20318954,
     "avh": 2011,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2014,
     "country": "Colombia",
     "pop": 46967696,
     "emp": 20399381,
     "avh": 2004,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2015,
     "country": "Colombia",
     "pop": 47520667,
     "emp": 21104354,
     "avh": 1997,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2016,
     "country": "Colombia",
     "pop": 48175052,
     "emp": 21186784,
     "avh": 1989,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2017,
     "country": "Colombia",
     "pop": 48909839,
     "emp": 21277929,
     "avh": 1974,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2018,
     "country": "Colombia",
     "pop": 49661048,
     "emp": 21398231,
     "avh": 1968,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2019,
     "country": "Colombia",
     "pop": 50339443,
     "emp": 21199607,
     "avh": 1968,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 1987,
     "country": "Costa Rica",
     "pop": 2884851,
     "emp": 967135,
     "avh": 2371,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1988,
     "country": "Costa Rica",
     "pop": 2960929,
     "emp": 997787,
     "avh": 2351,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1989,
     "country": "Costa Rica",
     "pop": 3039013,
     "emp": 1062491,
     "avh": 2313,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1990,
     "country": "Costa Rica",
     "pop": 3119433,
     "emp": 1084857,
     "avh": 2363,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1991,
     "country": "Costa Rica",
     "pop": 3202085,
     "emp": 1106093,
     "avh": 2278,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1992,
     "country": "Costa Rica",
     "pop": 3286520,
     "emp": 1157370,
     "avh": 2364,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1993,
     "country": "Costa Rica",
     "pop": 3372298,
     "emp": 1195532,
     "avh": 2352,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1994,
     "country": "Costa Rica",
     "pop": 3458834,
     "emp": 1235587,
     "avh": 2376,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1995,
     "country": "Costa Rica",
     "pop": 3545534,
     "emp": 1266127,
     "avh": 2350,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1996,
     "country": "Costa Rica",
     "pop": 3632362,
     "emp": 1297572,
     "avh": 2392,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1997,
     "country": "Costa Rica",
     "pop": 3718949,
     "emp": 1350193,
     "avh": 2371,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1998,
     "country": "Costa Rica",
     "pop": 3803887,
     "emp": 1397445,
     "avh": 2362,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1999,
     "country": "Costa Rica",
     "pop": 3885430,
     "emp": 1436913,
     "avh": 2376,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2000,
     "country": "Costa Rica",
     "pop": 3962372,
     "emp": 1494476,
     "avh": 2367,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2001,
     "country": "Costa Rica",
     "pop": 4034074,
     "emp": 1525488,
     "avh": 2335,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2002,
     "country": "Costa Rica",
     "pop": 4100925,
     "emp": 1565318,
     "avh": 2362,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2003,
     "country": "Costa Rica",
     "pop": 4164053,
     "emp": 1605377,
     "avh": 2356,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2004,
     "country": "Costa Rica",
     "pop": 4225155,
     "emp": 1655476,
     "avh": 2375,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2005,
     "country": "Costa Rica",
     "pop": 4285502,
     "emp": 1702387,
     "avh": 2357,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2006,
     "country": "Costa Rica",
     "pop": 4345412,
     "emp": 1763699,
     "avh": 2365,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2007,
     "country": "Costa Rica",
     "pop": 4404628,
     "emp": 1843176,
     "avh": 2392,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2008,
     "country": "Costa Rica",
     "pop": 4463125,
     "emp": 1889470,
     "avh": 2397,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2009,
     "country": "Costa Rica",
     "pop": 4520740,
     "emp": 1881556,
     "avh": 2354,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2010,
     "country": "Costa Rica",
     "pop": 4577378,
     "emp": 1940775,
     "avh": 2249,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2011,
     "country": "Costa Rica",
     "pop": 4633086,
     "emp": 1980420,
     "avh": 2289,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2012,
     "country": "Costa Rica",
     "pop": 4688000,
     "emp": 1971206,
     "avh": 2242,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2013,
     "country": "Costa Rica",
     "pop": 4742107,
     "emp": 2031738,
     "avh": 2156,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2014,
     "country": "Costa Rica",
     "pop": 4795396,
     "emp": 2068466,
     "avh": 2135,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2015,
     "country": "Costa Rica",
     "pop": 4847804,
     "emp": 2106851,
     "avh": 2156,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2016,
     "country": "Costa Rica",
     "pop": 4899345,
     "emp": 2146195,
     "avh": 2212,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2017,
     "country": "Costa Rica",
     "pop": 4949954,
     "emp": 2192535,
     "avh": 2185,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2018,
     "country": "Costa Rica",
     "pop": 4999441,
     "emp": 2196188,
     "avh": 2127,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2019,
     "country": "Costa Rica",
     "pop": 5047561,
     "emp": 2256355,
     "avh": 2069,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 1995,
     "country": "Cyprus",
     "pop": 650700,
     "emp": 251811,
     "avh": 1899,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 1996,
     "country": "Cyprus",
     "pop": 660900,
     "emp": 253049,
     "avh": 1898,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 1997,
     "country": "Cyprus",
     "pop": 670400,
     "emp": 254622,
     "avh": 1906,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 1998,
     "country": "Cyprus",
     "pop": 678900,
     "emp": 258699,
     "avh": 1912,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 1999,
     "country": "Cyprus",
     "pop": 686400,
     "emp": 263428,
     "avh": 1919,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2000,
     "country": "Cyprus",
     "pop": 693600,
     "emp": 267729,
     "avh": 1926,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2001,
     "country": "Cyprus",
     "pop": 701300,
     "emp": 273593,
     "avh": 1950,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2002,
     "country": "Cyprus",
     "pop": 709600,
     "emp": 279405,
     "avh": 1923,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2003,
     "country": "Cyprus",
     "pop": 717836,
     "emp": 289278,
     "avh": 1916,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2004,
     "country": "Cyprus",
     "pop": 727980,
     "emp": 300958,
     "avh": 1878,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2005,
     "country": "Cyprus",
     "pop": 738540,
     "emp": 311895,
     "avh": 1847,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2006,
     "country": "Cyprus",
     "pop": 750965,
     "emp": 317674,
     "avh": 1832,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2007,
     "country": "Cyprus",
     "pop": 767125,
     "emp": 331743,
     "avh": 1862,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2008,
     "country": "Cyprus",
     "pop": 786632,
     "emp": 343428,
     "avh": 1867,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2009,
     "country": "Cyprus",
     "pop": 808035,
     "emp": 343539,
     "avh": 1847,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2010,
     "country": "Cyprus",
     "pop": 829446,
     "emp": 345667,
     "avh": 1844,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2011,
     "country": "Cyprus",
     "pop": 850881,
     "emp": 346620,
     "avh": 1847,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2012,
     "country": "Cyprus",
     "pop": 863945,
     "emp": 334321,
     "avh": 1845,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2013,
     "country": "Cyprus",
     "pop": 861930,
     "emp": 315628,
     "avh": 1810,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2014,
     "country": "Cyprus",
     "pop": 852504,
     "emp": 309299,
     "avh": 1815,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2015,
     "country": "Cyprus",
     "pop": 847700,
     "emp": 314172,
     "avh": 1824,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2016,
     "country": "Cyprus",
     "pop": 851600,
     "emp": 328804,
     "avh": 1839,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2017,
     "country": "Cyprus",
     "pop": 854802,
     "emp": 344362,
     "avh": 1821,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2018,
     "country": "Cyprus",
     "pop": 861749,
     "emp": 357038,
     "avh": 1809,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2019,
     "country": "Cyprus",
     "pop": 868495,
     "emp": 366567,
     "avh": 1805,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 1993,
     "country": "Czech Republic",
     "pop": 10358690,
     "emp": 5043892,
     "avh": 1856,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 1994,
     "country": "Czech Republic",
     "pop": 10360969,
     "emp": 5098144,
     "avh": 1838,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 1995,
     "country": "Czech Republic",
     "pop": 10358193,
     "emp": 5132678,
     "avh": 1857,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 1996,
     "country": "Czech Republic",
     "pop": 10350309,
     "emp": 5161345,
     "avh": 1852,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 1997,
     "country": "Czech Republic",
     "pop": 10338339,
     "emp": 5124731,
     "avh": 1857,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 1998,
     "country": "Czech Republic",
     "pop": 10323247,
     "emp": 5033247,
     "avh": 1877,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 1999,
     "country": "Czech Republic",
     "pop": 10306411,
     "emp": 4921800,
     "avh": 1893,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2000,
     "country": "Czech Republic",
     "pop": 10289373,
     "emp": 4886872,
     "avh": 1895,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2001,
     "country": "Czech Republic",
     "pop": 10271008,
     "emp": 4883463,
     "avh": 1818,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2002,
     "country": "Czech Republic",
     "pop": 10252261,
     "emp": 4914577,
     "avh": 1816,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2003,
     "country": "Czech Republic",
     "pop": 10239136,
     "emp": 4870719,
     "avh": 1806,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2004,
     "country": "Czech Republic",
     "pop": 10239439,
     "emp": 4860152,
     "avh": 1817,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2005,
     "country": "Czech Republic",
     "pop": 10258167,
     "emp": 4956709,
     "avh": 1816,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2006,
     "country": "Czech Republic",
     "pop": 10298614,
     "emp": 5029677,
     "avh": 1799,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2007,
     "country": "Czech Republic",
     "pop": 10357538,
     "emp": 5134018,
     "avh": 1784,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2008,
     "country": "Czech Republic",
     "pop": 10425266,
     "emp": 5236539,
     "avh": 1789,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2009,
     "country": "Czech Republic",
     "pop": 10488155,
     "emp": 5143602,
     "avh": 1778,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2010,
     "country": "Czech Republic",
     "pop": 10536518,
     "emp": 5098990,
     "avh": 1799,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2011,
     "country": "Czech Republic",
     "pop": 10566517,
     "emp": 5089023,
     "avh": 1805,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2012,
     "country": "Czech Republic",
     "pop": 10581293,
     "emp": 5110384,
     "avh": 1776,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2013,
     "country": "Czech Republic",
     "pop": 10586533,
     "emp": 5127679,
     "avh": 1763,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2014,
     "country": "Czech Republic",
     "pop": 10591108,
     "emp": 5152778,
     "avh": 1776,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2015,
     "country": "Czech Republic",
     "pop": 10601397,
     "emp": 5221146,
     "avh": 1756,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2016,
     "country": "Czech Republic",
     "pop": 10618857,
     "emp": 5302702,
     "avh": 1778,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2017,
     "country": "Czech Republic",
     "pop": 10641034,
     "emp": 5382019,
     "avh": 1784,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2018,
     "country": "Czech Republic",
     "pop": 10665677,
     "emp": 5448913,
     "avh": 1786,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2019,
     "country": "Czech Republic",
     "pop": 10689209,
     "emp": 5481432,
     "avh": 1787,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 1950,
     "country": "Germany",
     "pop": 68734097,
     "emp": 30855808,
     "avh": 2428,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1951,
     "country": "Germany",
     "pop": 69073867,
     "emp": 31436510,
     "avh": 2402,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1952,
     "country": "Germany",
     "pop": 69448820,
     "emp": 32024280,
     "avh": 2376,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1953,
     "country": "Germany",
     "pop": 69846894,
     "emp": 32835849,
     "avh": 2351,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1954,
     "country": "Germany",
     "pop": 70264068,
     "emp": 33835823,
     "avh": 2326,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1955,
     "country": "Germany",
     "pop": 70694309,
     "emp": 34944683,
     "avh": 2301,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1956,
     "country": "Germany",
     "pop": 71139629,
     "emp": 35661876,
     "avh": 2277,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1957,
     "country": "Germany",
     "pop": 71605054,
     "emp": 36335311,
     "avh": 2253,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1958,
     "country": "Germany",
     "pop": 72097620,
     "emp": 36614521,
     "avh": 2229,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1959,
     "country": "Germany",
     "pop": 72625370,
     "emp": 36985790,
     "avh": 2205,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1960,
     "country": "Germany",
     "pop": 73196345,
     "emp": 37446384,
     "avh": 2181,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1961,
     "country": "Germany",
     "pop": 73809539,
     "emp": 37825874,
     "avh": 2155,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1962,
     "country": "Germany",
     "pop": 74456912,
     "emp": 37925540,
     "avh": 2118,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1963,
     "country": "Germany",
     "pop": 75115342,
     "emp": 37975131,
     "avh": 2087,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1964,
     "country": "Germany",
     "pop": 75757689,
     "emp": 38025611,
     "avh": 2099,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1965,
     "country": "Germany",
     "pop": 76361837,
     "emp": 38166316,
     "avh": 2084,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1966,
     "country": "Germany",
     "pop": 76919743,
     "emp": 38080635,
     "avh": 2058,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1967,
     "country": "Germany",
     "pop": 77430404,
     "emp": 37350864,
     "avh": 2020,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1968,
     "country": "Germany",
     "pop": 77883766,
     "emp": 37484970,
     "avh": 2008,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1969,
     "country": "Germany",
     "pop": 78268771,
     "emp": 37873188,
     "avh": 1988,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1970,
     "country": "Germany",
     "pop": 78578385,
     "emp": 38095798,
     "avh": 1973,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1971,
     "country": "Germany",
     "pop": 78789939,
     "emp": 38067100,
     "avh": 1941,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1972,
     "country": "Germany",
     "pop": 78901818,
     "emp": 38078250,
     "avh": 1916,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1973,
     "country": "Germany",
     "pop": 78932455,
     "emp": 38331424,
     "avh": 1885,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1974,
     "country": "Germany",
     "pop": 78909807,
     "emp": 38035320,
     "avh": 1852,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1975,
     "country": "Germany",
     "pop": 78856039,
     "emp": 37435142,
     "avh": 1812,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1976,
     "country": "Germany",
     "pop": 78781733,
     "emp": 37520671,
     "avh": 1824,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1977,
     "country": "Germany",
     "pop": 78687323,
     "emp": 37630516,
     "avh": 1806,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1978,
     "country": "Germany",
     "pop": 78573586,
     "emp": 37921131,
     "avh": 1787,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1979,
     "country": "Germany",
     "pop": 78438164,
     "emp": 38397350,
     "avh": 1775,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1980,
     "country": "Germany",
     "pop": 78283100,
     "emp": 38704971,
     "avh": 1756,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1981,
     "country": "Germany",
     "pop": 78107857,
     "emp": 38621047,
     "avh": 1734,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1982,
     "country": "Germany",
     "pop": 77926011,
     "emp": 38309654,
     "avh": 1723,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1983,
     "country": "Germany",
     "pop": 77770213,
     "emp": 38030189,
     "avh": 1710,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1984,
     "country": "Germany",
     "pop": 77682295,
     "emp": 38225921,
     "avh": 1699,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1985,
     "country": "Germany",
     "pop": 77691595,
     "emp": 38572887,
     "avh": 1676,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1986,
     "country": "Germany",
     "pop": 77806147,
     "emp": 39016479,
     "avh": 1657,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1987,
     "country": "Germany",
     "pop": 78015731,
     "emp": 39355739,
     "avh": 1634,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1988,
     "country": "Germany",
     "pop": 78307525,
     "emp": 39598316,
     "avh": 1629,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1989,
     "country": "Germany",
     "pop": 78660303,
     "emp": 39831668,
     "avh": 1606,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1990,
     "country": "Germany",
     "pop": 79053984,
     "emp": 39547729,
     "avh": 1583,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1991,
     "country": "Germany",
     "pop": 79490835,
     "emp": 38642501,
     "avh": 1554,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1992,
     "country": "Germany",
     "pop": 79963159,
     "emp": 38070522,
     "avh": 1565,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1993,
     "country": "Germany",
     "pop": 80428556,
     "emp": 37548328,
     "avh": 1540,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1994,
     "country": "Germany",
     "pop": 80832937,
     "emp": 37622341,
     "avh": 1536,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1995,
     "country": "Germany",
     "pop": 81138659,
     "emp": 37815830,
     "avh": 1530,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1996,
     "country": "Germany",
     "pop": 81323664,
     "emp": 37807399,
     "avh": 1516,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1997,
     "country": "Germany",
     "pop": 81399251,
     "emp": 37770332,
     "avh": 1507,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1998,
     "country": "Germany",
     "pop": 81402673,
     "emp": 38217929,
     "avh": 1504,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1999,
     "country": "Germany",
     "pop": 81389927,
     "emp": 38807254,
     "avh": 1491,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2000,
     "country": "Germany",
     "pop": 81400882,
     "emp": 39603115,
     "avh": 1465,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2001,
     "country": "Germany",
     "pop": 81453885,
     "emp": 39451438,
     "avh": 1458,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2002,
     "country": "Germany",
     "pop": 81535122,
     "emp": 39233551,
     "avh": 1448,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2003,
     "country": "Germany",
     "pop": 81614380,
     "emp": 38825450,
     "avh": 1443,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2004,
     "country": "Germany",
     "pop": 81646474,
     "emp": 38972915,
     "avh": 1442,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2005,
     "country": "Germany",
     "pop": 81602741,
     "emp": 38923667,
     "avh": 1432,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2006,
     "country": "Germany",
     "pop": 81472226,
     "emp": 39186344,
     "avh": 1453,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2007,
     "country": "Germany",
     "pop": 81277830,
     "emp": 39814460,
     "avh": 1454,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2008,
     "country": "Germany",
     "pop": 81065752,
     "emp": 40345325,
     "avh": 1447,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2009,
     "country": "Germany",
     "pop": 80899961,
     "emp": 40429206,
     "avh": 1405,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2010,
     "country": "Germany",
     "pop": 80827002,
     "emp": 40631881,
     "avh": 1425,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2011,
     "country": "Germany",
     "pop": 80855632,
     "emp": 41224578,
     "avh": 1426,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2012,
     "country": "Germany",
     "pop": 80972628,
     "emp": 41677947,
     "avh": 1407,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2013,
     "country": "Germany",
     "pop": 81174367,
     "emp": 41996150,
     "avh": 1396,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2014,
     "country": "Germany",
     "pop": 81450378,
     "emp": 42331260,
     "avh": 1400,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2015,
     "country": "Germany",
     "pop": 81787411,
     "emp": 42535579,
     "avh": 1400,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2016,
     "country": "Germany",
     "pop": 82193768,
     "emp": 42927360,
     "avh": 1394,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2017,
     "country": "Germany",
     "pop": 82658409,
     "emp": 43593219,
     "avh": 1391,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2018,
     "country": "Germany",
     "pop": 83124418,
     "emp": 44306030,
     "avh": 1389,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2019,
     "country": "Germany",
     "pop": 83517045,
     "emp": 44795196,
     "avh": 1386,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 1950,
     "country": "Denmark",
     "pop": 4273152,
     "emp": 1973804,
     "avh": 2049,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1951,
     "country": "Denmark",
     "pop": 4305788,
     "emp": 1996780,
     "avh": 2035,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1952,
     "country": "Denmark",
     "pop": 4336184,
     "emp": 1977964,
     "avh": 2020,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1953,
     "country": "Denmark",
     "pop": 4371481,
     "emp": 2021835,
     "avh": 2006,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1954,
     "country": "Denmark",
     "pop": 4408220,
     "emp": 2039463,
     "avh": 1992,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1955,
     "country": "Denmark",
     "pop": 4441237,
     "emp": 2033422,
     "avh": 1978,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1956,
     "country": "Denmark",
     "pop": 4468722,
     "emp": 2022330,
     "avh": 1964,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1957,
     "country": "Denmark",
     "pop": 4490092,
     "emp": 2026489,
     "avh": 1950,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1958,
     "country": "Denmark",
     "pop": 4517407,
     "emp": 2033223,
     "avh": 1936,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1959,
     "country": "Denmark",
     "pop": 4548927,
     "emp": 2072836,
     "avh": 1923,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1960,
     "country": "Denmark",
     "pop": 4583308,
     "emp": 2111657,
     "avh": 1909,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1961,
     "country": "Denmark",
     "pop": 4612140,
     "emp": 2142499,
     "avh": 1921,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1962,
     "country": "Denmark",
     "pop": 4649240,
     "emp": 2175397,
     "avh": 1933,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1963,
     "country": "Denmark",
     "pop": 4685939,
     "emp": 2202127,
     "avh": 1945,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1964,
     "country": "Denmark",
     "pop": 4722549,
     "emp": 2247362,
     "avh": 1957,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1965,
     "country": "Denmark",
     "pop": 4760497,
     "emp": 2288485,
     "avh": 1969,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1966,
     "country": "Denmark",
     "pop": 4799917,
     "emp": 2327552,
     "avh": 1982,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1967,
     "country": "Denmark",
     "pop": 4841238,
     "emp": 2327684,
     "avh": 1953,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1968,
     "country": "Denmark",
     "pop": 4869752,
     "emp": 2345380,
     "avh": 1909,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1969,
     "country": "Denmark",
     "pop": 4893151,
     "emp": 2390716,
     "avh": 1869,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1970,
     "country": "Denmark",
     "pop": 4931241,
     "emp": 2422612,
     "avh": 1845,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1971,
     "country": "Denmark",
     "pop": 4961762,
     "emp": 2417162,
     "avh": 1809,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1972,
     "country": "Denmark",
     "pop": 4990546,
     "emp": 2465837,
     "avh": 1751,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1973,
     "country": "Denmark",
     "pop": 5017248,
     "emp": 2494870,
     "avh": 1709,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1974,
     "country": "Denmark",
     "pop": 5041419,
     "emp": 2474922,
     "avh": 1691,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1975,
     "country": "Denmark",
     "pop": 5062729,
     "emp": 2445615,
     "avh": 1616,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1976,
     "country": "Denmark",
     "pop": 5081267,
     "emp": 2490239,
     "avh": 1623,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1977,
     "country": "Denmark",
     "pop": 5097045,
     "emp": 2484534,
     "avh": 1598,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1978,
     "country": "Denmark",
     "pop": 5109690,
     "emp": 2503947,
     "avh": 1575,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1979,
     "country": "Denmark",
     "pop": 5118707,
     "emp": 2530703,
     "avh": 1563,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1980,
     "country": "Denmark",
     "pop": 5123945,
     "emp": 2515690,
     "avh": 1577,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1981,
     "country": "Denmark",
     "pop": 5125298,
     "emp": 2477561,
     "avh": 1546,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1982,
     "country": "Denmark",
     "pop": 5123349,
     "emp": 2489611,
     "avh": 1552,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1983,
     "country": "Denmark",
     "pop": 5119607,
     "emp": 2491283,
     "avh": 1545,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1984,
     "country": "Denmark",
     "pop": 5116058,
     "emp": 2526872,
     "avh": 1540,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1985,
     "country": "Denmark",
     "pop": 5114243,
     "emp": 2583688,
     "avh": 1527,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1986,
     "country": "Denmark",
     "pop": 5114657,
     "emp": 2643522,
     "avh": 1530,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1987,
     "country": "Denmark",
     "pop": 5117277,
     "emp": 2661460,
     "avh": 1493,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1988,
     "country": "Denmark",
     "pop": 5122441,
     "emp": 2650039,
     "avh": 1471,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1989,
     "country": "Denmark",
     "pop": 5130361,
     "emp": 2644069,
     "avh": 1454,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1990,
     "country": "Denmark",
     "pop": 5141115,
     "emp": 2634172,
     "avh": 1440,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1991,
     "country": "Denmark",
     "pop": 5154908,
     "emp": 2608841,
     "avh": 1437,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1992,
     "country": "Denmark",
     "pop": 5171650,
     "emp": 2587602,
     "avh": 1452,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1993,
     "country": "Denmark",
     "pop": 5190742,
     "emp": 2546309,
     "avh": 1448,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1994,
     "country": "Denmark",
     "pop": 5211334,
     "emp": 2598382,
     "avh": 1406,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1995,
     "country": "Denmark",
     "pop": 5232704,
     "emp": 2611678,
     "avh": 1419,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1996,
     "country": "Denmark",
     "pop": 5254860,
     "emp": 2633845,
     "avh": 1412,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1997,
     "country": "Denmark",
     "pop": 5277711,
     "emp": 2670728,
     "avh": 1428,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1998,
     "country": "Denmark",
     "pop": 5300379,
     "emp": 2710149,
     "avh": 1441,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1999,
     "country": "Denmark",
     "pop": 5321774,
     "emp": 2734749,
     "avh": 1456,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2000,
     "country": "Denmark",
     "pop": 5341194,
     "emp": 2755956,
     "avh": 1465,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2001,
     "country": "Denmark",
     "pop": 5358062,
     "emp": 2782087,
     "avh": 1468,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2002,
     "country": "Denmark",
     "pop": 5372801,
     "emp": 2782571,
     "avh": 1462,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2003,
     "country": "Denmark",
     "pop": 5386968,
     "emp": 2756796,
     "avh": 1457,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2004,
     "country": "Denmark",
     "pop": 5402761,
     "emp": 2743247,
     "avh": 1458,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2005,
     "country": "Denmark",
     "pop": 5421702,
     "emp": 2784317,
     "avh": 1451,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2006,
     "country": "Denmark",
     "pop": 5444286,
     "emp": 2849603,
     "avh": 1455,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2007,
     "country": "Denmark",
     "pop": 5469921,
     "emp": 2916925,
     "avh": 1432,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2008,
     "country": "Denmark",
     "pop": 5497729,
     "emp": 2949064,
     "avh": 1430,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2009,
     "country": "Denmark",
     "pop": 5526388,
     "emp": 2856043,
     "avh": 1417,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2010,
     "country": "Denmark",
     "pop": 5554844,
     "emp": 2791450,
     "avh": 1422,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2011,
     "country": "Denmark",
     "pop": 5582978,
     "emp": 2792827,
     "avh": 1436,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2012,
     "country": "Denmark",
     "pop": 5610903,
     "emp": 2776367,
     "avh": 1423,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2013,
     "country": "Denmark",
     "pop": 5638145,
     "emp": 2777828,
     "avh": 1425,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2014,
     "country": "Denmark",
     "pop": 5664196,
     "emp": 2800747,
     "avh": 1413,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2015,
     "country": "Denmark",
     "pop": 5688695,
     "emp": 2831585,
     "avh": 1407,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2016,
     "country": "Denmark",
     "pop": 5711349,
     "emp": 2868074,
     "avh": 1412,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2017,
     "country": "Denmark",
     "pop": 5732274,
     "emp": 2905315,
     "avh": 1405,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2018,
     "country": "Denmark",
     "pop": 5752126,
     "emp": 2942090,
     "avh": 1381,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2019,
     "country": "Denmark",
     "pop": 5771876,
     "emp": 2971836,
     "avh": 1380,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 1990,
     "country": "Dominican Republic",
     "pop": 7133494,
     "emp": 2105937,
     "avh": 2171,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 1991,
     "country": "Dominican Republic",
     "pop": 7270409,
     "emp": 2232030,
     "avh": 2169,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 1992,
     "country": "Dominican Republic",
     "pop": 7408342,
     "emp": 2398957,
     "avh": 2140,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 1993,
     "country": "Dominican Republic",
     "pop": 7546463,
     "emp": 2404197,
     "avh": 2233,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 1994,
     "country": "Dominican Republic",
     "pop": 7683707,
     "emp": 2435974,
     "avh": 2215,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 1995,
     "country": "Dominican Republic",
     "pop": 7819247,
     "emp": 2437529,
     "avh": 2234,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 1996,
     "country": "Dominican Republic",
     "pop": 7952763,
     "emp": 2466145,
     "avh": 2206,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 1997,
     "country": "Dominican Republic",
     "pop": 8084407,
     "emp": 2592925,
     "avh": 2223,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 1998,
     "country": "Dominican Republic",
     "pop": 8214426,
     "emp": 2812513,
     "avh": 2283,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 1999,
     "country": "Dominican Republic",
     "pop": 8343283,
     "emp": 2907293,
     "avh": 2303,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2000,
     "country": "Dominican Republic",
     "pop": 8471321,
     "emp": 2999442,
     "avh": 2206,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2001,
     "country": "Dominican Republic",
     "pop": 8598601,
     "emp": 2957579,
     "avh": 2187,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2002,
     "country": "Dominican Republic",
     "pop": 8724975,
     "emp": 3078022,
     "avh": 2137,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2003,
     "country": "Dominican Republic",
     "pop": 8850317,
     "emp": 3079621,
     "avh": 2130,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2004,
     "country": "Dominican Republic",
     "pop": 8974444,
     "emp": 3165723,
     "avh": 2151,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2005,
     "country": "Dominican Republic",
     "pop": 9097257,
     "emp": 3236171,
     "avh": 2153,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2006,
     "country": "Dominican Republic",
     "pop": 9218686,
     "emp": 3402194,
     "avh": 2123,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2007,
     "country": "Dominican Republic",
     "pop": 9338861,
     "emp": 3528007,
     "avh": 2132,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2008,
     "country": "Dominican Republic",
     "pop": 9458075,
     "emp": 3711705,
     "avh": 2131,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2009,
     "country": "Dominican Republic",
     "pop": 9576737,
     "emp": 3744487,
     "avh": 2131,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2010,
     "country": "Dominican Republic",
     "pop": 9695121,
     "emp": 3897016,
     "avh": 2114,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2011,
     "country": "Dominican Republic",
     "pop": 9813211,
     "emp": 4047848,
     "avh": 2107,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2012,
     "country": "Dominican Republic",
     "pop": 9930916,
     "emp": 4101982,
     "avh": 2114,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2013,
     "country": "Dominican Republic",
     "pop": 10048232,
     "emp": 4175890,
     "avh": 2122,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2014,
     "country": "Dominican Republic",
     "pop": 10165183,
     "emp": 4368690,
     "avh": 2181,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2015,
     "country": "Dominican Republic",
     "pop": 10281680,
     "emp": 4525158,
     "avh": 2156,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2016,
     "country": "Dominican Republic",
     "pop": 10397741,
     "emp": 4675347,
     "avh": 2142,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2017,
     "country": "Dominican Republic",
     "pop": 10513104,
     "emp": 4811162,
     "avh": 2142,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2018,
     "country": "Dominican Republic",
     "pop": 10627141,
     "emp": 4986944,
     "avh": 2142,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2019,
     "country": "Dominican Republic",
     "pop": 10738958,
     "emp": 5126679,
     "avh": 2142,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 1995,
     "country": "Ecuador",
     "pop": 11455204,
     "emp": 3948926,
     "avh": 1943,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 1996,
     "country": "Ecuador",
     "pop": 11703174,
     "emp": 4099928,
     "avh": 1936,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 1997,
     "country": "Ecuador",
     "pop": 11951452,
     "emp": 4289636,
     "avh": 1929,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 1998,
     "country": "Ecuador",
     "pop": 12198449,
     "emp": 4500110,
     "avh": 1923,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 1999,
     "country": "Ecuador",
     "pop": 12442115,
     "emp": 4267396,
     "avh": 1788,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2000,
     "country": "Ecuador",
     "pop": 12681123,
     "emp": 4593042,
     "avh": 1800,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2001,
     "country": "Ecuador",
     "pop": 12914667,
     "emp": 4839009,
     "avh": 1811,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2002,
     "country": "Ecuador",
     "pop": 13143465,
     "emp": 4979533,
     "avh": 1823,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2003,
     "country": "Ecuador",
     "pop": 13369678,
     "emp": 5120744,
     "avh": 1835,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2004,
     "country": "Ecuador",
     "pop": 13596388,
     "emp": 5568521,
     "avh": 1782,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2005,
     "country": "Ecuador",
     "pop": 13825847,
     "emp": 5755225,
     "avh": 1808,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2006,
     "country": "Ecuador",
     "pop": 14059384,
     "emp": 5968001,
     "avh": 1772,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2007,
     "country": "Ecuador",
     "pop": 14296557,
     "emp": 6217163,
     "avh": 1729,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2008,
     "country": "Ecuador",
     "pop": 14535739,
     "emp": 6360858,
     "avh": 1758,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2009,
     "country": "Ecuador",
     "pop": 14774424,
     "emp": 6507263,
     "avh": 1734,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2010,
     "country": "Ecuador",
     "pop": 15011117,
     "emp": 6733418,
     "avh": 1719,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2011,
     "country": "Ecuador",
     "pop": 15243884,
     "emp": 6963473,
     "avh": 1699,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2012,
     "country": "Ecuador",
     "pop": 15474101,
     "emp": 7163155,
     "avh": 1664,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2013,
     "country": "Ecuador",
     "pop": 15707474,
     "emp": 7356478,
     "avh": 1661,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2014,
     "country": "Ecuador",
     "pop": 15951840,
     "emp": 7504068,
     "avh": 1649,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2015,
     "country": "Ecuador",
     "pop": 16212020,
     "emp": 7665237,
     "avh": 1620,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2016,
     "country": "Ecuador",
     "pop": 16491116,
     "emp": 7754486,
     "avh": 1572,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2017,
     "country": "Ecuador",
     "pop": 16785361,
     "emp": 7981274,
     "avh": 1566,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2018,
     "country": "Ecuador",
     "pop": 17084358,
     "emp": 8168647,
     "avh": 1568,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2019,
     "country": "Ecuador",
     "pop": 17373662,
     "emp": 8246670,
     "avh": 1551,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 1950,
     "country": "Spain",
     "pop": 28068984,
     "emp": 11644287,
     "avh": 2209,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1951,
     "country": "Spain",
     "pop": 28304081,
     "emp": 11682966,
     "avh": 2205,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1952,
     "country": "Spain",
     "pop": 28555995,
     "emp": 11729451,
     "avh": 2201,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1953,
     "country": "Spain",
     "pop": 28810309,
     "emp": 11803744,
     "avh": 2197,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1954,
     "country": "Spain",
     "pop": 29066648,
     "emp": 11891103,
     "avh": 2214,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1955,
     "country": "Spain",
     "pop": 29325035,
     "emp": 12044028,
     "avh": 2196,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1956,
     "country": "Spain",
     "pop": 29585488,
     "emp": 12227933,
     "avh": 2179,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1957,
     "country": "Spain",
     "pop": 29848016,
     "emp": 12409489,
     "avh": 2164,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1958,
     "country": "Spain",
     "pop": 30112647,
     "emp": 12643573,
     "avh": 2150,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1959,
     "country": "Spain",
     "pop": 30379394,
     "emp": 12493077,
     "avh": 2139,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1960,
     "country": "Spain",
     "pop": 30647762,
     "emp": 12354081,
     "avh": 2130,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1961,
     "country": "Spain",
     "pop": 30910525,
     "emp": 12561572,
     "avh": 2112,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1962,
     "country": "Spain",
     "pop": 31164745,
     "emp": 12640578,
     "avh": 2094,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1963,
     "country": "Spain",
     "pop": 31436578,
     "emp": 12724834,
     "avh": 2077,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1964,
     "country": "Spain",
     "pop": 31747672,
     "emp": 12791962,
     "avh": 2032,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1965,
     "country": "Spain",
     "pop": 32091395,
     "emp": 12889340,
     "avh": 2024,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1966,
     "country": "Spain",
     "pop": 32458940,
     "emp": 13012271,
     "avh": 2025,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1967,
     "country": "Spain",
     "pop": 32857321,
     "emp": 13099288,
     "avh": 2034,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1968,
     "country": "Spain",
     "pop": 33246431,
     "emp": 13192661,
     "avh": 1997,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1969,
     "country": "Spain",
     "pop": 33573288,
     "emp": 13316006,
     "avh": 1988,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1970,
     "country": "Spain",
     "pop": 33883749,
     "emp": 13451230,
     "avh": 1996,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1971,
     "country": "Spain",
     "pop": 34267466,
     "emp": 13576460,
     "avh": 1996,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1972,
     "country": "Spain",
     "pop": 34664234,
     "emp": 13751749,
     "avh": 1992,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1973,
     "country": "Spain",
     "pop": 35069431,
     "emp": 14121267,
     "avh": 1980,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1974,
     "country": "Spain",
     "pop": 35476423,
     "emp": 14217197,
     "avh": 1987,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1975,
     "country": "Spain",
     "pop": 35879209,
     "emp": 13973970,
     "avh": 1996,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1976,
     "country": "Spain",
     "pop": 36276752,
     "emp": 13810314,
     "avh": 2006,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1977,
     "country": "Spain",
     "pop": 36666767,
     "emp": 13678226,
     "avh": 2000,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1978,
     "country": "Spain",
     "pop": 37040396,
     "emp": 13293730,
     "avh": 1973,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1979,
     "country": "Spain",
     "pop": 37386810,
     "emp": 13010605,
     "avh": 1929,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1980,
     "country": "Spain",
     "pop": 37698196,
     "emp": 12724003,
     "avh": 1918,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1981,
     "country": "Spain",
     "pop": 37971972,
     "emp": 12422122,
     "avh": 1884,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1982,
     "country": "Spain",
     "pop": 38209693,
     "emp": 12316823,
     "avh": 1862,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1983,
     "country": "Spain",
     "pop": 38413317,
     "emp": 12274412,
     "avh": 1830,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1984,
     "country": "Spain",
     "pop": 38586708,
     "emp": 11997964,
     "avh": 1786,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1985,
     "country": "Spain",
     "pop": 38733876,
     "emp": 11866977,
     "avh": 1776,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1986,
     "country": "Spain",
     "pop": 38855626,
     "emp": 12125779,
     "avh": 1768,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1987,
     "country": "Spain",
     "pop": 38954497,
     "emp": 12682387,
     "avh": 1760,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1988,
     "country": "Spain",
     "pop": 39038692,
     "emp": 13096703,
     "avh": 1756,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1989,
     "country": "Spain",
     "pop": 39118561,
     "emp": 13543132,
     "avh": 1744,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1990,
     "country": "Spain",
     "pop": 39202525,
     "emp": 14039334,
     "avh": 1746,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1991,
     "country": "Spain",
     "pop": 39299081,
     "emp": 14206461,
     "avh": 1755,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1992,
     "country": "Spain",
     "pop": 39410857,
     "emp": 13980048,
     "avh": 1747,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1993,
     "country": "Spain",
     "pop": 39533725,
     "emp": 13555336,
     "avh": 1739,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1994,
     "country": "Spain",
     "pop": 39660069,
     "emp": 13470145,
     "avh": 1738,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1995,
     "country": "Spain",
     "pop": 39787419,
     "emp": 13709977,
     "avh": 1738,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1996,
     "country": "Spain",
     "pop": 39908959,
     "emp": 13892730,
     "avh": 1740,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1997,
     "country": "Spain",
     "pop": 40035293,
     "emp": 14397374,
     "avh": 1742,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1998,
     "country": "Spain",
     "pop": 40201560,
     "emp": 15028067,
     "avh": 1751,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1999,
     "country": "Spain",
     "pop": 40454470,
     "emp": 15746972,
     "avh": 1756,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2000,
     "country": "Spain",
     "pop": 40824754,
     "emp": 16605741,
     "avh": 1752,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2001,
     "country": "Spain",
     "pop": 41319427,
     "emp": 17228498,
     "avh": 1762,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2002,
     "country": "Spain",
     "pop": 41919585,
     "emp": 17660991,
     "avh": 1763,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2003,
     "country": "Spain",
     "pop": 42596453,
     "emp": 18189191,
     "avh": 1754,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2004,
     "country": "Spain",
     "pop": 43308345,
     "emp": 18842756,
     "avh": 1739,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2005,
     "country": "Spain",
     "pop": 44019123,
     "emp": 19625484,
     "avh": 1723,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2006,
     "country": "Spain",
     "pop": 44728565,
     "emp": 20411455,
     "avh": 1713,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2007,
     "country": "Spain",
     "pop": 45429076,
     "emp": 21006408,
     "avh": 1701,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2008,
     "country": "Spain",
     "pop": 46068811,
     "emp": 20987949,
     "avh": 1710,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2009,
     "country": "Spain",
     "pop": 46583565,
     "emp": 19701908,
     "avh": 1715,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2010,
     "country": "Spain",
     "pop": 46931015,
     "emp": 19412738,
     "avh": 1705,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2011,
     "country": "Spain",
     "pop": 47084240,
     "emp": 18914443,
     "avh": 1710,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2012,
     "country": "Spain",
     "pop": 47063060,
     "emp": 18135663,
     "avh": 1696,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2013,
     "country": "Spain",
     "pop": 46930555,
     "emp": 17701200,
     "avh": 1689,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2014,
     "country": "Spain",
     "pop": 46777925,
     "emp": 17880252,
     "avh": 1690,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2015,
     "country": "Spain",
     "pop": 46671926,
     "emp": 18352930,
     "avh": 1694,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2016,
     "country": "Spain",
     "pop": 46634140,
     "emp": 18713605,
     "avh": 1701,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2017,
     "country": "Spain",
     "pop": 46647428,
     "emp": 19171979,
     "avh": 1689,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2018,
     "country": "Spain",
     "pop": 46692858,
     "emp": 19529365,
     "avh": 1695,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2019,
     "country": "Spain",
     "pop": 46736776,
     "emp": 19872013,
     "avh": 1685,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 1995,
     "country": "Estonia",
     "pop": 1433024,
     "emp": 631948,
     "avh": 1983,
     "left": 100,
     "top": 34
    },
    {
     "year": 1996,
     "country": "Estonia",
     "pop": 1417736,
     "emp": 619577,
     "avh": 1982,
     "left": 100,
     "top": 34
    },
    {
     "year": 1997,
     "country": "Estonia",
     "pop": 1409673,
     "emp": 623425,
     "avh": 1980,
     "left": 100,
     "top": 34
    },
    {
     "year": 1998,
     "country": "Estonia",
     "pop": 1406349,
     "emp": 616190,
     "avh": 1980,
     "left": 100,
     "top": 34
    },
    {
     "year": 1999,
     "country": "Estonia",
     "pop": 1403789,
     "emp": 592369,
     "avh": 1977,
     "left": 100,
     "top": 34
    },
    {
     "year": 2000,
     "country": "Estonia",
     "pop": 1399112,
     "emp": 599835,
     "avh": 1977,
     "left": 100,
     "top": 34
    },
    {
     "year": 2001,
     "country": "Estonia",
     "pop": 1391730,
     "emp": 603868,
     "avh": 1970,
     "left": 100,
     "top": 34
    },
    {
     "year": 2002,
     "country": "Estonia",
     "pop": 1382732,
     "emp": 603674,
     "avh": 1972,
     "left": 100,
     "top": 34
    },
    {
     "year": 2003,
     "country": "Estonia",
     "pop": 1372909,
     "emp": 616073,
     "avh": 1978,
     "left": 100,
     "top": 34
    },
    {
     "year": 2004,
     "country": "Estonia",
     "pop": 1363565,
     "emp": 613091,
     "avh": 1986,
     "left": 100,
     "top": 34
    },
    {
     "year": 2005,
     "country": "Estonia",
     "pop": 1355648,
     "emp": 626955,
     "avh": 2008,
     "left": 100,
     "top": 34
    },
    {
     "year": 2006,
     "country": "Estonia",
     "pop": 1349363,
     "emp": 658393,
     "avh": 2000,
     "left": 100,
     "top": 34
    },
    {
     "year": 2007,
     "country": "Estonia",
     "pop": 1344296,
     "emp": 660151,
     "avh": 1998,
     "left": 100,
     "top": 34
    },
    {
     "year": 2008,
     "country": "Estonia",
     "pop": 1340073,
     "emp": 658511,
     "avh": 1967,
     "left": 100,
     "top": 34
    },
    {
     "year": 2009,
     "country": "Estonia",
     "pop": 1336135,
     "emp": 590737,
     "avh": 1832,
     "left": 100,
     "top": 34
    },
    {
     "year": 2010,
     "country": "Estonia",
     "pop": 1332101,
     "emp": 561121,
     "avh": 1874,
     "left": 100,
     "top": 34
    },
    {
     "year": 2011,
     "country": "Estonia",
     "pop": 1327709,
     "emp": 597714,
     "avh": 1918,
     "left": 100,
     "top": 34
    },
    {
     "year": 2012,
     "country": "Estonia",
     "pop": 1323159,
     "emp": 607527,
     "avh": 1885,
     "left": 100,
     "top": 34
    },
    {
     "year": 2013,
     "country": "Estonia",
     "pop": 1319062,
     "emp": 615383,
     "avh": 1865,
     "left": 100,
     "top": 34
    },
    {
     "year": 2014,
     "country": "Estonia",
     "pop": 1316277,
     "emp": 620032,
     "avh": 1859,
     "left": 100,
     "top": 34
    },
    {
     "year": 2015,
     "country": "Estonia",
     "pop": 1315325,
     "emp": 637358,
     "avh": 1851,
     "left": 100,
     "top": 34
    },
    {
     "year": 2016,
     "country": "Estonia",
     "pop": 1316510,
     "emp": 639590,
     "avh": 1855,
     "left": 100,
     "top": 34
    },
    {
     "year": 2017,
     "country": "Estonia",
     "pop": 1319390,
     "emp": 657431,
     "avh": 1856,
     "left": 100,
     "top": 34
    },
    {
     "year": 2018,
     "country": "Estonia",
     "pop": 1322920,
     "emp": 665091,
     "avh": 1810,
     "left": 100,
     "top": 34
    },
    {
     "year": 2019,
     "country": "Estonia",
     "pop": 1325648,
     "emp": 672975,
     "avh": 1797,
     "left": 100,
     "top": 34
    },
    {
     "year": 1950,
     "country": "Finland",
     "pop": 4014173,
     "emp": 2188724,
     "avh": 2024,
     "left": 100,
     "top": 31
    },
    {
     "year": 1951,
     "country": "Finland",
     "pop": 4052623,
     "emp": 2190198,
     "avh": 2025,
     "left": 100,
     "top": 31
    },
    {
     "year": 1952,
     "country": "Finland",
     "pop": 4095880,
     "emp": 2193876,
     "avh": 2025,
     "left": 100,
     "top": 31
    },
    {
     "year": 1953,
     "country": "Finland",
     "pop": 4144844,
     "emp": 2200169,
     "avh": 2026,
     "left": 100,
     "top": 31
    },
    {
     "year": 1954,
     "country": "Finland",
     "pop": 4192407,
     "emp": 2205254,
     "avh": 2026,
     "left": 100,
     "top": 31
    },
    {
     "year": 1955,
     "country": "Finland",
     "pop": 4240470,
     "emp": 2210141,
     "avh": 2027,
     "left": 100,
     "top": 31
    },
    {
     "year": 1956,
     "country": "Finland",
     "pop": 4287332,
     "emp": 2213946,
     "avh": 2028,
     "left": 100,
     "top": 31
    },
    {
     "year": 1957,
     "country": "Finland",
     "pop": 4329687,
     "emp": 2214994,
     "avh": 2028,
     "left": 100,
     "top": 31
    },
    {
     "year": 1958,
     "country": "Finland",
     "pop": 4365534,
     "emp": 2212337,
     "avh": 2029,
     "left": 100,
     "top": 31
    },
    {
     "year": 1959,
     "country": "Finland",
     "pop": 4400480,
     "emp": 2208884,
     "avh": 2029,
     "left": 100,
     "top": 31
    },
    {
     "year": 1960,
     "country": "Finland",
     "pop": 4435426,
     "emp": 2205093,
     "avh": 2030,
     "left": 100,
     "top": 31
    },
    {
     "year": 1961,
     "country": "Finland",
     "pop": 4466871,
     "emp": 2247037,
     "avh": 2029,
     "left": 100,
     "top": 31
    },
    {
     "year": 1962,
     "country": "Finland",
     "pop": 4497351,
     "emp": 2237797,
     "avh": 2022,
     "left": 100,
     "top": 31
    },
    {
     "year": 1963,
     "country": "Finland",
     "pop": 4529259,
     "emp": 2246415,
     "avh": 2019,
     "left": 100,
     "top": 31
    },
    {
     "year": 1964,
     "country": "Finland",
     "pop": 4554526,
     "emp": 2245480,
     "avh": 2043,
     "left": 100,
     "top": 31
    },
    {
     "year": 1965,
     "country": "Finland",
     "pop": 4569735,
     "emp": 2271644,
     "avh": 2043,
     "left": 100,
     "top": 31
    },
    {
     "year": 1966,
     "country": "Finland",
     "pop": 4586894,
     "emp": 2276004,
     "avh": 2020,
     "left": 100,
     "top": 31
    },
    {
     "year": 1967,
     "country": "Finland",
     "pop": 4611802,
     "emp": 2234163,
     "avh": 2002,
     "left": 100,
     "top": 31
    },
    {
     "year": 1968,
     "country": "Finland",
     "pop": 4632554,
     "emp": 2204989,
     "avh": 1987,
     "left": 100,
     "top": 31
    },
    {
     "year": 1969,
     "country": "Finland",
     "pop": 4629866,
     "emp": 2238317,
     "avh": 1968,
     "left": 100,
     "top": 31
    },
    {
     "year": 1970,
     "country": "Finland",
     "pop": 4612366,
     "emp": 2285867,
     "avh": 1979,
     "left": 100,
     "top": 31
    },
    {
     "year": 1971,
     "country": "Finland",
     "pop": 4629380,
     "emp": 2276028,
     "avh": 1944,
     "left": 100,
     "top": 31
    },
    {
     "year": 1972,
     "country": "Finland",
     "pop": 4651172,
     "emp": 2294051,
     "avh": 1928,
     "left": 100,
     "top": 31
    },
    {
     "year": 1973,
     "country": "Finland",
     "pop": 4675456,
     "emp": 2336014,
     "avh": 1912,
     "left": 100,
     "top": 31
    },
    {
     "year": 1974,
     "country": "Finland",
     "pop": 4698779,
     "emp": 2343232,
     "avh": 1906,
     "left": 100,
     "top": 31
    },
    {
     "year": 1975,
     "country": "Finland",
     "pop": 4718749,
     "emp": 2332139,
     "avh": 1899,
     "left": 100,
     "top": 31
    },
    {
     "year": 1976,
     "country": "Finland",
     "pop": 4734437,
     "emp": 2311560,
     "avh": 1896,
     "left": 100,
     "top": 31
    },
    {
     "year": 1977,
     "country": "Finland",
     "pop": 4746932,
     "emp": 2269217,
     "avh": 1887,
     "left": 100,
     "top": 31
    },
    {
     "year": 1978,
     "country": "Finland",
     "pop": 4758252,
     "emp": 2246932,
     "avh": 1893,
     "left": 100,
     "top": 31
    },
    {
     "year": 1979,
     "country": "Finland",
     "pop": 4771345,
     "emp": 2296547,
     "avh": 1869,
     "left": 100,
     "top": 31
    },
    {
     "year": 1980,
     "country": "Finland",
     "pop": 4788243,
     "emp": 2364399,
     "avh": 1790,
     "left": 100,
     "top": 31
    },
    {
     "year": 1981,
     "country": "Finland",
     "pop": 4809813,
     "emp": 2403722,
     "avh": 1783,
     "left": 100,
     "top": 31
    },
    {
     "year": 1982,
     "country": "Finland",
     "pop": 4835100,
     "emp": 2417783,
     "avh": 1776,
     "left": 100,
     "top": 31
    },
    {
     "year": 1983,
     "country": "Finland",
     "pop": 4862178,
     "emp": 2409466,
     "avh": 1766,
     "left": 100,
     "top": 31
    },
    {
     "year": 1984,
     "country": "Finland",
     "pop": 4888204,
     "emp": 2417372,
     "avh": 1761,
     "left": 100,
     "top": 31
    },
    {
     "year": 1985,
     "country": "Finland",
     "pop": 4911220,
     "emp": 2430470,
     "avh": 1755,
     "left": 100,
     "top": 31
    },
    {
     "year": 1986,
     "country": "Finland",
     "pop": 4930341,
     "emp": 2422866,
     "avh": 1739,
     "left": 100,
     "top": 31
    },
    {
     "year": 1987,
     "country": "Finland",
     "pop": 4946373,
     "emp": 2447947,
     "avh": 1746,
     "left": 100,
     "top": 31
    },
    {
     "year": 1988,
     "country": "Finland",
     "pop": 4961087,
     "emp": 2455854,
     "avh": 1749,
     "left": 100,
     "top": 31
    },
    {
     "year": 1989,
     "country": "Finland",
     "pop": 4977115,
     "emp": 2484023,
     "avh": 1750,
     "left": 100,
     "top": 31
    },
    {
     "year": 1990,
     "country": "Finland",
     "pop": 4996222,
     "emp": 2473246,
     "avh": 1726,
     "left": 100,
     "top": 31
    },
    {
     "year": 1991,
     "country": "Finland",
     "pop": 5019125,
     "emp": 2334203,
     "avh": 1707,
     "left": 100,
     "top": 31
    },
    {
     "year": 1992,
     "country": "Finland",
     "pop": 5044925,
     "emp": 2177365,
     "avh": 1706,
     "left": 100,
     "top": 31
    },
    {
     "year": 1993,
     "country": "Finland",
     "pop": 5071789,
     "emp": 2053262,
     "avh": 1705,
     "left": 100,
     "top": 31
    },
    {
     "year": 1994,
     "country": "Finland",
     "pop": 5097097,
     "emp": 2020974,
     "avh": 1726,
     "left": 100,
     "top": 31
    },
    {
     "year": 1995,
     "country": "Finland",
     "pop": 5119005,
     "emp": 2063220,
     "avh": 1732,
     "left": 100,
     "top": 31
    },
    {
     "year": 1996,
     "country": "Finland",
     "pop": 5136979,
     "emp": 2098567,
     "avh": 1730,
     "left": 100,
     "top": 31
    },
    {
     "year": 1997,
     "country": "Finland",
     "pop": 5151746,
     "emp": 2169616,
     "avh": 1726,
     "left": 100,
     "top": 31
    },
    {
     "year": 1998,
     "country": "Finland",
     "pop": 5164242,
     "emp": 2212403,
     "avh": 1716,
     "left": 100,
     "top": 31
    },
    {
     "year": 1999,
     "country": "Finland",
     "pop": 5175926,
     "emp": 2257859,
     "avh": 1716,
     "left": 100,
     "top": 31
    },
    {
     "year": 2000,
     "country": "Finland",
     "pop": 5187954,
     "emp": 2305018,
     "avh": 1704,
     "left": 100,
     "top": 31
    },
    {
     "year": 2001,
     "country": "Finland",
     "pop": 5200477,
     "emp": 2341113,
     "avh": 1689,
     "left": 100,
     "top": 31
    },
    {
     "year": 2002,
     "country": "Finland",
     "pop": 5213366,
     "emp": 2370204,
     "avh": 1682,
     "left": 100,
     "top": 31
    },
    {
     "year": 2003,
     "country": "Finland",
     "pop": 5227093,
     "emp": 2376400,
     "avh": 1676,
     "left": 100,
     "top": 31
    },
    {
     "year": 2004,
     "country": "Finland",
     "pop": 5242170,
     "emp": 2388879,
     "avh": 1677,
     "left": 100,
     "top": 31
    },
    {
     "year": 2005,
     "country": "Finland",
     "pop": 5258927,
     "emp": 2424816,
     "avh": 1667,
     "left": 100,
     "top": 31
    },
    {
     "year": 2006,
     "country": "Finland",
     "pop": 5277491,
     "emp": 2469651,
     "avh": 1661,
     "left": 100,
     "top": 31
    },
    {
     "year": 2007,
     "country": "Finland",
     "pop": 5297739,
     "emp": 2523195,
     "avh": 1658,
     "left": 100,
     "top": 31
    },
    {
     "year": 2008,
     "country": "Finland",
     "pop": 5319449,
     "emp": 2578032,
     "avh": 1653,
     "left": 100,
     "top": 31
    },
    {
     "year": 2009,
     "country": "Finland",
     "pop": 5342262,
     "emp": 2511394,
     "avh": 1632,
     "left": 100,
     "top": 31
    },
    {
     "year": 2010,
     "country": "Finland",
     "pop": 5365782,
     "emp": 2495830,
     "avh": 1637,
     "left": 100,
     "top": 31
    },
    {
     "year": 2011,
     "country": "Finland",
     "pop": 5390038,
     "emp": 2535330,
     "avh": 1630,
     "left": 100,
     "top": 31
    },
    {
     "year": 2012,
     "country": "Finland",
     "pop": 5414770,
     "emp": 2556477,
     "avh": 1619,
     "left": 100,
     "top": 31
    },
    {
     "year": 2013,
     "country": "Finland",
     "pop": 5438982,
     "emp": 2536704,
     "avh": 1612,
     "left": 100,
     "top": 31
    },
    {
     "year": 2014,
     "country": "Finland",
     "pop": 5461411,
     "emp": 2525653,
     "avh": 1609,
     "left": 100,
     "top": 31
    },
    {
     "year": 2015,
     "country": "Finland",
     "pop": 5481122,
     "emp": 2524532,
     "avh": 1607,
     "left": 100,
     "top": 31
    },
    {
     "year": 2016,
     "country": "Finland",
     "pop": 5497713,
     "emp": 2536311,
     "avh": 1606,
     "left": 100,
     "top": 31
    },
    {
     "year": 2017,
     "country": "Finland",
     "pop": 5511371,
     "emp": 2563268,
     "avh": 1600,
     "left": 100,
     "top": 31
    },
    {
     "year": 2018,
     "country": "Finland",
     "pop": 5522576,
     "emp": 2629456,
     "avh": 1597,
     "left": 100,
     "top": 31
    },
    {
     "year": 2019,
     "country": "Finland",
     "pop": 5532156,
     "emp": 2673705,
     "avh": 1590,
     "left": 100,
     "top": 31
    },
    {
     "year": 1950,
     "country": "France",
     "pop": 42549913,
     "emp": 19553665,
     "avh": 2350,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1951,
     "country": "France",
     "pop": 42894336,
     "emp": 19687841,
     "avh": 2360,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1952,
     "country": "France",
     "pop": 43216300,
     "emp": 19767774,
     "avh": 2338,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1953,
     "country": "France",
     "pop": 43527994,
     "emp": 19693927,
     "avh": 2313,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1954,
     "country": "France",
     "pop": 43854788,
     "emp": 19733753,
     "avh": 2316,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1955,
     "country": "France",
     "pop": 44251370,
     "emp": 19887998,
     "avh": 2292,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1956,
     "country": "France",
     "pop": 44691172,
     "emp": 20138397,
     "avh": 2236,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1957,
     "country": "France",
     "pop": 45186473,
     "emp": 20292482,
     "avh": 2199,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1958,
     "country": "France",
     "pop": 45688406,
     "emp": 20243246,
     "avh": 2179,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1959,
     "country": "France",
     "pop": 46163600,
     "emp": 20134092,
     "avh": 2179,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1960,
     "country": "France",
     "pop": 46619302,
     "emp": 20168272,
     "avh": 2188,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1961,
     "country": "France",
     "pop": 47163724,
     "emp": 20160270,
     "avh": 2165,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1962,
     "country": "France",
     "pop": 48125119,
     "emp": 20144119,
     "avh": 2177,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1963,
     "country": "France",
     "pop": 48835973,
     "emp": 20294364,
     "avh": 2159,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1964,
     "country": "France",
     "pop": 49394349,
     "emp": 20510509,
     "avh": 2166,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1965,
     "country": "France",
     "pop": 49839568,
     "emp": 20573507,
     "avh": 2153,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1966,
     "country": "France",
     "pop": 50293055,
     "emp": 20732099,
     "avh": 2144,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1967,
     "country": "France",
     "pop": 50688794,
     "emp": 20789911,
     "avh": 2110,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1968,
     "country": "France",
     "pop": 51073092,
     "emp": 20736871,
     "avh": 2086,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1969,
     "country": "France",
     "pop": 51509285,
     "emp": 21049053,
     "avh": 2011,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1970,
     "country": "France",
     "pop": 51957738,
     "emp": 21332313,
     "avh": 1992,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1971,
     "country": "France",
     "pop": 52371342,
     "emp": 21391223,
     "avh": 1989,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1972,
     "country": "France",
     "pop": 52793138,
     "emp": 21505912,
     "avh": 1936,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1973,
     "country": "France",
     "pop": 53207734,
     "emp": 21794689,
     "avh": 1920,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1974,
     "country": "France",
     "pop": 53592233,
     "emp": 22006851,
     "avh": 1888,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1975,
     "country": "France",
     "pop": 53931390,
     "emp": 21866426,
     "avh": 1862,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1976,
     "country": "France",
     "pop": 54220022,
     "emp": 22082853,
     "avh": 1888,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1977,
     "country": "France",
     "pop": 54467702,
     "emp": 22290710,
     "avh": 1850,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1978,
     "country": "France",
     "pop": 54691851,
     "emp": 22423839,
     "avh": 1819,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1979,
     "country": "France",
     "pop": 54917118,
     "emp": 22571340,
     "avh": 1815,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1980,
     "country": "France",
     "pop": 55161527,
     "emp": 22662170,
     "avh": 1806,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1981,
     "country": "France",
     "pop": 55430296,
     "emp": 22630777,
     "avh": 1785,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1982,
     "country": "France",
     "pop": 55718933,
     "emp": 22685930,
     "avh": 1714,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1983,
     "country": "France",
     "pop": 56023770,
     "emp": 22690383,
     "avh": 1696,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1984,
     "country": "France",
     "pop": 56337666,
     "emp": 22572727,
     "avh": 1689,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1985,
     "country": "France",
     "pop": 56654696,
     "emp": 22552560,
     "avh": 1654,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1986,
     "country": "France",
     "pop": 56976123,
     "emp": 22697038,
     "avh": 1648,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1987,
     "country": "France",
     "pop": 57302663,
     "emp": 22922472,
     "avh": 1659,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1988,
     "country": "France",
     "pop": 57627105,
     "emp": 23169607,
     "avh": 1667,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1989,
     "country": "France",
     "pop": 57940212,
     "emp": 23468286,
     "avh": 1651,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1990,
     "country": "France",
     "pop": 58235697,
     "emp": 23659503,
     "avh": 1644,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1991,
     "country": "France",
     "pop": 58512369,
     "emp": 23685340,
     "avh": 1637,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1992,
     "country": "France",
     "pop": 58773365,
     "emp": 23526134,
     "avh": 1635,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1993,
     "country": "France",
     "pop": 59022519,
     "emp": 23282968,
     "avh": 1626,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1994,
     "country": "France",
     "pop": 59265653,
     "emp": 23411144,
     "avh": 1623,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1995,
     "country": "France",
     "pop": 59508484,
     "emp": 23658521,
     "avh": 1601,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1996,
     "country": "France",
     "pop": 59748767,
     "emp": 23806283,
     "avh": 1597,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1997,
     "country": "France",
     "pop": 59988873,
     "emp": 24003852,
     "avh": 1595,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1998,
     "country": "France",
     "pop": 60244337,
     "emp": 24439313,
     "avh": 1585,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1999,
     "country": "France",
     "pop": 60535179,
     "emp": 25020395,
     "avh": 1578,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2000,
     "country": "France",
     "pop": 60874357,
     "emp": 25625225,
     "avh": 1558,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2001,
     "country": "France",
     "pop": 61269223,
     "emp": 25974290,
     "avh": 1537,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2002,
     "country": "France",
     "pop": 61712083,
     "emp": 26102304,
     "avh": 1503,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2003,
     "country": "France",
     "pop": 62182111,
     "emp": 26124198,
     "avh": 1507,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2004,
     "country": "France",
     "pop": 62649664,
     "emp": 26165403,
     "avh": 1530,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2005,
     "country": "France",
     "pop": 63092888,
     "emp": 26334571,
     "avh": 1532,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2006,
     "country": "France",
     "pop": 63503047,
     "emp": 26609586,
     "avh": 1515,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2007,
     "country": "France",
     "pop": 63884679,
     "emp": 26991434,
     "avh": 1536,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2008,
     "country": "France",
     "pop": 64245428,
     "emp": 27131742,
     "avh": 1542,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2009,
     "country": "France",
     "pop": 64598474,
     "emp": 26832876,
     "avh": 1531,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2010,
     "country": "France",
     "pop": 64952503,
     "emp": 26876161,
     "avh": 1539,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2011,
     "country": "France",
     "pop": 65310392,
     "emp": 27098382,
     "avh": 1546,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2012,
     "country": "France",
     "pop": 65665818,
     "emp": 27208675,
     "avh": 1540,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2013,
     "country": "France",
     "pop": 66007876,
     "emp": 27215930,
     "avh": 1526,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2014,
     "country": "France",
     "pop": 66321390,
     "emp": 27312215,
     "avh": 1518,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2015,
     "country": "France",
     "pop": 66596315,
     "emp": 27385076,
     "avh": 1519,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2016,
     "country": "France",
     "pop": 66828164,
     "emp": 27584110,
     "avh": 1522,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2017,
     "country": "France",
     "pop": 67022411,
     "emp": 27881641,
     "avh": 1505,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2018,
     "country": "France",
     "pop": 67191027,
     "emp": 28182064,
     "avh": 1495,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2019,
     "country": "France",
     "pop": 67351247,
     "emp": 28532564,
     "avh": 1504,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 1950,
     "country": "United Kingdom",
     "pop": 50074245,
     "emp": 23207902,
     "avh": 2183,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1951,
     "country": "United Kingdom",
     "pop": 50237075,
     "emp": 23553173,
     "avh": 2192,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1952,
     "country": "United Kingdom",
     "pop": 50376927,
     "emp": 23540199,
     "avh": 2160,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1953,
     "country": "United Kingdom",
     "pop": 50539754,
     "emp": 23652959,
     "avh": 2164,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1954,
     "country": "United Kingdom",
     "pop": 50711574,
     "emp": 23987253,
     "avh": 2168,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1955,
     "country": "United Kingdom",
     "pop": 50892383,
     "emp": 24246706,
     "avh": 2167,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1956,
     "country": "United Kingdom",
     "pop": 51130132,
     "emp": 24462247,
     "avh": 2153,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1957,
     "country": "United Kingdom",
     "pop": 51375875,
     "emp": 24491188,
     "avh": 2132,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1958,
     "country": "United Kingdom",
     "pop": 51597641,
     "emp": 24226747,
     "avh": 2102,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1959,
     "country": "United Kingdom",
     "pop": 51901322,
     "emp": 23709842,
     "avh": 2112,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1960,
     "country": "United Kingdom",
     "pop": 52316885,
     "emp": 24131948,
     "avh": 2103,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1961,
     "country": "United Kingdom",
     "pop": 52751425,
     "emp": 24405368,
     "avh": 2066,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1962,
     "country": "United Kingdom",
     "pop": 53235915,
     "emp": 24579999,
     "avh": 2029,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1963,
     "country": "United Kingdom",
     "pop": 53568565,
     "emp": 24608938,
     "avh": 2020,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1964,
     "country": "United Kingdom",
     "pop": 53934181,
     "emp": 24897327,
     "avh": 2020,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1965,
     "country": "United Kingdom",
     "pop": 54292800,
     "emp": 25150791,
     "avh": 1997,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1966,
     "country": "United Kingdom",
     "pop": 54585495,
     "emp": 25301473,
     "avh": 1941,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1967,
     "country": "United Kingdom",
     "pop": 54901160,
     "emp": 24939239,
     "avh": 1929,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1968,
     "country": "United Kingdom",
     "pop": 55155893,
     "emp": 24788560,
     "avh": 1922,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1969,
     "country": "United Kingdom",
     "pop": 55402631,
     "emp": 24804523,
     "avh": 1912,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1970,
     "country": "United Kingdom",
     "pop": 55573453,
     "emp": 24700746,
     "avh": 1870,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1971,
     "country": "United Kingdom",
     "pop": 55748531,
     "emp": 24437534,
     "avh": 1830,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1972,
     "country": "United Kingdom",
     "pop": 55892418,
     "emp": 24497470,
     "avh": 1851,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1973,
     "country": "United Kingdom",
     "pop": 56006296,
     "emp": 24874528,
     "avh": 1860,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1974,
     "country": "United Kingdom",
     "pop": 56092066,
     "emp": 24970518,
     "avh": 1845,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1975,
     "country": "United Kingdom",
     "pop": 56152333,
     "emp": 24905454,
     "avh": 1814,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1976,
     "country": "United Kingdom",
     "pop": 56188348,
     "emp": 24778213,
     "avh": 1807,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1977,
     "country": "United Kingdom",
     "pop": 56203595,
     "emp": 24819860,
     "avh": 1816,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1978,
     "country": "United Kingdom",
     "pop": 56205913,
     "emp": 24957027,
     "avh": 1818,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1979,
     "country": "United Kingdom",
     "pop": 56205083,
     "emp": 25184982,
     "avh": 1815,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1980,
     "country": "United Kingdom",
     "pop": 56209171,
     "emp": 25039552,
     "avh": 1785,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1981,
     "country": "United Kingdom",
     "pop": 56220735,
     "emp": 24359867,
     "avh": 1749,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1982,
     "country": "United Kingdom",
     "pop": 56241412,
     "emp": 23908966,
     "avh": 1745,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1983,
     "country": "United Kingdom",
     "pop": 56276798,
     "emp": 23730625,
     "avh": 1739,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1984,
     "country": "United Kingdom",
     "pop": 56332901,
     "emp": 24229373,
     "avh": 1745,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1985,
     "country": "United Kingdom",
     "pop": 56413553,
     "emp": 24502725,
     "avh": 1748,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1986,
     "country": "United Kingdom",
     "pop": 56522503,
     "emp": 24626974,
     "avh": 1742,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1987,
     "country": "United Kingdom",
     "pop": 56658270,
     "emp": 25095529,
     "avh": 1747,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1988,
     "country": "United Kingdom",
     "pop": 56812757,
     "emp": 25911806,
     "avh": 1754,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1989,
     "country": "United Kingdom",
     "pop": 56974297,
     "emp": 26585351,
     "avh": 1758,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1990,
     "country": "United Kingdom",
     "pop": 57134391,
     "emp": 26703500,
     "avh": 1745,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1991,
     "country": "United Kingdom",
     "pop": 57290785,
     "emp": 25989843,
     "avh": 1720,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1992,
     "country": "United Kingdom",
     "pop": 57446037,
     "emp": 25371501,
     "avh": 1714,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1993,
     "country": "United Kingdom",
     "pop": 57602284,
     "emp": 25143829,
     "avh": 1710,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1994,
     "country": "United Kingdom",
     "pop": 57763378,
     "emp": 25350570,
     "avh": 1720,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1995,
     "country": "United Kingdom",
     "pop": 57932453,
     "emp": 25669792,
     "avh": 1722,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1996,
     "country": "United Kingdom",
     "pop": 58113557,
     "emp": 25924554,
     "avh": 1722,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1997,
     "country": "United Kingdom",
     "pop": 58307313,
     "emp": 26408014,
     "avh": 1721,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1998,
     "country": "United Kingdom",
     "pop": 58509974,
     "emp": 26690898,
     "avh": 1716,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1999,
     "country": "United Kingdom",
     "pop": 58715854,
     "emp": 27067028,
     "avh": 1708,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2000,
     "country": "United Kingdom",
     "pop": 58923309,
     "emp": 27380348,
     "avh": 1692,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2001,
     "country": "United Kingdom",
     "pop": 59124288,
     "emp": 27595714,
     "avh": 1695,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2002,
     "country": "United Kingdom",
     "pop": 59326294,
     "emp": 27803613,
     "avh": 1678,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2003,
     "country": "United Kingdom",
     "pop": 59561432,
     "emp": 28060052,
     "avh": 1669,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2004,
     "country": "United Kingdom",
     "pop": 59872753,
     "emp": 28353534,
     "avh": 1666,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2005,
     "country": "United Kingdom",
     "pop": 60287954,
     "emp": 28672586,
     "avh": 1669,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2006,
     "country": "United Kingdom",
     "pop": 60821356,
     "emp": 29001075,
     "avh": 1663,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2007,
     "country": "United Kingdom",
     "pop": 61455162,
     "emp": 29315742,
     "avh": 1665,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2008,
     "country": "United Kingdom",
     "pop": 62145097,
     "emp": 29663253,
     "avh": 1660,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2009,
     "country": "United Kingdom",
     "pop": 62828616,
     "emp": 29288875,
     "avh": 1638,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2010,
     "country": "United Kingdom",
     "pop": 63459808,
     "emp": 29425117,
     "avh": 1643,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2011,
     "country": "United Kingdom",
     "pop": 64021919,
     "emp": 29605070,
     "avh": 1639,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2012,
     "country": "United Kingdom",
     "pop": 64525312,
     "emp": 29953094,
     "avh": 1655,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2013,
     "country": "United Kingdom",
     "pop": 64984018,
     "emp": 30314039,
     "avh": 1665,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2014,
     "country": "United Kingdom",
     "pop": 65423047,
     "emp": 31011104,
     "avh": 1672,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2015,
     "country": "United Kingdom",
     "pop": 65860146,
     "emp": 31506929,
     "avh": 1669,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2016,
     "country": "United Kingdom",
     "pop": 66297944,
     "emp": 31938474,
     "avh": 1667,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2017,
     "country": "United Kingdom",
     "pop": 66727461,
     "emp": 32243064,
     "avh": 1668,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2018,
     "country": "United Kingdom",
     "pop": 67141684,
     "emp": 32631744,
     "avh": 1663,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2019,
     "country": "United Kingdom",
     "pop": 67530172,
     "emp": 32982498,
     "avh": 1667,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 1951,
     "country": "Greece",
     "pop": 7534016,
     "emp": 3375123,
     "avh": 2312,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1952,
     "country": "Greece",
     "pop": 7619588,
     "emp": 3411953,
     "avh": 2302,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1953,
     "country": "Greece",
     "pop": 7702200,
     "emp": 3447424,
     "avh": 2293,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1954,
     "country": "Greece",
     "pop": 7777396,
     "emp": 3479544,
     "avh": 2283,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1955,
     "country": "Greece",
     "pop": 7848462,
     "emp": 3509788,
     "avh": 2274,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1956,
     "country": "Greece",
     "pop": 7912974,
     "emp": 3537074,
     "avh": 2265,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1957,
     "country": "Greece",
     "pop": 7977221,
     "emp": 3556257,
     "avh": 2255,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1958,
     "country": "Greece",
     "pop": 8053002,
     "emp": 3582899,
     "avh": 2246,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1959,
     "country": "Greece",
     "pop": 8136784,
     "emp": 3592490,
     "avh": 2237,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1960,
     "country": "Greece",
     "pop": 8205010,
     "emp": 3608476,
     "avh": 2227,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1961,
     "country": "Greece",
     "pop": 8274617,
     "emp": 3622870,
     "avh": 2217,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1962,
     "country": "Greece",
     "pop": 8324062,
     "emp": 3586620,
     "avh": 2208,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1963,
     "country": "Greece",
     "pop": 8354993,
     "emp": 3536403,
     "avh": 2198,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1964,
     "country": "Greece",
     "pop": 8385345,
     "emp": 3490451,
     "avh": 2188,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1965,
     "country": "Greece",
     "pop": 8424662,
     "emp": 3466034,
     "avh": 2178,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1966,
     "country": "Greece",
     "pop": 8487049,
     "emp": 3434796,
     "avh": 2169,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1967,
     "country": "Greece",
     "pop": 8588328,
     "emp": 3393641,
     "avh": 2159,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1968,
     "country": "Greece",
     "pop": 8612294,
     "emp": 3352914,
     "avh": 2149,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1969,
     "country": "Greece",
     "pop": 8643824,
     "emp": 3342785,
     "avh": 2140,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1970,
     "country": "Greece",
     "pop": 8663571,
     "emp": 3339479,
     "avh": 2098,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1971,
     "country": "Greece",
     "pop": 8716873,
     "emp": 3355520,
     "avh": 2099,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1972,
     "country": "Greece",
     "pop": 8774514,
     "emp": 3372594,
     "avh": 2101,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1973,
     "country": "Greece",
     "pop": 8840315,
     "emp": 3416343,
     "avh": 2102,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1974,
     "country": "Greece",
     "pop": 8919244,
     "emp": 3437624,
     "avh": 2103,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1975,
     "country": "Greece",
     "pop": 9014085,
     "emp": 3445169,
     "avh": 2105,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1976,
     "country": "Greece",
     "pop": 9127049,
     "emp": 3483696,
     "avh": 2106,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1977,
     "country": "Greece",
     "pop": 9254978,
     "emp": 3506772,
     "avh": 2107,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1978,
     "country": "Greece",
     "pop": 9388728,
     "emp": 3525628,
     "avh": 2109,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1979,
     "country": "Greece",
     "pop": 9515746,
     "emp": 3567875,
     "avh": 2111,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1980,
     "country": "Greece",
     "pop": 9627002,
     "emp": 3624330,
     "avh": 2111,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1981,
     "country": "Greece",
     "pop": 9719841,
     "emp": 3815257,
     "avh": 2111,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1982,
     "country": "Greece",
     "pop": 9796829,
     "emp": 3781866,
     "avh": 2111,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1983,
     "country": "Greece",
     "pop": 9860739,
     "emp": 3804280,
     "avh": 2108,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1984,
     "country": "Greece",
     "pop": 9916482,
     "emp": 3798947,
     "avh": 2108,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1985,
     "country": "Greece",
     "pop": 9968238,
     "emp": 3900651,
     "avh": 2107,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1986,
     "country": "Greece",
     "pop": 10015119,
     "emp": 3921319,
     "avh": 2107,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1987,
     "country": "Greece",
     "pop": 10057297,
     "emp": 3924996,
     "avh": 2110,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1988,
     "country": "Greece",
     "pop": 10101352,
     "emp": 4004633,
     "avh": 2107,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1989,
     "country": "Greece",
     "pop": 10155723,
     "emp": 4021696,
     "avh": 2109,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1990,
     "country": "Greece",
     "pop": 10225992,
     "emp": 4062554,
     "avh": 2111,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1991,
     "country": "Greece",
     "pop": 10315107,
     "emp": 3977802,
     "avh": 2112,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1992,
     "country": "Greece",
     "pop": 10420236,
     "emp": 4045193,
     "avh": 2112,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1993,
     "country": "Greece",
     "pop": 10533815,
     "emp": 4099038,
     "avh": 2112,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1994,
     "country": "Greece",
     "pop": 10644949,
     "emp": 4198668,
     "avh": 2110,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1995,
     "country": "Greece",
     "pop": 10745503,
     "emp": 4256537,
     "avh": 2110,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1996,
     "country": "Greece",
     "pop": 10832141,
     "emp": 4247651,
     "avh": 2109,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1997,
     "country": "Greece",
     "pop": 10906257,
     "emp": 4238947,
     "avh": 2107,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1998,
     "country": "Greece",
     "pop": 10970121,
     "emp": 4426493,
     "avh": 2108,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1999,
     "country": "Greece",
     "pop": 11027900,
     "emp": 4434240,
     "avh": 2104,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2000,
     "country": "Greece",
     "pop": 11082104,
     "emp": 4452402,
     "avh": 2107,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2001,
     "country": "Greece",
     "pop": 11134457,
     "emp": 4466327,
     "avh": 2101,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2002,
     "country": "Greece",
     "pop": 11182305,
     "emp": 4578461,
     "avh": 2093,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2003,
     "country": "Greece",
     "pop": 11218884,
     "emp": 4645930,
     "avh": 2091,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2004,
     "country": "Greece",
     "pop": 11234992,
     "emp": 4753020,
     "avh": 2082,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2005,
     "country": "Greece",
     "pop": 11224791,
     "emp": 4778794,
     "avh": 2136,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2006,
     "country": "Greece",
     "pop": 11185228,
     "emp": 4833973,
     "avh": 2125,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2007,
     "country": "Greece",
     "pop": 11120358,
     "emp": 4858280,
     "avh": 2110,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2008,
     "country": "Greece",
     "pop": 11040309,
     "emp": 4872008,
     "avh": 2106,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2009,
     "country": "Greece",
     "pop": 10959272,
     "emp": 4796369,
     "avh": 2081,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2010,
     "country": "Greece",
     "pop": 10887637,
     "emp": 4637154,
     "avh": 2019,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2011,
     "country": "Greece",
     "pop": 10829079,
     "emp": 4301328,
     "avh": 2037,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2012,
     "country": "Greece",
     "pop": 10781125,
     "emp": 4033717,
     "avh": 2055,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2013,
     "country": "Greece",
     "pop": 10740500,
     "emp": 3941757,
     "avh": 2059,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2014,
     "country": "Greece",
     "pop": 10701456,
     "emp": 3990397,
     "avh": 2020,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2015,
     "country": "Greece",
     "pop": 10659750,
     "emp": 4030077,
     "avh": 2031,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2016,
     "country": "Greece",
     "pop": 10615185,
     "emp": 4048786,
     "avh": 2030,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2017,
     "country": "Greece",
     "pop": 10569450,
     "emp": 4101668,
     "avh": 2045,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2018,
     "country": "Greece",
     "pop": 10522246,
     "emp": 4161405,
     "avh": 2044,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2019,
     "country": "Greece",
     "pop": 10473455,
     "emp": 4235072,
     "avh": 2036,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 1960,
     "country": "China, Hong Kong SAR",
     "pop": 2989794,
     "emp": 1107837,
     "avh": 2723,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1961,
     "country": "China, Hong Kong SAR",
     "pop": 3080014,
     "emp": 1150487,
     "avh": 2703,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1962,
     "country": "China, Hong Kong SAR",
     "pop": 3213302,
     "emp": 1209893,
     "avh": 2683,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1963,
     "country": "China, Hong Kong SAR",
     "pop": 3325785,
     "emp": 1262202,
     "avh": 2663,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1964,
     "country": "China, Hong Kong SAR",
     "pop": 3407158,
     "emp": 1303284,
     "avh": 2643,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1965,
     "country": "China, Hong Kong SAR",
     "pop": 3497863,
     "emp": 1348451,
     "avh": 2624,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1966,
     "country": "China, Hong Kong SAR",
     "pop": 3528974,
     "emp": 1371008,
     "avh": 2604,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1967,
     "country": "China, Hong Kong SAR",
     "pop": 3619291,
     "emp": 1416931,
     "avh": 2585,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1968,
     "country": "China, Hong Kong SAR",
     "pop": 3696969,
     "emp": 1458408,
     "avh": 2566,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1969,
     "country": "China, Hong Kong SAR",
     "pop": 3756468,
     "emp": 1493124,
     "avh": 2547,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1970,
     "country": "China, Hong Kong SAR",
     "pop": 3848924,
     "emp": 1541396,
     "avh": 2528,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1971,
     "country": "China, Hong Kong SAR",
     "pop": 3913599,
     "emp": 1571017,
     "avh": 2527,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1972,
     "country": "China, Hong Kong SAR",
     "pop": 3974197,
     "emp": 1620712,
     "avh": 2525,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1973,
     "country": "China, Hong Kong SAR",
     "pop": 4037794,
     "emp": 1656960,
     "avh": 2523,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1974,
     "country": "China, Hong Kong SAR",
     "pop": 4113990,
     "emp": 1701600,
     "avh": 2522,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1975,
     "country": "China, Hong Kong SAR",
     "pop": 4208955,
     "emp": 1790215,
     "avh": 2521,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1976,
     "country": "China, Hong Kong SAR",
     "pop": 4326336,
     "emp": 1861061,
     "avh": 2518,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1977,
     "country": "China, Hong Kong SAR",
     "pop": 4462402,
     "emp": 1965161,
     "avh": 2507,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1978,
     "country": "China, Hong Kong SAR",
     "pop": 4607029,
     "emp": 2072148,
     "avh": 2497,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1979,
     "country": "China, Hong Kong SAR",
     "pop": 4745879,
     "emp": 2102538,
     "avh": 2488,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1980,
     "country": "China, Hong Kong SAR",
     "pop": 4868742,
     "emp": 2253946,
     "avh": 2477,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1981,
     "country": "China, Hong Kong SAR",
     "pop": 4971687,
     "emp": 2420594,
     "avh": 2466,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1982,
     "country": "China, Hong Kong SAR",
     "pop": 5058040,
     "emp": 2421484,
     "avh": 2441,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1983,
     "country": "China, Hong Kong SAR",
     "pop": 5133709,
     "emp": 2439241,
     "avh": 2410,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1984,
     "country": "China, Hong Kong SAR",
     "pop": 5207839,
     "emp": 2517076,
     "avh": 2381,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1985,
     "country": "China, Hong Kong SAR",
     "pop": 5287022,
     "emp": 2557643,
     "avh": 2356,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1986,
     "country": "China, Hong Kong SAR",
     "pop": 5373447,
     "emp": 2633094,
     "avh": 2360,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1987,
     "country": "China, Hong Kong SAR",
     "pop": 5464705,
     "emp": 2694984,
     "avh": 2324,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1988,
     "country": "China, Hong Kong SAR",
     "pop": 5557391,
     "emp": 2741996,
     "avh": 2372,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1989,
     "country": "China, Hong Kong SAR",
     "pop": 5646273,
     "emp": 2743146,
     "avh": 2314,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1990,
     "country": "China, Hong Kong SAR",
     "pop": 5727938,
     "emp": 2730759,
     "avh": 2278,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1991,
     "country": "China, Hong Kong SAR",
     "pop": 5800037,
     "emp": 2773061,
     "avh": 2309,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1992,
     "country": "China, Hong Kong SAR",
     "pop": 5864739,
     "emp": 2760169,
     "avh": 2224,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1993,
     "country": "China, Hong Kong SAR",
     "pop": 5928334,
     "emp": 2789223,
     "avh": 2287,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1994,
     "country": "China, Hong Kong SAR",
     "pop": 5999617,
     "emp": 2845303,
     "avh": 2291,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1995,
     "country": "China, Hong Kong SAR",
     "pop": 6084227,
     "emp": 2849564,
     "avh": 2254,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1996,
     "country": "China, Hong Kong SAR",
     "pop": 6185585,
     "emp": 2969178,
     "avh": 2304,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1997,
     "country": "China, Hong Kong SAR",
     "pop": 6299921,
     "emp": 3107355,
     "avh": 2257,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1998,
     "country": "China, Hong Kong SAR",
     "pop": 6416992,
     "emp": 3108067,
     "avh": 2259,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1999,
     "country": "China, Hong Kong SAR",
     "pop": 6522466,
     "emp": 3114255,
     "avh": 2301,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2000,
     "country": "China, Hong Kong SAR",
     "pop": 6606327,
     "emp": 3202621,
     "avh": 2330,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2001,
     "country": "China, Hong Kong SAR",
     "pop": 6664772,
     "emp": 3283005,
     "avh": 2326,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2002,
     "country": "China, Hong Kong SAR",
     "pop": 6701775,
     "emp": 3268836,
     "avh": 2343,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2003,
     "country": "China, Hong Kong SAR",
     "pop": 6724677,
     "emp": 3237178,
     "avh": 2330,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2004,
     "country": "China, Hong Kong SAR",
     "pop": 6744566,
     "emp": 3303688,
     "avh": 2354,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2005,
     "country": "China, Hong Kong SAR",
     "pop": 6769574,
     "emp": 3362809,
     "avh": 2346,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2006,
     "country": "China, Hong Kong SAR",
     "pop": 6802080,
     "emp": 3414788,
     "avh": 2315,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2007,
     "country": "China, Hong Kong SAR",
     "pop": 6840015,
     "emp": 3487901,
     "avh": 2327,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2008,
     "country": "China, Hong Kong SAR",
     "pop": 6881863,
     "emp": 3533772,
     "avh": 2277,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2009,
     "country": "China, Hong Kong SAR",
     "pop": 6924642,
     "emp": 3500638,
     "avh": 2251,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2010,
     "country": "China, Hong Kong SAR",
     "pop": 6966331,
     "emp": 3493873,
     "avh": 2302,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2011,
     "country": "China, Hong Kong SAR",
     "pop": 7006590,
     "emp": 3583221,
     "avh": 2256,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2012,
     "country": "China, Hong Kong SAR",
     "pop": 7046848,
     "emp": 3650610,
     "avh": 2233,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2013,
     "country": "China, Hong Kong SAR",
     "pop": 7088778,
     "emp": 3719259,
     "avh": 2225,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2014,
     "country": "China, Hong Kong SAR",
     "pop": 7134670,
     "emp": 3743985,
     "avh": 2175,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2015,
     "country": "China, Hong Kong SAR",
     "pop": 7185996,
     "emp": 3777157,
     "avh": 2185,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2016,
     "country": "China, Hong Kong SAR",
     "pop": 7243542,
     "emp": 3781842,
     "avh": 2176,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2017,
     "country": "China, Hong Kong SAR",
     "pop": 7306322,
     "emp": 3827965,
     "avh": 2147,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2018,
     "country": "China, Hong Kong SAR",
     "pop": 7371730,
     "emp": 3873706,
     "avh": 2147,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2019,
     "country": "China, Hong Kong SAR",
     "pop": 7436154,
     "emp": 3863810,
     "avh": 2147,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 1995,
     "country": "Croatia",
     "pop": 4616766,
     "emp": 1660306,
     "avh": 1923,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 1996,
     "country": "Croatia",
     "pop": 4574888,
     "emp": 1667647,
     "avh": 1923,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 1997,
     "country": "Croatia",
     "pop": 4532401,
     "emp": 1662696,
     "avh": 1923,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 1998,
     "country": "Croatia",
     "pop": 4491907,
     "emp": 1644883,
     "avh": 1923,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 1999,
     "country": "Croatia",
     "pop": 4456437,
     "emp": 1639567,
     "avh": 1923,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2000,
     "country": "Croatia",
     "pop": 4428075,
     "emp": 1670290,
     "avh": 1922,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2001,
     "country": "Croatia",
     "pop": 4408075,
     "emp": 1688919,
     "avh": 1923,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2002,
     "country": "Croatia",
     "pop": 4395799,
     "emp": 1696880,
     "avh": 1923,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2003,
     "country": "Croatia",
     "pop": 4388895,
     "emp": 1736275,
     "avh": 1924,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2004,
     "country": "Croatia",
     "pop": 4383882,
     "emp": 1747800,
     "avh": 1926,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2005,
     "country": "Croatia",
     "pop": 4378058,
     "emp": 1761981,
     "avh": 1926,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2006,
     "country": "Croatia",
     "pop": 4370777,
     "emp": 1814037,
     "avh": 1928,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2007,
     "country": "Croatia",
     "pop": 4362426,
     "emp": 1867939,
     "avh": 1930,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2008,
     "country": "Croatia",
     "pop": 4352636,
     "emp": 1904367,
     "avh": 1932,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2009,
     "country": "Croatia",
     "pop": 4341264,
     "emp": 1887152,
     "avh": 1928,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2010,
     "country": "Croatia",
     "pop": 4328165,
     "emp": 1814759,
     "avh": 1942,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2011,
     "country": "Croatia",
     "pop": 4313099,
     "emp": 1744258,
     "avh": 1940,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2012,
     "country": "Croatia",
     "pop": 4295878,
     "emp": 1680010,
     "avh": 1923,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2013,
     "country": "Croatia",
     "pop": 4276598,
     "emp": 1633989,
     "avh": 1909,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2014,
     "country": "Croatia",
     "pop": 4255512,
     "emp": 1676635,
     "avh": 1891,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2015,
     "country": "Croatia",
     "pop": 4232874,
     "emp": 1699733,
     "avh": 1827,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2016,
     "country": "Croatia",
     "pop": 4208602,
     "emp": 1709324,
     "avh": 1834,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2017,
     "country": "Croatia",
     "pop": 4182857,
     "emp": 1754166,
     "avh": 1823,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2018,
     "country": "Croatia",
     "pop": 4156405,
     "emp": 1791939,
     "avh": 1810,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2019,
     "country": "Croatia",
     "pop": 4130304,
     "emp": 1817624,
     "avh": 1831,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 1980,
     "country": "Hungary",
     "pop": 10754286,
     "emp": 5438164,
     "avh": 2130,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1981,
     "country": "Hungary",
     "pop": 10746481,
     "emp": 5405742,
     "avh": 2129,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1982,
     "country": "Hungary",
     "pop": 10715847,
     "emp": 5365829,
     "avh": 2039,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1983,
     "country": "Hungary",
     "pop": 10669206,
     "emp": 5322946,
     "avh": 2019,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1984,
     "country": "Hungary",
     "pop": 10616744,
     "emp": 5286682,
     "avh": 1949,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1985,
     "country": "Hungary",
     "pop": 10566323,
     "emp": 5260838,
     "avh": 1923,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1986,
     "country": "Hungary",
     "pop": 10519291,
     "emp": 5251490,
     "avh": 1914,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1987,
     "country": "Hungary",
     "pop": 10474548,
     "emp": 5202182,
     "avh": 1957,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1988,
     "country": "Hungary",
     "pop": 10434543,
     "emp": 5225184,
     "avh": 1951,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1989,
     "country": "Hungary",
     "pop": 10401614,
     "emp": 5199689,
     "avh": 1927,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1990,
     "country": "Hungary",
     "pop": 10377137,
     "emp": 5126381,
     "avh": 1888,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1991,
     "country": "Hungary",
     "pop": 10363049,
     "emp": 4844193,
     "avh": 1857,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1992,
     "country": "Hungary",
     "pop": 10358619,
     "emp": 4437951,
     "avh": 1815,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1993,
     "country": "Hungary",
     "pop": 10359066,
     "emp": 4158894,
     "avh": 1815,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1994,
     "country": "Hungary",
     "pop": 10357591,
     "emp": 4023458,
     "avh": 1943,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1995,
     "country": "Hungary",
     "pop": 10349302,
     "emp": 3951457,
     "avh": 1948,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1996,
     "country": "Hungary",
     "pop": 10332453,
     "emp": 3944169,
     "avh": 1945,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1997,
     "country": "Hungary",
     "pop": 10308480,
     "emp": 3982911,
     "avh": 1954,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1998,
     "country": "Hungary",
     "pop": 10279602,
     "emp": 4017018,
     "avh": 1945,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1999,
     "country": "Hungary",
     "pop": 10249416,
     "emp": 4096072,
     "avh": 1952,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2000,
     "country": "Hungary",
     "pop": 10220507,
     "emp": 4120501,
     "avh": 1932,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2001,
     "country": "Hungary",
     "pop": 10193449,
     "emp": 4127087,
     "avh": 1897,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2002,
     "country": "Hungary",
     "pop": 10167283,
     "emp": 4121914,
     "avh": 1883,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2003,
     "country": "Hungary",
     "pop": 10141342,
     "emp": 4202680,
     "avh": 1856,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2004,
     "country": "Hungary",
     "pop": 10114480,
     "emp": 4155988,
     "avh": 1858,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2005,
     "country": "Hungary",
     "pop": 10085937,
     "emp": 4122547,
     "avh": 1834,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2006,
     "country": "Hungary",
     "pop": 10055653,
     "emp": 4149789,
     "avh": 1813,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2007,
     "country": "Hungary",
     "pop": 10024149,
     "emp": 4112921,
     "avh": 1787,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2008,
     "country": "Hungary",
     "pop": 9991867,
     "emp": 4035188,
     "avh": 1791,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2009,
     "country": "Hungary",
     "pop": 9959439,
     "emp": 3951102,
     "avh": 1758,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2010,
     "country": "Hungary",
     "pop": 9927370,
     "emp": 3920938,
     "avh": 1766,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2011,
     "country": "Hungary",
     "pop": 9895680,
     "emp": 3924381,
     "avh": 1753,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2012,
     "country": "Hungary",
     "pop": 9864358,
     "emp": 3963219,
     "avh": 1738,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2013,
     "country": "Hungary",
     "pop": 9833923,
     "emp": 4011578,
     "avh": 1733,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2014,
     "country": "Hungary",
     "pop": 9804991,
     "emp": 4193594,
     "avh": 1748,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2015,
     "country": "Hungary",
     "pop": 9777923,
     "emp": 4285135,
     "avh": 1745,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2016,
     "country": "Hungary",
     "pop": 9752975,
     "emp": 4446020,
     "avh": 1760,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2017,
     "country": "Hungary",
     "pop": 9729823,
     "emp": 4532870,
     "avh": 1747,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2018,
     "country": "Hungary",
     "pop": 9707499,
     "emp": 4635050,
     "avh": 1728,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2019,
     "country": "Hungary",
     "pop": 9684679,
     "emp": 4711576,
     "avh": 1725,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 1970,
     "country": "Indonesia",
     "pop": 115364743,
     "emp": 34022018,
     "avh": 1893,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1971,
     "country": "Indonesia",
     "pop": 118465395,
     "emp": 34857723,
     "avh": 1892,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1972,
     "country": "Indonesia",
     "pop": 121617506,
     "emp": 35617950,
     "avh": 1918,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1973,
     "country": "Indonesia",
     "pop": 124813940,
     "emp": 37661537,
     "avh": 1925,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1974,
     "country": "Indonesia",
     "pop": 128046766,
     "emp": 38759193,
     "avh": 1920,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1975,
     "country": "Indonesia",
     "pop": 131309954,
     "emp": 39132774,
     "avh": 1900,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1976,
     "country": "Indonesia",
     "pop": 134594192,
     "emp": 39885116,
     "avh": 1862,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1977,
     "country": "Indonesia",
     "pop": 137897874,
     "emp": 40703308,
     "avh": 1877,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1978,
     "country": "Indonesia",
     "pop": 141231784,
     "emp": 42265621,
     "avh": 1981,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1979,
     "country": "Indonesia",
     "pop": 144612203,
     "emp": 43169467,
     "avh": 1992,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1980,
     "country": "Indonesia",
     "pop": 148047741,
     "emp": 45510616,
     "avh": 2005,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1981,
     "country": "Indonesia",
     "pop": 151542074,
     "emp": 48628482,
     "avh": 2035,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1982,
     "country": "Indonesia",
     "pop": 155081467,
     "emp": 49916679,
     "avh": 2013,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1983,
     "country": "Indonesia",
     "pop": 158635921,
     "emp": 52097442,
     "avh": 2050,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1984,
     "country": "Indonesia",
     "pop": 162165191,
     "emp": 54818126,
     "avh": 2056,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1985,
     "country": "Indonesia",
     "pop": 165639504,
     "emp": 57439823,
     "avh": 2029,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1986,
     "country": "Indonesia",
     "pop": 169046039,
     "emp": 60110176,
     "avh": 1887,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1987,
     "country": "Indonesia",
     "pop": 172389234,
     "emp": 62673473,
     "avh": 1889,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1988,
     "country": "Indonesia",
     "pop": 175677763,
     "emp": 66656593,
     "avh": 1886,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1989,
     "country": "Indonesia",
     "pop": 178927891,
     "emp": 71243850,
     "avh": 1891,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1990,
     "country": "Indonesia",
     "pop": 182151216,
     "emp": 73691009,
     "avh": 1909,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1991,
     "country": "Indonesia",
     "pop": 185351430,
     "emp": 74381217,
     "avh": 1928,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1992,
     "country": "Indonesia",
     "pop": 188522984,
     "emp": 76357437,
     "avh": 1895,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1993,
     "country": "Indonesia",
     "pop": 191658035,
     "emp": 77017021,
     "avh": 1897,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1994,
     "country": "Indonesia",
     "pop": 194745287,
     "emp": 80184577,
     "avh": 1929,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1995,
     "country": "Indonesia",
     "pop": 197778594,
     "emp": 82129249,
     "avh": 1927,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1996,
     "country": "Indonesia",
     "pop": 200756590,
     "emp": 84073913,
     "avh": 1917,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1997,
     "country": "Indonesia",
     "pop": 203688312,
     "emp": 85398399,
     "avh": 1923,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1998,
     "country": "Indonesia",
     "pop": 206591122,
     "emp": 87767562,
     "avh": 1956,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1999,
     "country": "Indonesia",
     "pop": 208615169,
     "emp": 89486686,
     "avh": 1971,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2000,
     "country": "Indonesia",
     "pop": 211513823,
     "emp": 91548515,
     "avh": 1979,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2001,
     "country": "Indonesia",
     "pop": 214427417,
     "emp": 91960998,
     "avh": 2021,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2002,
     "country": "Indonesia",
     "pop": 217357793,
     "emp": 93168060,
     "avh": 1993,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2003,
     "country": "Indonesia",
     "pop": 220309469,
     "emp": 94513389,
     "avh": 2020,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2004,
     "country": "Indonesia",
     "pop": 223285676,
     "emp": 95383819,
     "avh": 2046,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2005,
     "country": "Indonesia",
     "pop": 226289470,
     "emp": 96169265,
     "avh": 2024,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2006,
     "country": "Indonesia",
     "pop": 229318262,
     "emp": 96865898,
     "avh": 2039,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2007,
     "country": "Indonesia",
     "pop": 232374245,
     "emp": 100312416,
     "avh": 2078,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2008,
     "country": "Indonesia",
     "pop": 235469762,
     "emp": 103507881,
     "avh": 2055,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2009,
     "country": "Indonesia",
     "pop": 238620563,
     "emp": 105686317,
     "avh": 2075,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2010,
     "country": "Indonesia",
     "pop": 241834215,
     "emp": 108154747,
     "avh": 2066,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2011,
     "country": "Indonesia",
     "pop": 245115987,
     "emp": 109731086,
     "avh": 2034,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2012,
     "country": "Indonesia",
     "pop": 248451722,
     "emp": 113283416,
     "avh": 2037,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2013,
     "country": "Indonesia",
     "pop": 251805307,
     "emp": 114345344,
     "avh": 2034,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2014,
     "country": "Indonesia",
     "pop": 255128076,
     "emp": 116398979,
     "avh": 2017,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2015,
     "country": "Indonesia",
     "pop": 258383256,
     "emp": 117833007,
     "avh": 2024,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2016,
     "country": "Indonesia",
     "pop": 261556381,
     "emp": 119529838,
     "avh": 2014,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2017,
     "country": "Indonesia",
     "pop": 264650963,
     "emp": 122780639,
     "avh": 2019,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2018,
     "country": "Indonesia",
     "pop": 267670543,
     "emp": 127067832,
     "avh": 2019,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2019,
     "country": "Indonesia",
     "pop": 270625568,
     "emp": 131170684,
     "avh": 2019,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 1970,
     "country": "India",
     "pop": 555189792,
     "emp": 195359985,
     "avh": 2077,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1971,
     "country": "India",
     "pop": 567868018,
     "emp": 201424621,
     "avh": 2077,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1972,
     "country": "India",
     "pop": 581087256,
     "emp": 207630203,
     "avh": 2076,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1973,
     "country": "India",
     "pop": 594770134,
     "emp": 214002212,
     "avh": 2074,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1974,
     "country": "India",
     "pop": 608802600,
     "emp": 220582214,
     "avh": 2072,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1975,
     "country": "India",
     "pop": 623102897,
     "emp": 227396453,
     "avh": 2069,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1976,
     "country": "India",
     "pop": 637630087,
     "emp": 234435653,
     "avh": 2067,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1977,
     "country": "India",
     "pop": 652408776,
     "emp": 241692825,
     "avh": 2065,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1978,
     "country": "India",
     "pop": 667499806,
     "emp": 249163513,
     "avh": 2064,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1979,
     "country": "India",
     "pop": 682995354,
     "emp": 256839111,
     "avh": 2064,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1980,
     "country": "India",
     "pop": 698952844,
     "emp": 264706665,
     "avh": 2064,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1981,
     "country": "India",
     "pop": 715384993,
     "emp": 272151123,
     "avh": 2063,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1982,
     "country": "India",
     "pop": 732239504,
     "emp": 279712097,
     "avh": 2064,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1983,
     "country": "India",
     "pop": 749428958,
     "emp": 287361968,
     "avh": 2065,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1984,
     "country": "India",
     "pop": 766833410,
     "emp": 295068603,
     "avh": 2066,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1985,
     "country": "India",
     "pop": 784360008,
     "emp": 302795166,
     "avh": 2068,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1986,
     "country": "India",
     "pop": 801975244,
     "emp": 311102600,
     "avh": 2070,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1987,
     "country": "India",
     "pop": 819682102,
     "emp": 319505493,
     "avh": 2072,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1988,
     "country": "India",
     "pop": 837468930,
     "emp": 328037597,
     "avh": 2075,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1989,
     "country": "India",
     "pop": 855334678,
     "emp": 336664550,
     "avh": 2078,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1990,
     "country": "India",
     "pop": 873277798,
     "emp": 345386993,
     "avh": 2078,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1991,
     "country": "India",
     "pop": 891273209,
     "emp": 354106018,
     "avh": 2079,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1992,
     "country": "India",
     "pop": 909307016,
     "emp": 363084411,
     "avh": 2076,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1993,
     "country": "India",
     "pop": 927403860,
     "emp": 372436553,
     "avh": 2075,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1994,
     "country": "India",
     "pop": 945601831,
     "emp": 377710968,
     "avh": 2075,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1995,
     "country": "India",
     "pop": 963922588,
     "emp": 381690124,
     "avh": 2077,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1996,
     "country": "India",
     "pop": 982365243,
     "emp": 385872344,
     "avh": 2079,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1997,
     "country": "India",
     "pop": 1000900030,
     "emp": 390425140,
     "avh": 2079,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1998,
     "country": "India",
     "pop": 1019483581,
     "emp": 395184570,
     "avh": 2080,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1999,
     "country": "India",
     "pop": 1038058156,
     "emp": 400287322,
     "avh": 2082,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2000,
     "country": "India",
     "pop": 1056575549,
     "emp": 409248596,
     "avh": 2086,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2001,
     "country": "India",
     "pop": 1075000085,
     "emp": 419762023,
     "avh": 2086,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2002,
     "country": "India",
     "pop": 1093317189,
     "emp": 430733276,
     "avh": 2088,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2003,
     "country": "India",
     "pop": 1111523144,
     "emp": 442381225,
     "avh": 2091,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2004,
     "country": "India",
     "pop": 1129623456,
     "emp": 454544982,
     "avh": 2095,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2005,
     "country": "India",
     "pop": 1147609927,
     "emp": 457638061,
     "avh": 2096,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2006,
     "country": "India",
     "pop": 1165486291,
     "emp": 457973663,
     "avh": 2097,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2007,
     "country": "India",
     "pop": 1183209472,
     "emp": 459028900,
     "avh": 2098,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2008,
     "country": "India",
     "pop": 1200669765,
     "emp": 460812927,
     "avh": 2099,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2009,
     "country": "India",
     "pop": 1217726215,
     "emp": 463632598,
     "avh": 2103,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2010,
     "country": "India",
     "pop": 1234281170,
     "emp": 467412506,
     "avh": 2110,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2011,
     "country": "India",
     "pop": 1250287943,
     "emp": 472214477,
     "avh": 2113,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2012,
     "country": "India",
     "pop": 1265780247,
     "emp": 469831085,
     "avh": 2115,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2013,
     "country": "India",
     "pop": 1280842125,
     "emp": 483854339,
     "avh": 2117,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2014,
     "country": "India",
     "pop": 1295600772,
     "emp": 483084594,
     "avh": 2118,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2015,
     "country": "India",
     "pop": 1310152403,
     "emp": 482700469,
     "avh": 2118,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2016,
     "country": "India",
     "pop": 1324517249,
     "emp": 482989013,
     "avh": 2121,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2017,
     "country": "India",
     "pop": 1338676785,
     "emp": 487190979,
     "avh": 2122,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2018,
     "country": "India",
     "pop": 1352642280,
     "emp": 491077209,
     "avh": 2122,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2019,
     "country": "India",
     "pop": 1366417754,
     "emp": 497615722,
     "avh": 2122,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 1950,
     "country": "Ireland",
     "pop": 2921156,
     "emp": 1254613,
     "avh": 2419,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1951,
     "country": "Ireland",
     "pop": 2917501,
     "emp": 1242090,
     "avh": 2407,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1952,
     "country": "Ireland",
     "pop": 2910448,
     "emp": 1228159,
     "avh": 2395,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1953,
     "country": "Ireland",
     "pop": 2905671,
     "emp": 1215234,
     "avh": 2384,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1954,
     "country": "Ireland",
     "pop": 2895278,
     "emp": 1200016,
     "avh": 2372,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1955,
     "country": "Ireland",
     "pop": 2874933,
     "emp": 1180790,
     "avh": 2360,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1956,
     "country": "Ireland",
     "pop": 2854348,
     "emp": 1161618,
     "avh": 2349,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1957,
     "country": "Ireland",
     "pop": 2837556,
     "emp": 1119284,
     "avh": 2337,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1958,
     "country": "Ireland",
     "pop": 2811235,
     "emp": 1102763,
     "avh": 2326,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1959,
     "country": "Ireland",
     "pop": 2802874,
     "emp": 1094503,
     "avh": 2314,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1960,
     "country": "Ireland",
     "pop": 2791989,
     "emp": 1089340,
     "avh": 2303,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1961,
     "country": "Ireland",
     "pop": 2778483,
     "emp": 1084177,
     "avh": 2306,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1962,
     "country": "Ireland",
     "pop": 2790017,
     "emp": 1094503,
     "avh": 2309,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1963,
     "country": "Ireland",
     "pop": 2809735,
     "emp": 1100698,
     "avh": 2312,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1964,
     "country": "Ireland",
     "pop": 2823537,
     "emp": 1105861,
     "avh": 2315,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1965,
     "country": "Ireland",
     "pop": 2835367,
     "emp": 1103796,
     "avh": 2318,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1966,
     "country": "Ireland",
     "pop": 2843254,
     "emp": 1100285,
     "avh": 2321,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1967,
     "country": "Ireland",
     "pop": 2859127,
     "emp": 1094503,
     "avh": 2324,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1968,
     "country": "Ireland",
     "pop": 2871352,
     "emp": 1097600,
     "avh": 2327,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1969,
     "country": "Ireland",
     "pop": 2884267,
     "emp": 1100698,
     "avh": 2330,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1970,
     "country": "Ireland",
     "pop": 2908421,
     "emp": 1087275,
     "avh": 2333,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1971,
     "country": "Ireland",
     "pop": 2944088,
     "emp": 1102715,
     "avh": 2316,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1972,
     "country": "Ireland",
     "pop": 2986566,
     "emp": 1088026,
     "avh": 2296,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1973,
     "country": "Ireland",
     "pop": 3034319,
     "emp": 1103381,
     "avh": 2284,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1974,
     "country": "Ireland",
     "pop": 3085156,
     "emp": 1119067,
     "avh": 2247,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1975,
     "country": "Ireland",
     "pop": 3137176,
     "emp": 1110232,
     "avh": 2237,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1976,
     "country": "Ireland",
     "pop": 3189865,
     "emp": 1101280,
     "avh": 2232,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1977,
     "country": "Ireland",
     "pop": 3242768,
     "emp": 1139540,
     "avh": 2202,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1978,
     "country": "Ireland",
     "pop": 3294161,
     "emp": 1155595,
     "avh": 2183,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1979,
     "country": "Ireland",
     "pop": 3342005,
     "emp": 1212436,
     "avh": 2161,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1980,
     "country": "Ireland",
     "pop": 3384756,
     "emp": 1204950,
     "avh": 2122,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1981,
     "country": "Ireland",
     "pop": 3422018,
     "emp": 1199676,
     "avh": 2090,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1982,
     "country": "Ireland",
     "pop": 3453786,
     "emp": 1193297,
     "avh": 2083,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1983,
     "country": "Ireland",
     "pop": 3479458,
     "emp": 1183429,
     "avh": 2073,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1984,
     "country": "Ireland",
     "pop": 3498530,
     "emp": 1159785,
     "avh": 2055,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1985,
     "country": "Ireland",
     "pop": 3510979,
     "emp": 1155205,
     "avh": 2062,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1986,
     "country": "Ireland",
     "pop": 3516422,
     "emp": 1149760,
     "avh": 2096,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1987,
     "country": "Ireland",
     "pop": 3515828,
     "emp": 1156626,
     "avh": 2076,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1988,
     "country": "Ireland",
     "pop": 3512185,
     "emp": 1159216,
     "avh": 2084,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1989,
     "country": "Ireland",
     "pop": 3509519,
     "emp": 1162383,
     "avh": 2091,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1990,
     "country": "Ireland",
     "pop": 3510885,
     "emp": 1215433,
     "avh": 2080,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1991,
     "country": "Ireland",
     "pop": 3517710,
     "emp": 1206900,
     "avh": 2045,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1992,
     "country": "Ireland",
     "pop": 3529853,
     "emp": 1207041,
     "avh": 1996,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1993,
     "country": "Ireland",
     "pop": 3546931,
     "emp": 1225002,
     "avh": 1970,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1994,
     "country": "Ireland",
     "pop": 3567912,
     "emp": 1265557,
     "avh": 1970,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1995,
     "country": "Ireland",
     "pop": 3592186,
     "emp": 1323488,
     "avh": 1962,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1996,
     "country": "Ireland",
     "pop": 3619641,
     "emp": 1371912,
     "avh": 1953,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1997,
     "country": "Ireland",
     "pop": 3651096,
     "emp": 1423566,
     "avh": 1954,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1998,
     "country": "Ireland",
     "pop": 3687819,
     "emp": 1516677,
     "avh": 1953,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1999,
     "country": "Ireland",
     "pop": 3731468,
     "emp": 1615625,
     "avh": 1941,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2000,
     "country": "Ireland",
     "pop": 3783103,
     "emp": 1688738,
     "avh": 1932,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2001,
     "country": "Ireland",
     "pop": 3842245,
     "emp": 1740586,
     "avh": 1923,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2002,
     "country": "Ireland",
     "pop": 3907998,
     "emp": 1768167,
     "avh": 1904,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2003,
     "country": "Ireland",
     "pop": 3980076,
     "emp": 1804571,
     "avh": 1886,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2004,
     "country": "Ireland",
     "pop": 4058130,
     "emp": 1867924,
     "avh": 1875,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2005,
     "country": "Ireland",
     "pop": 4141223,
     "emp": 1956697,
     "avh": 1883,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2006,
     "country": "Ireland",
     "pop": 4230623,
     "emp": 2035443,
     "avh": 1878,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2007,
     "country": "Ireland",
     "pop": 4324641,
     "emp": 2110014,
     "avh": 1864,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2008,
     "country": "Ireland",
     "pop": 4415872,
     "emp": 2097756,
     "avh": 1843,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2009,
     "country": "Ireland",
     "pop": 4494576,
     "emp": 1947847,
     "avh": 1811,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2010,
     "country": "Ireland",
     "pop": 4554321,
     "emp": 1883175,
     "avh": 1720,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2011,
     "country": "Ireland",
     "pop": 4591105,
     "emp": 1849360,
     "avh": 1736,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2012,
     "country": "Ireland",
     "pop": 4608198,
     "emp": 1838291,
     "avh": 1737,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2013,
     "country": "Ireland",
     "pop": 4615422,
     "emp": 1885504,
     "avh": 1743,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2014,
     "country": "Ireland",
     "pop": 4626844,
     "emp": 1927069,
     "avh": 1757,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2015,
     "country": "Ireland",
     "pop": 4652425,
     "emp": 1988947,
     "avh": 1770,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2016,
     "country": "Ireland",
     "pop": 4695779,
     "emp": 2058725,
     "avh": 1762,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2017,
     "country": "Ireland",
     "pop": 4753279,
     "emp": 2123496,
     "avh": 1774,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2018,
     "country": "Ireland",
     "pop": 4818690,
     "emp": 2193545,
     "avh": 1785,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2019,
     "country": "Ireland",
     "pop": 4882495,
     "emp": 2260447,
     "avh": 1771,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 1964,
     "country": "Iceland",
     "pop": 189144,
     "emp": 80019,
     "avh": 2115,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1965,
     "country": "Iceland",
     "pop": 192591,
     "emp": 83689,
     "avh": 2092,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1966,
     "country": "Iceland",
     "pop": 195918,
     "emp": 85824,
     "avh": 2080,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1967,
     "country": "Iceland",
     "pop": 198989,
     "emp": 85475,
     "avh": 2045,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1968,
     "country": "Iceland",
     "pop": 201562,
     "emp": 86246,
     "avh": 1998,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1969,
     "country": "Iceland",
     "pop": 203240,
     "emp": 86972,
     "avh": 1970,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1970,
     "country": "Iceland",
     "pop": 204426,
     "emp": 90072,
     "avh": 1953,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1971,
     "country": "Iceland",
     "pop": 207088,
     "emp": 94908,
     "avh": 1915,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1972,
     "country": "Iceland",
     "pop": 209929,
     "emp": 97185,
     "avh": 1882,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1973,
     "country": "Iceland",
     "pop": 212814,
     "emp": 99754,
     "avh": 1865,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1974,
     "country": "Iceland",
     "pop": 215563,
     "emp": 103135,
     "avh": 1840,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1975,
     "country": "Iceland",
     "pop": 218070,
     "emp": 104728,
     "avh": 1816,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1976,
     "country": "Iceland",
     "pop": 220291,
     "emp": 108579,
     "avh": 1789,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1977,
     "country": "Iceland",
     "pop": 222266,
     "emp": 109023,
     "avh": 1747,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1978,
     "country": "Iceland",
     "pop": 224150,
     "emp": 112339,
     "avh": 1709,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1979,
     "country": "Iceland",
     "pop": 226103,
     "emp": 113376,
     "avh": 1696,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1980,
     "country": "Iceland",
     "pop": 228262,
     "emp": 116999,
     "avh": 1687,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1981,
     "country": "Iceland",
     "pop": 230664,
     "emp": 122458,
     "avh": 1680,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1982,
     "country": "Iceland",
     "pop": 233269,
     "emp": 125910,
     "avh": 1683,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1983,
     "country": "Iceland",
     "pop": 236019,
     "emp": 126319,
     "avh": 1683,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1984,
     "country": "Iceland",
     "pop": 238808,
     "emp": 128305,
     "avh": 1681,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1985,
     "country": "Iceland",
     "pop": 241582,
     "emp": 133450,
     "avh": 1680,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1986,
     "country": "Iceland",
     "pop": 244331,
     "emp": 138367,
     "avh": 1673,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1987,
     "country": "Iceland",
     "pop": 247056,
     "emp": 146924,
     "avh": 1671,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1988,
     "country": "Iceland",
     "pop": 249756,
     "emp": 141140,
     "avh": 1678,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1989,
     "country": "Iceland",
     "pop": 252413,
     "emp": 138983,
     "avh": 1674,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1990,
     "country": "Iceland",
     "pop": 255043,
     "emp": 138074,
     "avh": 1664,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1991,
     "country": "Iceland",
     "pop": 257624,
     "emp": 137785,
     "avh": 1667,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1992,
     "country": "Iceland",
     "pop": 260151,
     "emp": 137399,
     "avh": 1667,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1993,
     "country": "Iceland",
     "pop": 262656,
     "emp": 137017,
     "avh": 1682,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1994,
     "country": "Iceland",
     "pop": 265138,
     "emp": 138222,
     "avh": 1654,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1995,
     "country": "Iceland",
     "pop": 267629,
     "emp": 142898,
     "avh": 1641,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1996,
     "country": "Iceland",
     "pop": 270150,
     "emp": 143670,
     "avh": 1658,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1997,
     "country": "Iceland",
     "pop": 272709,
     "emp": 143847,
     "avh": 1683,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1998,
     "country": "Iceland",
     "pop": 275296,
     "emp": 149635,
     "avh": 1664,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1999,
     "country": "Iceland",
     "pop": 277870,
     "emp": 154666,
     "avh": 1644,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2000,
     "country": "Iceland",
     "pop": 280435,
     "emp": 157085,
     "avh": 1695,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2001,
     "country": "Iceland",
     "pop": 282907,
     "emp": 158976,
     "avh": 1706,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2002,
     "country": "Iceland",
     "pop": 285329,
     "emp": 156614,
     "avh": 1672,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2003,
     "country": "Iceland",
     "pop": 287952,
     "emp": 157163,
     "avh": 1638,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2004,
     "country": "Iceland",
     "pop": 291104,
     "emp": 156692,
     "avh": 1645,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2005,
     "country": "Iceland",
     "pop": 294979,
     "emp": 161491,
     "avh": 1637,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2006,
     "country": "Iceland",
     "pop": 299720,
     "emp": 168527,
     "avh": 1627,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2007,
     "country": "Iceland",
     "pop": 305183,
     "emp": 174809,
     "avh": 1605,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2008,
     "country": "Iceland",
     "pop": 310856,
     "emp": 176159,
     "avh": 1607,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2009,
     "country": "Iceland",
     "pop": 316062,
     "emp": 164103,
     "avh": 1512,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2010,
     "country": "Iceland",
     "pop": 320328,
     "emp": 164442,
     "avh": 1503,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2011,
     "country": "Iceland",
     "pop": 323474,
     "emp": 167376,
     "avh": 1511,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2012,
     "country": "Iceland",
     "pop": 325652,
     "emp": 170758,
     "avh": 1497,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2013,
     "country": "Iceland",
     "pop": 327187,
     "emp": 173992,
     "avh": 1499,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2014,
     "country": "Iceland",
     "pop": 328594,
     "emp": 177024,
     "avh": 1488,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2015,
     "country": "Iceland",
     "pop": 330243,
     "emp": 181162,
     "avh": 1486,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2016,
     "country": "Iceland",
     "pop": 332206,
     "emp": 187851,
     "avh": 1473,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2017,
     "country": "Iceland",
     "pop": 334393,
     "emp": 192497,
     "avh": 1464,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2018,
     "country": "Iceland",
     "pop": 336713,
     "emp": 194250,
     "avh": 1449,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2019,
     "country": "Iceland",
     "pop": 339031,
     "emp": 192338,
     "avh": 1454,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 1981,
     "country": "Israel",
     "pop": 3770688,
     "emp": 1486420,
     "avh": 1966,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1982,
     "country": "Israel",
     "pop": 3838113,
     "emp": 1511577,
     "avh": 1941,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1983,
     "country": "Israel",
     "pop": 3903955,
     "emp": 1558417,
     "avh": 1928,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1984,
     "country": "Israel",
     "pop": 3969172,
     "emp": 1579777,
     "avh": 1931,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1985,
     "country": "Israel",
     "pop": 4035068,
     "emp": 1566315,
     "avh": 1931,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1986,
     "country": "Israel",
     "pop": 4100538,
     "emp": 1586380,
     "avh": 1926,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1987,
     "country": "Israel",
     "pop": 4167127,
     "emp": 1626785,
     "avh": 1920,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1988,
     "country": "Israel",
     "pop": 4241784,
     "emp": 1685041,
     "avh": 1878,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1989,
     "country": "Israel",
     "pop": 4333587,
     "emp": 1701855,
     "avh": 1909,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1990,
     "country": "Israel",
     "pop": 4448353,
     "emp": 1735202,
     "avh": 1904,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1991,
     "country": "Israel",
     "pop": 4589302,
     "emp": 1828958,
     "avh": 1897,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1992,
     "country": "Israel",
     "pop": 4752824,
     "emp": 1903090,
     "avh": 1950,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1993,
     "country": "Israel",
     "pop": 4929415,
     "emp": 2020818,
     "avh": 1952,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1994,
     "country": "Israel",
     "pop": 5105577,
     "emp": 2159614,
     "avh": 1993,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1995,
     "country": "Israel",
     "pop": 5271367,
     "emp": 2263552,
     "avh": 2017,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1996,
     "country": "Israel",
     "pop": 5424249,
     "emp": 2352995,
     "avh": 2035,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1997,
     "country": "Israel",
     "pop": 5566553,
     "emp": 2412261,
     "avh": 2040,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1998,
     "country": "Israel",
     "pop": 5699273,
     "emp": 2468837,
     "avh": 2015,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1999,
     "country": "Israel",
     "pop": 5824941,
     "emp": 2539338,
     "avh": 2023,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2000,
     "country": "Israel",
     "pop": 5945950,
     "emp": 2627853,
     "avh": 2034,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2001,
     "country": "Israel",
     "pop": 6060676,
     "emp": 2646435,
     "avh": 1998,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2002,
     "country": "Israel",
     "pop": 6169313,
     "emp": 2664320,
     "avh": 2015,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2003,
     "country": "Israel",
     "pop": 6278374,
     "emp": 2690943,
     "avh": 1996,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2004,
     "country": "Israel",
     "pop": 6396514,
     "emp": 2730085,
     "avh": 1973,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2005,
     "country": "Israel",
     "pop": 6529479,
     "emp": 2827078,
     "avh": 1965,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2006,
     "country": "Israel",
     "pop": 6680637,
     "emp": 2917256,
     "avh": 1951,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2007,
     "country": "Israel",
     "pop": 6847141,
     "emp": 3060643,
     "avh": 1964,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2008,
     "country": "Israel",
     "pop": 7020836,
     "emp": 3191522,
     "avh": 1960,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2009,
     "country": "Israel",
     "pop": 7190034,
     "emp": 3272739,
     "avh": 1962,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2010,
     "country": "Israel",
     "pop": 7346446,
     "emp": 3380554,
     "avh": 1956,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2011,
     "country": "Israel",
     "pop": 7487100,
     "emp": 3480875,
     "avh": 1946,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2012,
     "country": "Israel",
     "pop": 7614952,
     "emp": 3614245,
     "avh": 1918,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2013,
     "country": "Israel",
     "pop": 7734841,
     "emp": 3701776,
     "avh": 1908,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2014,
     "country": "Israel",
     "pop": 7854213,
     "emp": 3798935,
     "avh": 1894,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2015,
     "country": "Israel",
     "pop": 7978490,
     "emp": 3883165,
     "avh": 1895,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2016,
     "country": "Israel",
     "pop": 8108985,
     "emp": 3977181,
     "avh": 1921,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2017,
     "country": "Israel",
     "pop": 8243848,
     "emp": 4078894,
     "avh": 1920,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2018,
     "country": "Israel",
     "pop": 8381516,
     "emp": 4156444,
     "avh": 1912,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2019,
     "country": "Israel",
     "pop": 8519377,
     "emp": 4228710,
     "avh": 1900,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 1950,
     "country": "Italy",
     "pop": 46980234,
     "emp": 19913217,
     "avh": 2099,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1951,
     "country": "Italy",
     "pop": 47292405,
     "emp": 19940393,
     "avh": 2105,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1952,
     "country": "Italy",
     "pop": 47539749,
     "emp": 20106498,
     "avh": 2112,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1953,
     "country": "Italy",
     "pop": 47829979,
     "emp": 20320444,
     "avh": 2118,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1954,
     "country": "Italy",
     "pop": 48171072,
     "emp": 20597179,
     "avh": 2125,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1955,
     "country": "Italy",
     "pop": 48504187,
     "emp": 20588756,
     "avh": 2131,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1956,
     "country": "Italy",
     "pop": 48791426,
     "emp": 20658466,
     "avh": 2138,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1957,
     "country": "Italy",
     "pop": 49051733,
     "emp": 20749240,
     "avh": 2144,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1958,
     "country": "Italy",
     "pop": 49344957,
     "emp": 20821662,
     "avh": 2151,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1959,
     "country": "Italy",
     "pop": 49700013,
     "emp": 20851449,
     "avh": 2158,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1960,
     "country": "Italy",
     "pop": 50064645,
     "emp": 20935604,
     "avh": 2164,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1961,
     "country": "Italy",
     "pop": 50389382,
     "emp": 21068822,
     "avh": 2148,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1962,
     "country": "Italy",
     "pop": 50708534,
     "emp": 21007335,
     "avh": 2098,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1963,
     "country": "Italy",
     "pop": 51062693,
     "emp": 20658922,
     "avh": 2084,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1964,
     "country": "Italy",
     "pop": 51463529,
     "emp": 20587190,
     "avh": 2078,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1965,
     "country": "Italy",
     "pop": 51849403,
     "emp": 20085063,
     "avh": 2020,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1966,
     "country": "Italy",
     "pop": 52192992,
     "emp": 19757144,
     "avh": 2039,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1967,
     "country": "Italy",
     "pop": 52527602,
     "emp": 20003082,
     "avh": 2063,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1968,
     "country": "Italy",
     "pop": 52846256,
     "emp": 19992835,
     "avh": 2057,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1969,
     "country": "Italy",
     "pop": 53175783,
     "emp": 19849372,
     "avh": 2056,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1970,
     "country": "Italy",
     "pop": 53518969,
     "emp": 19941598,
     "avh": 2034,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1971,
     "country": "Italy",
     "pop": 53888874,
     "emp": 19957685,
     "avh": 1982,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1972,
     "country": "Italy",
     "pop": 54258741,
     "emp": 19910015,
     "avh": 1963,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1973,
     "country": "Italy",
     "pop": 54619237,
     "emp": 20166131,
     "avh": 1947,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1974,
     "country": "Italy",
     "pop": 54957794,
     "emp": 20446121,
     "avh": 1917,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1975,
     "country": "Italy",
     "pop": 55265284,
     "emp": 20448301,
     "avh": 1901,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1976,
     "country": "Italy",
     "pop": 55537956,
     "emp": 20658002,
     "avh": 1899,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1977,
     "country": "Italy",
     "pop": 55777880,
     "emp": 20729042,
     "avh": 1864,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1978,
     "country": "Italy",
     "pop": 55988981,
     "emp": 20809375,
     "avh": 1854,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1979,
     "country": "Italy",
     "pop": 56177851,
     "emp": 21063972,
     "avh": 1848,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1980,
     "country": "Italy",
     "pop": 56349349,
     "emp": 21402023,
     "avh": 1849,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1981,
     "country": "Italy",
     "pop": 56505478,
     "emp": 21424503,
     "avh": 1852,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1982,
     "country": "Italy",
     "pop": 56644863,
     "emp": 21508684,
     "avh": 1862,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1983,
     "country": "Italy",
     "pop": 56765251,
     "emp": 21587814,
     "avh": 1867,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1984,
     "country": "Italy",
     "pop": 56863137,
     "emp": 21598342,
     "avh": 1856,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1985,
     "country": "Italy",
     "pop": 56936774,
     "emp": 21817836,
     "avh": 1850,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1986,
     "country": "Italy",
     "pop": 56983931,
     "emp": 21985132,
     "avh": 1863,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1987,
     "country": "Italy",
     "pop": 57007741,
     "emp": 22046121,
     "avh": 1877,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1988,
     "country": "Italy",
     "pop": 57018183,
     "emp": 22285102,
     "avh": 1885,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1989,
     "country": "Italy",
     "pop": 57028703,
     "emp": 22439992,
     "avh": 1873,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1990,
     "country": "Italy",
     "pop": 57048236,
     "emp": 22803197,
     "avh": 1856,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1991,
     "country": "Italy",
     "pop": 57088113,
     "emp": 23230072,
     "avh": 1847,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1992,
     "country": "Italy",
     "pop": 57145306,
     "emp": 23068967,
     "avh": 1850,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1993,
     "country": "Italy",
     "pop": 57197613,
     "emp": 22456113,
     "avh": 1850,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1994,
     "country": "Italy",
     "pop": 57213544,
     "emp": 22088289,
     "avh": 1850,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1995,
     "country": "Italy",
     "pop": 57174408,
     "emp": 22028453,
     "avh": 1856,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1996,
     "country": "Italy",
     "pop": 57065225,
     "emp": 22114835,
     "avh": 1866,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1997,
     "country": "Italy",
     "pop": 56903640,
     "emp": 22111740,
     "avh": 1859,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1998,
     "country": "Italy",
     "pop": 56742760,
     "emp": 22267738,
     "avh": 1873,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1999,
     "country": "Italy",
     "pop": 56655632,
     "emp": 22472488,
     "avh": 1869,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2000,
     "country": "Italy",
     "pop": 56692178,
     "emp": 22917968,
     "avh": 1850,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2001,
     "country": "Italy",
     "pop": 56875147,
     "emp": 23430450,
     "avh": 1837,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2002,
     "country": "Italy",
     "pop": 57182519,
     "emp": 23917112,
     "avh": 1826,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2003,
     "country": "Italy",
     "pop": 57564588,
     "emp": 24322320,
     "avh": 1815,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2004,
     "country": "Italy",
     "pop": 57948424,
     "emp": 24474260,
     "avh": 1814,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2005,
     "country": "Italy",
     "pop": 58281212,
     "emp": 24632335,
     "avh": 1811,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2006,
     "country": "Italy",
     "pop": 58542619,
     "emp": 25155275,
     "avh": 1811,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2007,
     "country": "Italy",
     "pop": 58747861,
     "emp": 25427034,
     "avh": 1817,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2008,
     "country": "Italy",
     "pop": 58922109,
     "emp": 25390230,
     "avh": 1806,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2009,
     "country": "Italy",
     "pop": 59105625,
     "emp": 24935735,
     "avh": 1775,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2010,
     "country": "Italy",
     "pop": 59325229,
     "emp": 24792453,
     "avh": 1776,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2011,
     "country": "Italy",
     "pop": 59589076,
     "emp": 24927034,
     "avh": 1772,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2012,
     "country": "Italy",
     "pop": 59879471,
     "emp": 24913631,
     "avh": 1733,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2013,
     "country": "Italy",
     "pop": 60166830,
     "emp": 24301548,
     "avh": 1719,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2014,
     "country": "Italy",
     "pop": 60409620,
     "emp": 24195146,
     "avh": 1716,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2015,
     "country": "Italy",
     "pop": 60578494,
     "emp": 24444614,
     "avh": 1717,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2016,
     "country": "Italy",
     "pop": 60663060,
     "emp": 24852914,
     "avh": 1721,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2017,
     "country": "Italy",
     "pop": 60673701,
     "emp": 25184688,
     "avh": 1719,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2018,
     "country": "Italy",
     "pop": 60627291,
     "emp": 25417907,
     "avh": 1722,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2019,
     "country": "Italy",
     "pop": 60550075,
     "emp": 25596328,
     "avh": 1717,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 1986,
     "country": "Jamaica",
     "pop": 2358161,
     "emp": 820599,
     "avh": 1864,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1987,
     "country": "Jamaica",
     "pop": 2375393,
     "emp": 845399,
     "avh": 1893,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1988,
     "country": "Jamaica",
     "pop": 2389411,
     "emp": 871800,
     "avh": 1914,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1989,
     "country": "Jamaica",
     "pop": 2403464,
     "emp": 881100,
     "avh": 1972,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1990,
     "country": "Jamaica",
     "pop": 2419906,
     "emp": 896300,
     "avh": 1938,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1991,
     "country": "Jamaica",
     "pop": 2439334,
     "emp": 902899,
     "avh": 1947,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1992,
     "country": "Jamaica",
     "pop": 2461049,
     "emp": 905700,
     "avh": 1963,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1993,
     "country": "Jamaica",
     "pop": 2484581,
     "emp": 906300,
     "avh": 1951,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1994,
     "country": "Jamaica",
     "pop": 2509043,
     "emp": 923099,
     "avh": 1958,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1995,
     "country": "Jamaica",
     "pop": 2533711,
     "emp": 963299,
     "avh": 1948,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1996,
     "country": "Jamaica",
     "pop": 2558637,
     "emp": 959800,
     "avh": 1969,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1997,
     "country": "Jamaica",
     "pop": 2583916,
     "emp": 956300,
     "avh": 1963,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1998,
     "country": "Jamaica",
     "pop": 2608873,
     "emp": 954299,
     "avh": 1999,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1999,
     "country": "Jamaica",
     "pop": 2632675,
     "emp": 936800,
     "avh": 1983,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 2000,
     "country": "Jamaica",
     "pop": 2654701,
     "emp": 933499,
     "avh": 1963,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 2001,
     "country": "Jamaica",
     "pop": 2674702,
     "emp": 942300,
     "avh": 1970,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 2002,
     "country": "Jamaica",
     "pop": 2692845,
     "emp": 1036800,
     "avh": 1965,
     "left": 52.5,
     "top": 57
    },
    {
     "year": 1950,
     "country": "Japan",
     "pop": 84274266,
     "emp": 39407653,
     "avh": 2030,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1951,
     "country": "Japan",
     "pop": 85640724,
     "emp": 40384689,
     "avh": 2012,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1952,
     "country": "Japan",
     "pop": 86943150,
     "emp": 41342063,
     "avh": 1995,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1953,
     "country": "Japan",
     "pop": 88145992,
     "emp": 42261970,
     "avh": 1978,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1954,
     "country": "Japan",
     "pop": 89250868,
     "emp": 42801990,
     "avh": 2008,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1955,
     "country": "Japan",
     "pop": 90317983,
     "emp": 44173645,
     "avh": 2034,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1956,
     "country": "Japan",
     "pop": 91274458,
     "emp": 45048473,
     "avh": 2084,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1957,
     "country": "Japan",
     "pop": 92075718,
     "emp": 46236518,
     "avh": 2108,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1958,
     "country": "Japan",
     "pop": 92906102,
     "emp": 46420124,
     "avh": 2133,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1959,
     "country": "Japan",
     "pop": 93818976,
     "emp": 46819740,
     "avh": 2156,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1960,
     "country": "Japan",
     "pop": 94618503,
     "emp": 47910579,
     "avh": 2172,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1961,
     "country": "Japan",
     "pop": 95474926,
     "emp": 48580207,
     "avh": 2175,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1962,
     "country": "Japan",
     "pop": 96368367,
     "emp": 49206626,
     "avh": 2152,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1963,
     "country": "Japan",
     "pop": 97354042,
     "emp": 49627849,
     "avh": 2146,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1964,
     "country": "Japan",
     "pop": 98374042,
     "emp": 50275863,
     "avh": 2153,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1965,
     "country": "Japan",
     "pop": 99436223,
     "emp": 51085895,
     "avh": 2135,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1966,
     "country": "Japan",
     "pop": 100349082,
     "emp": 52133541,
     "avh": 2142,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1967,
     "country": "Japan",
     "pop": 101389850,
     "emp": 53137977,
     "avh": 2156,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1968,
     "country": "Japan",
     "pop": 102531599,
     "emp": 54023605,
     "avh": 2160,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1969,
     "country": "Japan",
     "pop": 103749540,
     "emp": 54434024,
     "avh": 2147,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1970,
     "country": "Japan",
     "pop": 104929251,
     "emp": 55017242,
     "avh": 2137,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1971,
     "country": "Japan",
     "pop": 106427103,
     "emp": 55477539,
     "avh": 2129,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1972,
     "country": "Japan",
     "pop": 107976027,
     "emp": 55790321,
     "avh": 2131,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1973,
     "country": "Japan",
     "pop": 109528512,
     "emp": 57062725,
     "avh": 2117,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1974,
     "country": "Japan",
     "pop": 111022689,
     "emp": 56836887,
     "avh": 2058,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1975,
     "country": "Japan",
     "pop": 112413359,
     "emp": 56681388,
     "avh": 2030,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1976,
     "country": "Japan",
     "pop": 113679191,
     "emp": 57172874,
     "avh": 2057,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1977,
     "country": "Japan",
     "pop": 114827832,
     "emp": 57880050,
     "avh": 2064,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1978,
     "country": "Japan",
     "pop": 115879211,
     "emp": 58445697,
     "avh": 2067,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1979,
     "country": "Japan",
     "pop": 116867356,
     "emp": 59047939,
     "avh": 2072,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1980,
     "country": "Japan",
     "pop": 117816940,
     "emp": 59469017,
     "avh": 2073,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1981,
     "country": "Japan",
     "pop": 118732841,
     "emp": 59956432,
     "avh": 2068,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1982,
     "country": "Japan",
     "pop": 119605250,
     "emp": 60475730,
     "avh": 2068,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1983,
     "country": "Japan",
     "pop": 120427636,
     "emp": 61390869,
     "avh": 2074,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1984,
     "country": "Japan",
     "pop": 121189266,
     "emp": 61594566,
     "avh": 2089,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1985,
     "country": "Japan",
     "pop": 121883482,
     "emp": 61911994,
     "avh": 2076,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1986,
     "country": "Japan",
     "pop": 122509117,
     "emp": 62168209,
     "avh": 2078,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1987,
     "country": "Japan",
     "pop": 123072710,
     "emp": 62393787,
     "avh": 2083,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1988,
     "country": "Japan",
     "pop": 123584527,
     "emp": 63111019,
     "avh": 2080,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1989,
     "country": "Japan",
     "pop": 124058520,
     "emp": 64028396,
     "avh": 2061,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1990,
     "country": "Japan",
     "pop": 124505240,
     "emp": 65104019,
     "avh": 2028,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1991,
     "country": "Japan",
     "pop": 124929772,
     "emp": 66390914,
     "avh": 2010,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1992,
     "country": "Japan",
     "pop": 125331297,
     "emp": 67118110,
     "avh": 1962,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1993,
     "country": "Japan",
     "pop": 125707411,
     "emp": 67356063,
     "avh": 1926,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1994,
     "country": "Japan",
     "pop": 126053129,
     "emp": 67430404,
     "avh": 1909,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1995,
     "country": "Japan",
     "pop": 126365484,
     "emp": 67657577,
     "avh": 1911,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1996,
     "country": "Japan",
     "pop": 126644094,
     "emp": 67725852,
     "avh": 1914,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1997,
     "country": "Japan",
     "pop": 126892738,
     "emp": 68184272,
     "avh": 1887,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1998,
     "country": "Japan",
     "pop": 127117434,
     "emp": 67342185,
     "avh": 1866,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1999,
     "country": "Japan",
     "pop": 127326070,
     "emp": 66423377,
     "avh": 1850,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2000,
     "country": "Japan",
     "pop": 127524174,
     "emp": 65915504,
     "avh": 1858,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2001,
     "country": "Japan",
     "pop": 127713828,
     "emp": 65616333,
     "avh": 1843,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2002,
     "country": "Japan",
     "pop": 127893078,
     "emp": 64804870,
     "avh": 1830,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2003,
     "country": "Japan",
     "pop": 128058372,
     "emp": 64803741,
     "avh": 1834,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2004,
     "country": "Japan",
     "pop": 128204195,
     "emp": 65196800,
     "avh": 1841,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2005,
     "country": "Japan",
     "pop": 128326116,
     "emp": 65772529,
     "avh": 1828,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2006,
     "country": "Japan",
     "pop": 128422734,
     "emp": 66285202,
     "avh": 1836,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2007,
     "country": "Japan",
     "pop": 128494057,
     "emp": 66841896,
     "avh": 1826,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2008,
     "country": "Japan",
     "pop": 128538646,
     "emp": 66797538,
     "avh": 1807,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2009,
     "country": "Japan",
     "pop": 128555189,
     "emp": 66095489,
     "avh": 1757,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2010,
     "country": "Japan",
     "pop": 128542353,
     "emp": 66014617,
     "avh": 1779,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2011,
     "country": "Japan",
     "pop": 128498965,
     "emp": 66009742,
     "avh": 1775,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2012,
     "country": "Japan",
     "pop": 128423571,
     "emp": 65834518,
     "avh": 1786,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2013,
     "country": "Japan",
     "pop": 128314195,
     "emp": 66267654,
     "avh": 1766,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2014,
     "country": "Japan",
     "pop": 128168639,
     "emp": 66692825,
     "avh": 1762,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2015,
     "country": "Japan",
     "pop": 127985133,
     "emp": 66983032,
     "avh": 1756,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2016,
     "country": "Japan",
     "pop": 127763265,
     "emp": 67620994,
     "avh": 1747,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2017,
     "country": "Japan",
     "pop": 127502725,
     "emp": 68253265,
     "avh": 1743,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2018,
     "country": "Japan",
     "pop": 127202192,
     "emp": 69364608,
     "avh": 1729,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2019,
     "country": "Japan",
     "pop": 126860301,
     "emp": 69976692,
     "avh": 1691,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 1993,
     "country": "Cambodia",
     "pop": 9970733,
     "emp": 4018598,
     "avh": 2190,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 1994,
     "country": "Cambodia",
     "pop": 10317899,
     "emp": 4180609,
     "avh": 2160,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 1995,
     "country": "Cambodia",
     "pop": 10656138,
     "emp": 4314436,
     "avh": 2187,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 1996,
     "country": "Cambodia",
     "pop": 10982917,
     "emp": 4448452,
     "avh": 2191,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 1997,
     "country": "Cambodia",
     "pop": 11298600,
     "emp": 4633541,
     "avh": 2202,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 1998,
     "country": "Cambodia",
     "pop": 11600508,
     "emp": 4846245,
     "avh": 2239,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 1999,
     "country": "Cambodia",
     "pop": 11886458,
     "emp": 5071551,
     "avh": 2265,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2000,
     "country": "Cambodia",
     "pop": 12155239,
     "emp": 5226390,
     "avh": 2296,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2001,
     "country": "Cambodia",
     "pop": 12405408,
     "emp": 5768578,
     "avh": 2321,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2002,
     "country": "Cambodia",
     "pop": 12637727,
     "emp": 5917564,
     "avh": 2367,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2003,
     "country": "Cambodia",
     "pop": 12856163,
     "emp": 6022436,
     "avh": 2366,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2004,
     "country": "Cambodia",
     "pop": 13066469,
     "emp": 6084856,
     "avh": 2374,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2005,
     "country": "Cambodia",
     "pop": 13273354,
     "emp": 6283948,
     "avh": 2373,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2006,
     "country": "Cambodia",
     "pop": 13477709,
     "emp": 6498388,
     "avh": 2374,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2007,
     "country": "Cambodia",
     "pop": 13679962,
     "emp": 6708874,
     "avh": 2380,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2008,
     "country": "Cambodia",
     "pop": 13883834,
     "emp": 6953770,
     "avh": 2382,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2009,
     "country": "Cambodia",
     "pop": 14093604,
     "emp": 7187595,
     "avh": 2389,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2010,
     "country": "Cambodia",
     "pop": 14312212,
     "emp": 7587648,
     "avh": 2390,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2011,
     "country": "Cambodia",
     "pop": 14541423,
     "emp": 7829373,
     "avh": 2408,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2012,
     "country": "Cambodia",
     "pop": 14780454,
     "emp": 7788944,
     "avh": 2414,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2013,
     "country": "Cambodia",
     "pop": 15026332,
     "emp": 7711942,
     "avh": 2423,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2014,
     "country": "Cambodia",
     "pop": 15274503,
     "emp": 7843570,
     "avh": 2442,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2015,
     "country": "Cambodia",
     "pop": 15521436,
     "emp": 7986384,
     "avh": 2458,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2016,
     "country": "Cambodia",
     "pop": 15766292,
     "emp": 8316205,
     "avh": 2467,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2017,
     "country": "Cambodia",
     "pop": 16009409,
     "emp": 8455260,
     "avh": 2474,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2018,
     "country": "Cambodia",
     "pop": 16249792,
     "emp": 8585101,
     "avh": 2474,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2019,
     "country": "Cambodia",
     "pop": 16486542,
     "emp": 8731463,
     "avh": 2474,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 1953,
     "country": "Republic of Korea",
     "pop": 21030860,
     "emp": 6136804,
     "avh": 2484,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1954,
     "country": "Republic of Korea",
     "pop": 21228953,
     "emp": 6140399,
     "avh": 2520,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1955,
     "country": "Republic of Korea",
     "pop": 21521539,
     "emp": 6170074,
     "avh": 2557,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1956,
     "country": "Republic of Korea",
     "pop": 22000258,
     "emp": 6251142,
     "avh": 2594,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1957,
     "country": "Republic of Korea",
     "pop": 22579766,
     "emp": 6358147,
     "avh": 2632,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1958,
     "country": "Republic of Korea",
     "pop": 23220935,
     "emp": 6479396,
     "avh": 2670,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1959,
     "country": "Republic of Korea",
     "pop": 23947603,
     "emp": 6621012,
     "avh": 2709,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1960,
     "country": "Republic of Korea",
     "pop": 24749301,
     "emp": 6779468,
     "avh": 2748,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1961,
     "country": "Republic of Korea",
     "pop": 25577837,
     "emp": 7053734,
     "avh": 2788,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1962,
     "country": "Republic of Korea",
     "pop": 26383168,
     "emp": 7324624,
     "avh": 2829,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1963,
     "country": "Republic of Korea",
     "pop": 27173065,
     "emp": 7594179,
     "avh": 2870,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1964,
     "country": "Republic of Korea",
     "pop": 27944663,
     "emp": 7729735,
     "avh": 2779,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1965,
     "country": "Republic of Korea",
     "pop": 28664650,
     "emp": 8145442,
     "avh": 2900,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1966,
     "country": "Republic of Korea",
     "pop": 29394623,
     "emp": 8359321,
     "avh": 2882,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1967,
     "country": "Republic of Korea",
     "pop": 30088646,
     "emp": 8659553,
     "avh": 2918,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1968,
     "country": "Republic of Korea",
     "pop": 30794651,
     "emp": 9098355,
     "avh": 2973,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1969,
     "country": "Republic of Korea",
     "pop": 31499660,
     "emp": 9323279,
     "avh": 3039,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1970,
     "country": "Republic of Korea",
     "pop": 32195681,
     "emp": 9656647,
     "avh": 2918,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1971,
     "country": "Republic of Korea",
     "pop": 32850720,
     "emp": 9991244,
     "avh": 2913,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1972,
     "country": "Republic of Korea",
     "pop": 33506523,
     "emp": 10436934,
     "avh": 2907,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1973,
     "country": "Republic of Korea",
     "pop": 34154087,
     "emp": 11028759,
     "avh": 2901,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1974,
     "country": "Republic of Korea",
     "pop": 34780882,
     "emp": 11513650,
     "avh": 2895,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1975,
     "country": "Republic of Korea",
     "pop": 35378661,
     "emp": 11788263,
     "avh": 2889,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1976,
     "country": "Republic of Korea",
     "pop": 35942029,
     "emp": 12509263,
     "avh": 2884,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1977,
     "country": "Republic of Korea",
     "pop": 36475413,
     "emp": 12896862,
     "avh": 2878,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1978,
     "country": "Republic of Korea",
     "pop": 36992188,
     "emp": 13476483,
     "avh": 2872,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1979,
     "country": "Republic of Korea",
     "pop": 37511315,
     "emp": 13669035,
     "avh": 2866,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1980,
     "country": "Republic of Korea",
     "pop": 38045607,
     "emp": 13730458,
     "avh": 2860,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1981,
     "country": "Republic of Korea",
     "pop": 38602289,
     "emp": 14056676,
     "avh": 2876,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1982,
     "country": "Republic of Korea",
     "pop": 39175212,
     "emp": 14403164,
     "avh": 2889,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1983,
     "country": "Republic of Korea",
     "pop": 39747794,
     "emp": 14526021,
     "avh": 2907,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1984,
     "country": "Republic of Korea",
     "pop": 40296228,
     "emp": 14469463,
     "avh": 2903,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1985,
     "country": "Republic of Korea",
     "pop": 40804402,
     "emp": 15052285,
     "avh": 2878,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1986,
     "country": "Republic of Korea",
     "pop": 41265113,
     "emp": 15610172,
     "avh": 2907,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1987,
     "country": "Republic of Korea",
     "pop": 41686560,
     "emp": 16470043,
     "avh": 2876,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1988,
     "country": "Republic of Korea",
     "pop": 42086662,
     "emp": 16984851,
     "avh": 2830,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1989,
     "country": "Republic of Korea",
     "pop": 42491198,
     "emp": 17674766,
     "avh": 2728,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1990,
     "country": "Republic of Korea",
     "pop": 42918419,
     "emp": 18206083,
     "avh": 2674,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1991,
     "country": "Republic of Korea",
     "pop": 43373151,
     "emp": 18785657,
     "avh": 2658,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1992,
     "country": "Republic of Korea",
     "pop": 43848218,
     "emp": 19158023,
     "avh": 2636,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1993,
     "country": "Republic of Korea",
     "pop": 44335028,
     "emp": 19401760,
     "avh": 2653,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1994,
     "country": "Republic of Korea",
     "pop": 44820073,
     "emp": 20037492,
     "avh": 2637,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1995,
     "country": "Republic of Korea",
     "pop": 45292522,
     "emp": 20617839,
     "avh": 2645,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1996,
     "country": "Republic of Korea",
     "pop": 45751022,
     "emp": 21072547,
     "avh": 2634,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1997,
     "country": "Republic of Korea",
     "pop": 46196054,
     "emp": 21443801,
     "avh": 2579,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1998,
     "country": "Republic of Korea",
     "pop": 46620691,
     "emp": 20192911,
     "avh": 2485,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1999,
     "country": "Republic of Korea",
     "pop": 47016957,
     "emp": 20578386,
     "avh": 2492,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2000,
     "country": "Republic of Korea",
     "pop": 47379241,
     "emp": 21441123,
     "avh": 2509,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2001,
     "country": "Republic of Korea",
     "pop": 47706224,
     "emp": 21845386,
     "avh": 2496,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2002,
     "country": "Republic of Korea",
     "pop": 47999547,
     "emp": 22457611,
     "avh": 2461,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2003,
     "country": "Republic of Korea",
     "pop": 48260897,
     "emp": 22433038,
     "avh": 2421,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2004,
     "country": "Republic of Korea",
     "pop": 48493441,
     "emp": 22875492,
     "avh": 2389,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2005,
     "country": "Republic of Korea",
     "pop": 48701073,
     "emp": 23075504,
     "avh": 2348,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2006,
     "country": "Republic of Korea",
     "pop": 48880451,
     "emp": 23399885,
     "avh": 2343,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2007,
     "country": "Republic of Korea",
     "pop": 49034810,
     "emp": 23730854,
     "avh": 2303,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2008,
     "country": "Republic of Korea",
     "pop": 49182456,
     "emp": 23836549,
     "avh": 2216,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2009,
     "country": "Republic of Korea",
     "pop": 49347461,
     "emp": 23706533,
     "avh": 2167,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2010,
     "country": "Republic of Korea",
     "pop": 49545636,
     "emp": 24028720,
     "avh": 2153,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2011,
     "country": "Republic of Korea",
     "pop": 49786159,
     "emp": 24452390,
     "avh": 2126,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2012,
     "country": "Republic of Korea",
     "pop": 50060639,
     "emp": 24885498,
     "avh": 2110,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2013,
     "country": "Republic of Korea",
     "pop": 50345717,
     "emp": 25257593,
     "avh": 2100,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2014,
     "country": "Republic of Korea",
     "pop": 50607907,
     "emp": 25826217,
     "avh": 2070,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2015,
     "country": "Republic of Korea",
     "pop": 50823093,
     "emp": 26079252,
     "avh": 2077,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2016,
     "country": "Republic of Korea",
     "pop": 50983457,
     "emp": 26288166,
     "avh": 2062,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2017,
     "country": "Republic of Korea",
     "pop": 51096415,
     "emp": 26553548,
     "avh": 2012,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2018,
     "country": "Republic of Korea",
     "pop": 51171706,
     "emp": 26581413,
     "avh": 1987,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2019,
     "country": "Republic of Korea",
     "pop": 51225308,
     "emp": 26798534,
     "avh": 1979,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 1970,
     "country": "Sri Lanka",
     "pop": 12485740,
     "emp": 3792112,
     "avh": 1895,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1971,
     "country": "Sri Lanka",
     "pop": 12747821,
     "emp": 3910505,
     "avh": 1895,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1972,
     "country": "Sri Lanka",
     "pop": 13002231,
     "emp": 4003754,
     "avh": 1894,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1973,
     "country": "Sri Lanka",
     "pop": 13252036,
     "emp": 4077305,
     "avh": 1894,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1974,
     "country": "Sri Lanka",
     "pop": 13501935,
     "emp": 4158177,
     "avh": 1894,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1975,
     "country": "Sri Lanka",
     "pop": 13755146,
     "emp": 4227550,
     "avh": 1894,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1976,
     "country": "Sri Lanka",
     "pop": 14012899,
     "emp": 4298401,
     "avh": 1894,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1977,
     "country": "Sri Lanka",
     "pop": 14273495,
     "emp": 4359209,
     "avh": 1949,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1978,
     "country": "Sri Lanka",
     "pop": 14533690,
     "emp": 4405646,
     "avh": 1953,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1979,
     "country": "Sri Lanka",
     "pop": 14788862,
     "emp": 4437107,
     "avh": 1956,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1980,
     "country": "Sri Lanka",
     "pop": 15035834,
     "emp": 4466649,
     "avh": 1960,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1981,
     "country": "Sri Lanka",
     "pop": 15272831,
     "emp": 4527864,
     "avh": 1968,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1982,
     "country": "Sri Lanka",
     "pop": 15501207,
     "emp": 4621613,
     "avh": 1972,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1983,
     "country": "Sri Lanka",
     "pop": 15724651,
     "emp": 4714650,
     "avh": 1986,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1984,
     "country": "Sri Lanka",
     "pop": 15948487,
     "emp": 4808556,
     "avh": 1966,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1985,
     "country": "Sri Lanka",
     "pop": 16176280,
     "emp": 4904414,
     "avh": 1893,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1986,
     "country": "Sri Lanka",
     "pop": 16408859,
     "emp": 4935110,
     "avh": 1956,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1987,
     "country": "Sri Lanka",
     "pop": 16643952,
     "emp": 4965426,
     "avh": 1962,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1988,
     "country": "Sri Lanka",
     "pop": 16878189,
     "emp": 4994349,
     "avh": 1969,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1989,
     "country": "Sri Lanka",
     "pop": 17106753,
     "emp": 5020471,
     "avh": 1976,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1990,
     "country": "Sri Lanka",
     "pop": 17325773,
     "emp": 5042705,
     "avh": 1982,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1991,
     "country": "Sri Lanka",
     "pop": 17535729,
     "emp": 5011731,
     "avh": 1998,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1992,
     "country": "Sri Lanka",
     "pop": 17736821,
     "emp": 4957777,
     "avh": 2001,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1993,
     "country": "Sri Lanka",
     "pop": 17924823,
     "emp": 5196573,
     "avh": 2017,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1994,
     "country": "Sri Lanka",
     "pop": 18094477,
     "emp": 5276505,
     "avh": 1961,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1995,
     "country": "Sri Lanka",
     "pop": 18242912,
     "emp": 5352440,
     "avh": 1943,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1996,
     "country": "Sri Lanka",
     "pop": 18367288,
     "emp": 5532288,
     "avh": 1936,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1997,
     "country": "Sri Lanka",
     "pop": 18470900,
     "emp": 5603227,
     "avh": 1894,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1998,
     "country": "Sri Lanka",
     "pop": 18564599,
     "emp": 6043851,
     "avh": 1910,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1999,
     "country": "Sri Lanka",
     "pop": 18663284,
     "emp": 6076824,
     "avh": 1932,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2000,
     "country": "Sri Lanka",
     "pop": 18777601,
     "emp": 6304629,
     "avh": 2000,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2001,
     "country": "Sri Lanka",
     "pop": 18911730,
     "emp": 6230692,
     "avh": 1975,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2002,
     "country": "Sri Lanka",
     "pop": 19062482,
     "emp": 6513452,
     "avh": 1812,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2003,
     "country": "Sri Lanka",
     "pop": 19224037,
     "emp": 7007031,
     "avh": 1733,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2004,
     "country": "Sri Lanka",
     "pop": 19387153,
     "emp": 7387707,
     "avh": 1856,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2005,
     "country": "Sri Lanka",
     "pop": 19544988,
     "emp": 7511601,
     "avh": 1887,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2006,
     "country": "Sri Lanka",
     "pop": 19695972,
     "emp": 7098953,
     "avh": 1835,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2007,
     "country": "Sri Lanka",
     "pop": 19842044,
     "emp": 7036007,
     "avh": 1861,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2008,
     "country": "Sri Lanka",
     "pop": 19983984,
     "emp": 7641491,
     "avh": 1823,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2009,
     "country": "Sri Lanka",
     "pop": 20123508,
     "emp": 7595530,
     "avh": 1810,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2010,
     "country": "Sri Lanka",
     "pop": 20261737,
     "emp": 7700440,
     "avh": 1872,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2011,
     "country": "Sri Lanka",
     "pop": 20398497,
     "emp": 7592000,
     "avh": 1993,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2012,
     "country": "Sri Lanka",
     "pop": 20532600,
     "emp": 7488999,
     "avh": 2052,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2013,
     "country": "Sri Lanka",
     "pop": 20663046,
     "emp": 7681000,
     "avh": 1896,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2014,
     "country": "Sri Lanka",
     "pop": 20788511,
     "emp": 7700000,
     "avh": 1926,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2015,
     "country": "Sri Lanka",
     "pop": 20908027,
     "emp": 7831000,
     "avh": 1924,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2016,
     "country": "Sri Lanka",
     "pop": 21021171,
     "emp": 7948000,
     "avh": 1922,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2017,
     "country": "Sri Lanka",
     "pop": 21128032,
     "emp": 8208000,
     "avh": 1922,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2018,
     "country": "Sri Lanka",
     "pop": 21228763,
     "emp": 8015000,
     "avh": 1922,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2019,
     "country": "Sri Lanka",
     "pop": 21323733,
     "emp": 8180496,
     "avh": 1922,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 1995,
     "country": "Lithuania",
     "pop": 3626612,
     "emp": 1483366,
     "avh": 1729,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 1996,
     "country": "Lithuania",
     "pop": 3603756,
     "emp": 1499137,
     "avh": 1727,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 1997,
     "country": "Lithuania",
     "pop": 3579910,
     "emp": 1509386,
     "avh": 1732,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 1998,
     "country": "Lithuania",
     "pop": 3555141,
     "emp": 1498062,
     "avh": 1779,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 1999,
     "country": "Lithuania",
     "pop": 3529181,
     "emp": 1464729,
     "avh": 1726,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2000,
     "country": "Lithuania",
     "pop": 3501839,
     "emp": 1401248,
     "avh": 1846,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2001,
     "country": "Lithuania",
     "pop": 3473625,
     "emp": 1348173,
     "avh": 1831,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2002,
     "country": "Lithuania",
     "pop": 3444763,
     "emp": 1396500,
     "avh": 1802,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2003,
     "country": "Lithuania",
     "pop": 3414365,
     "emp": 1426514,
     "avh": 1785,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2004,
     "country": "Lithuania",
     "pop": 3381131,
     "emp": 1412940,
     "avh": 1878,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2005,
     "country": "Lithuania",
     "pop": 3344268,
     "emp": 1431178,
     "avh": 1878,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2006,
     "country": "Lithuania",
     "pop": 3303335,
     "emp": 1431899,
     "avh": 1874,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2007,
     "country": "Lithuania",
     "pop": 3258980,
     "emp": 1458706,
     "avh": 1903,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2008,
     "country": "Lithuania",
     "pop": 3212865,
     "emp": 1433779,
     "avh": 1933,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2009,
     "country": "Lithuania",
     "pop": 3167265,
     "emp": 1319391,
     "avh": 1862,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2010,
     "country": "Lithuania",
     "pop": 3123816,
     "emp": 1259915,
     "avh": 1921,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2011,
     "country": "Lithuania",
     "pop": 3083403,
     "emp": 1279044,
     "avh": 1896,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2012,
     "country": "Lithuania",
     "pop": 3045561,
     "emp": 1304592,
     "avh": 1893,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2013,
     "country": "Lithuania",
     "pop": 3008934,
     "emp": 1319800,
     "avh": 1877,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2014,
     "country": "Lithuania",
     "pop": 2971497,
     "emp": 1341530,
     "avh": 1868,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2015,
     "country": "Lithuania",
     "pop": 2931880,
     "emp": 1354883,
     "avh": 1894,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2016,
     "country": "Lithuania",
     "pop": 2889557,
     "emp": 1383092,
     "avh": 1918,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2017,
     "country": "Lithuania",
     "pop": 2845414,
     "emp": 1371194,
     "avh": 1876,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2018,
     "country": "Lithuania",
     "pop": 2801264,
     "emp": 1381584,
     "avh": 1884,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2019,
     "country": "Lithuania",
     "pop": 2759627,
     "emp": 1379528,
     "avh": 1886,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 1970,
     "country": "Luxembourg",
     "pop": 339668,
     "emp": 141585,
     "avh": 1845,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1971,
     "country": "Luxembourg",
     "pop": 342226,
     "emp": 145843,
     "avh": 1842,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1972,
     "country": "Luxembourg",
     "pop": 345103,
     "emp": 149203,
     "avh": 1821,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1973,
     "country": "Luxembourg",
     "pop": 348173,
     "emp": 151682,
     "avh": 1792,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1974,
     "country": "Luxembourg",
     "pop": 351189,
     "emp": 155203,
     "avh": 1768,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1975,
     "country": "Luxembourg",
     "pop": 353983,
     "emp": 156628,
     "avh": 1741,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1976,
     "country": "Luxembourg",
     "pop": 356564,
     "emp": 156783,
     "avh": 1757,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1977,
     "country": "Luxembourg",
     "pop": 358968,
     "emp": 157434,
     "avh": 1732,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1978,
     "country": "Luxembourg",
     "pop": 361073,
     "emp": 157168,
     "avh": 1715,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1979,
     "country": "Luxembourg",
     "pop": 362789,
     "emp": 158329,
     "avh": 1698,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1980,
     "country": "Luxembourg",
     "pop": 364038,
     "emp": 159373,
     "avh": 1682,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1981,
     "country": "Luxembourg",
     "pop": 364781,
     "emp": 159764,
     "avh": 1658,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1982,
     "country": "Luxembourg",
     "pop": 365098,
     "emp": 159362,
     "avh": 1640,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1983,
     "country": "Luxembourg",
     "pop": 365305,
     "emp": 158875,
     "avh": 1634,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1984,
     "country": "Luxembourg",
     "pop": 365795,
     "emp": 159827,
     "avh": 1621,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1985,
     "country": "Luxembourg",
     "pop": 366884,
     "emp": 161423,
     "avh": 1634,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1986,
     "country": "Luxembourg",
     "pop": 368666,
     "emp": 165200,
     "avh": 1626,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1987,
     "country": "Luxembourg",
     "pop": 371078,
     "emp": 169605,
     "avh": 1624,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1988,
     "country": "Luxembourg",
     "pop": 374118,
     "emp": 174284,
     "avh": 1644,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1989,
     "country": "Luxembourg",
     "pop": 377706,
     "emp": 181043,
     "avh": 1633,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1990,
     "country": "Luxembourg",
     "pop": 381791,
     "emp": 188045,
     "avh": 1633,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1991,
     "country": "Luxembourg",
     "pop": 386352,
     "emp": 195245,
     "avh": 1616,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1992,
     "country": "Luxembourg",
     "pop": 391394,
     "emp": 200572,
     "avh": 1595,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1993,
     "country": "Luxembourg",
     "pop": 396810,
     "emp": 204229,
     "avh": 1602,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1994,
     "country": "Luxembourg",
     "pop": 402433,
     "emp": 209814,
     "avh": 1581,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1995,
     "country": "Luxembourg",
     "pop": 408149,
     "emp": 215219,
     "avh": 1592,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1996,
     "country": "Luxembourg",
     "pop": 413999,
     "emp": 220953,
     "avh": 1599,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1997,
     "country": "Luxembourg",
     "pop": 419974,
     "emp": 228857,
     "avh": 1598,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1998,
     "country": "Luxembourg",
     "pop": 425833,
     "emp": 239229,
     "avh": 1593,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1999,
     "country": "Luxembourg",
     "pop": 431262,
     "emp": 250486,
     "avh": 1591,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2000,
     "country": "Luxembourg",
     "pop": 436103,
     "emp": 263161,
     "avh": 1602,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2001,
     "country": "Luxembourg",
     "pop": 440198,
     "emp": 277480,
     "avh": 1585,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2002,
     "country": "Luxembourg",
     "pop": 443726,
     "emp": 284791,
     "avh": 1580,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2003,
     "country": "Luxembourg",
     "pop": 447322,
     "emp": 288865,
     "avh": 1578,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2004,
     "country": "Luxembourg",
     "pop": 451819,
     "emp": 294427,
     "avh": 1577,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2005,
     "country": "Luxembourg",
     "pop": 457842,
     "emp": 301968,
     "avh": 1549,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2006,
     "country": "Luxembourg",
     "pop": 465610,
     "emp": 313813,
     "avh": 1552,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2007,
     "country": "Luxembourg",
     "pop": 474915,
     "emp": 329059,
     "avh": 1566,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2008,
     "country": "Luxembourg",
     "pop": 485405,
     "emp": 346128,
     "avh": 1566,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2009,
     "country": "Luxembourg",
     "pop": 496527,
     "emp": 351202,
     "avh": 1516,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2010,
     "country": "Luxembourg",
     "pop": 507889,
     "emp": 359174,
     "avh": 1516,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2011,
     "country": "Luxembourg",
     "pop": 519307,
     "emp": 369765,
     "avh": 1515,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2012,
     "country": "Luxembourg",
     "pop": 530857,
     "emp": 377971,
     "avh": 1508,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2013,
     "country": "Luxembourg",
     "pop": 542560,
     "emp": 384378,
     "avh": 1502,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2014,
     "country": "Luxembourg",
     "pop": 554516,
     "emp": 393516,
     "avh": 1506,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2015,
     "country": "Luxembourg",
     "pop": 566741,
     "emp": 402901,
     "avh": 1513,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2016,
     "country": "Luxembourg",
     "pop": 579264,
     "emp": 414172,
     "avh": 1512,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2017,
     "country": "Luxembourg",
     "pop": 591910,
     "emp": 428246,
     "avh": 1505,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2018,
     "country": "Luxembourg",
     "pop": 604245,
     "emp": 444745,
     "avh": 1505,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2019,
     "country": "Luxembourg",
     "pop": 615729,
     "emp": 460662,
     "avh": 1505,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 1995,
     "country": "Latvia",
     "pop": 2508480,
     "emp": 938803,
     "avh": 1975,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 1996,
     "country": "Latvia",
     "pop": 2478832,
     "emp": 943430,
     "avh": 1975,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 1997,
     "country": "Latvia",
     "pop": 2453307,
     "emp": 985042,
     "avh": 1975,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 1998,
     "country": "Latvia",
     "pop": 2430549,
     "emp": 981510,
     "avh": 1975,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 1999,
     "country": "Latvia",
     "pop": 2408092,
     "emp": 962803,
     "avh": 1975,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2000,
     "country": "Latvia",
     "pop": 2384164,
     "emp": 930018,
     "avh": 1975,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2001,
     "country": "Latvia",
     "pop": 2358693,
     "emp": 947188,
     "avh": 1987,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2002,
     "country": "Latvia",
     "pop": 2332530,
     "emp": 961377,
     "avh": 1937,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2003,
     "country": "Latvia",
     "pop": 2305848,
     "emp": 965614,
     "avh": 1927,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2004,
     "country": "Latvia",
     "pop": 2278921,
     "emp": 967166,
     "avh": 1878,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2005,
     "country": "Latvia",
     "pop": 2251993,
     "emp": 974700,
     "avh": 1905,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2006,
     "country": "Latvia",
     "pop": 2225066,
     "emp": 1027880,
     "avh": 1906,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2007,
     "country": "Latvia",
     "pop": 2198089,
     "emp": 1062813,
     "avh": 1878,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2008,
     "country": "Latvia",
     "pop": 2171259,
     "emp": 1051958,
     "avh": 2002,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2009,
     "country": "Latvia",
     "pop": 2144785,
     "emp": 904885,
     "avh": 1952,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2010,
     "country": "Latvia",
     "pop": 2118861,
     "emp": 851937,
     "avh": 1935,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2011,
     "country": "Latvia",
     "pop": 2093610,
     "emp": 870168,
     "avh": 1951,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2012,
     "country": "Latvia",
     "pop": 2069016,
     "emp": 883299,
     "avh": 1934,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2013,
     "country": "Latvia",
     "pop": 2044957,
     "emp": 902746,
     "avh": 1927,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2014,
     "country": "Latvia",
     "pop": 2021219,
     "emp": 888546,
     "avh": 1938,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2015,
     "country": "Latvia",
     "pop": 1997674,
     "emp": 897909,
     "avh": 1901,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2016,
     "country": "Latvia",
     "pop": 1974266,
     "emp": 892814,
     "avh": 1902,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2017,
     "country": "Latvia",
     "pop": 1951097,
     "emp": 889880,
     "avh": 1886,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2018,
     "country": "Latvia",
     "pop": 1928459,
     "emp": 900681,
     "avh": 1899,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2019,
     "country": "Latvia",
     "pop": 1906743,
     "emp": 896588,
     "avh": 1864,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 1950,
     "country": "Mexico",
     "pop": 27793445,
     "emp": 7894485,
     "avh": 2274,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1951,
     "country": "Mexico",
     "pop": 28584803,
     "emp": 7985795,
     "avh": 2274,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1952,
     "country": "Mexico",
     "pop": 29412292,
     "emp": 8078160,
     "avh": 2273,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1953,
     "country": "Mexico",
     "pop": 30277714,
     "emp": 8171592,
     "avh": 2273,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1954,
     "country": "Mexico",
     "pop": 31183016,
     "emp": 8266106,
     "avh": 2273,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1955,
     "country": "Mexico",
     "pop": 32130241,
     "emp": 8364489,
     "avh": 2272,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1956,
     "country": "Mexico",
     "pop": 33121542,
     "emp": 8482953,
     "avh": 2272,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1957,
     "country": "Mexico",
     "pop": 34165230,
     "emp": 8603094,
     "avh": 2271,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1958,
     "country": "Mexico",
     "pop": 35264284,
     "emp": 8724937,
     "avh": 2271,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1959,
     "country": "Mexico",
     "pop": 36421979,
     "emp": 8848505,
     "avh": 2271,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1960,
     "country": "Mexico",
     "pop": 37641665,
     "emp": 8978282,
     "avh": 2270,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1961,
     "country": "Mexico",
     "pop": 38868847,
     "emp": 9225663,
     "avh": 2261,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1962,
     "country": "Mexico",
     "pop": 40122891,
     "emp": 9479859,
     "avh": 2252,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1963,
     "country": "Mexico",
     "pop": 41403790,
     "emp": 9741058,
     "avh": 2243,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1964,
     "country": "Mexico",
     "pop": 42711551,
     "emp": 10009454,
     "avh": 2234,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1965,
     "country": "Mexico",
     "pop": 44046159,
     "emp": 10304434,
     "avh": 2225,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1966,
     "country": "Mexico",
     "pop": 45407704,
     "emp": 10622549,
     "avh": 2216,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1967,
     "country": "Mexico",
     "pop": 46830034,
     "emp": 10950484,
     "avh": 2208,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1968,
     "country": "Mexico",
     "pop": 48316287,
     "emp": 11288542,
     "avh": 2199,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1969,
     "country": "Mexico",
     "pop": 49869748,
     "emp": 11637039,
     "avh": 2190,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1970,
     "country": "Mexico",
     "pop": 51493565,
     "emp": 12024333,
     "avh": 2181,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1971,
     "country": "Mexico",
     "pop": 53076373,
     "emp": 12673826,
     "avh": 2180,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1972,
     "country": "Mexico",
     "pop": 54689943,
     "emp": 13358402,
     "avh": 2178,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1973,
     "country": "Mexico",
     "pop": 56324303,
     "emp": 14079954,
     "avh": 2176,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1974,
     "country": "Mexico",
     "pop": 57966804,
     "emp": 14840479,
     "avh": 2175,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1975,
     "country": "Mexico",
     "pop": 59607953,
     "emp": 15752620,
     "avh": 2173,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1976,
     "country": "Mexico",
     "pop": 61242190,
     "emp": 16421882,
     "avh": 2172,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1977,
     "country": "Mexico",
     "pop": 62869903,
     "emp": 17119573,
     "avh": 2170,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1978,
     "country": "Mexico",
     "pop": 64494869,
     "emp": 17943798,
     "avh": 2169,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1979,
     "country": "Mexico",
     "pop": 66123897,
     "emp": 19036102,
     "avh": 2167,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1980,
     "country": "Mexico",
     "pop": 67761372,
     "emp": 20242376,
     "avh": 2166,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1981,
     "country": "Mexico",
     "pop": 69407624,
     "emp": 20929222,
     "avh": 2167,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1982,
     "country": "Mexico",
     "pop": 71058654,
     "emp": 21639320,
     "avh": 2167,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1983,
     "country": "Mexico",
     "pop": 72709299,
     "emp": 21733552,
     "avh": 2168,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1984,
     "country": "Mexico",
     "pop": 74352631,
     "emp": 22652019,
     "avh": 2169,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1985,
     "country": "Mexico",
     "pop": 75983485,
     "emp": 23767000,
     "avh": 2170,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1986,
     "country": "Mexico",
     "pop": 77599098,
     "emp": 24525621,
     "avh": 2171,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1987,
     "country": "Mexico",
     "pop": 79200081,
     "emp": 25387683,
     "avh": 2172,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1988,
     "country": "Mexico",
     "pop": 80788721,
     "emp": 26279592,
     "avh": 2173,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1989,
     "country": "Mexico",
     "pop": 82368931,
     "emp": 27258512,
     "avh": 2174,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1990,
     "country": "Mexico",
     "pop": 83943132,
     "emp": 28222749,
     "avh": 2175,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1991,
     "country": "Mexico",
     "pop": 85512623,
     "emp": 29140775,
     "avh": 2168,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1992,
     "country": "Mexico",
     "pop": 87075138,
     "emp": 30072704,
     "avh": 2160,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1993,
     "country": "Mexico",
     "pop": 88625440,
     "emp": 30835588,
     "avh": 2153,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1994,
     "country": "Mexico",
     "pop": 90156400,
     "emp": 31702894,
     "avh": 2146,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1995,
     "country": "Mexico",
     "pop": 91663285,
     "emp": 32004947,
     "avh": 2161,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1996,
     "country": "Mexico",
     "pop": 93147044,
     "emp": 33091346,
     "avh": 2192,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1997,
     "country": "Mexico",
     "pop": 94611002,
     "emp": 33926212,
     "avh": 2241,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1998,
     "country": "Mexico",
     "pop": 96056321,
     "emp": 35243160,
     "avh": 2168,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1999,
     "country": "Mexico",
     "pop": 97484832,
     "emp": 36636566,
     "avh": 2242,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2000,
     "country": "Mexico",
     "pop": 98899845,
     "emp": 37879333,
     "avh": 2174,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2001,
     "country": "Mexico",
     "pop": 100298153,
     "emp": 38762199,
     "avh": 2146,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2002,
     "country": "Mexico",
     "pop": 101684758,
     "emp": 39608757,
     "avh": 2196,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2003,
     "country": "Mexico",
     "pop": 103081020,
     "emp": 40279323,
     "avh": 2143,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2004,
     "country": "Mexico",
     "pop": 104514932,
     "emp": 41629604,
     "avh": 2123,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2005,
     "country": "Mexico",
     "pop": 106005203,
     "emp": 42079135,
     "avh": 2105,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2006,
     "country": "Mexico",
     "pop": 107560153,
     "emp": 43378459,
     "avh": 2067,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2007,
     "country": "Mexico",
     "pop": 109170502,
     "emp": 44231250,
     "avh": 2045,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2008,
     "country": "Mexico",
     "pop": 110815271,
     "emp": 44943527,
     "avh": 2105,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2009,
     "country": "Mexico",
     "pop": 112463887,
     "emp": 45435352,
     "avh": 1973,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2010,
     "country": "Mexico",
     "pop": 114092963,
     "emp": 46121620,
     "avh": 2150,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2011,
     "country": "Mexico",
     "pop": 115695473,
     "emp": 47138889,
     "avh": 2121,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2012,
     "country": "Mexico",
     "pop": 117274155,
     "emp": 48706733,
     "avh": 2120,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2013,
     "country": "Mexico",
     "pop": 118827161,
     "emp": 49227310,
     "avh": 2136,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2014,
     "country": "Mexico",
     "pop": 120355128,
     "emp": 49415409,
     "avh": 2134,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2015,
     "country": "Mexico",
     "pop": 121858258,
     "emp": 50611331,
     "avh": 2140,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2016,
     "country": "Mexico",
     "pop": 123333376,
     "emp": 51594753,
     "avh": 2146,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2017,
     "country": "Mexico",
     "pop": 124777324,
     "emp": 52340751,
     "avh": 2148,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2018,
     "country": "Mexico",
     "pop": 126190788,
     "emp": 53721195,
     "avh": 2149,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2019,
     "country": "Mexico",
     "pop": 127575529,
     "emp": 54993595,
     "avh": 2137,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 1994,
     "country": "Malta",
     "pop": 373750,
     "emp": 137641,
     "avh": 2258,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 1995,
     "country": "Malta",
     "pop": 376896,
     "emp": 143878,
     "avh": 2257,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 1996,
     "country": "Malta",
     "pop": 380253,
     "emp": 146460,
     "avh": 2250,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 1997,
     "country": "Malta",
     "pop": 383760,
     "emp": 147085,
     "avh": 2252,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 1998,
     "country": "Malta",
     "pop": 387290,
     "emp": 147176,
     "avh": 2277,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 1999,
     "country": "Malta",
     "pop": 390627,
     "emp": 148549,
     "avh": 2254,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2000,
     "country": "Malta",
     "pop": 393645,
     "emp": 146938,
     "avh": 2251,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2001,
     "country": "Malta",
     "pop": 396328,
     "emp": 149420,
     "avh": 2159,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2002,
     "country": "Malta",
     "pop": 398718,
     "emp": 149615,
     "avh": 2216,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2003,
     "country": "Malta",
     "pop": 400859,
     "emp": 148862,
     "avh": 2191,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2004,
     "country": "Malta",
     "pop": 402817,
     "emp": 149137,
     "avh": 2091,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2005,
     "country": "Malta",
     "pop": 404653,
     "emp": 150748,
     "avh": 2157,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2006,
     "country": "Malta",
     "pop": 406328,
     "emp": 153065,
     "avh": 2162,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2007,
     "country": "Malta",
     "pop": 407852,
     "emp": 156535,
     "avh": 2153,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2008,
     "country": "Malta",
     "pop": 409491,
     "emp": 160115,
     "avh": 2162,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2009,
     "country": "Malta",
     "pop": 411552,
     "emp": 159772,
     "avh": 2168,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2010,
     "country": "Malta",
     "pop": 414253,
     "emp": 162805,
     "avh": 2110,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2011,
     "country": "Malta",
     "pop": 417714,
     "emp": 168292,
     "avh": 2047,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2012,
     "country": "Malta",
     "pop": 421809,
     "emp": 173115,
     "avh": 2013,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2013,
     "country": "Malta",
     "pop": 426151,
     "emp": 179026,
     "avh": 1988,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2014,
     "country": "Malta",
     "pop": 430197,
     "emp": 186674,
     "avh": 1943,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2015,
     "country": "Malta",
     "pop": 433559,
     "emp": 191138,
     "avh": 1933,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2016,
     "country": "Malta",
     "pop": 436097,
     "emp": 195955,
     "avh": 1985,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2017,
     "country": "Malta",
     "pop": 437933,
     "emp": 206923,
     "avh": 1897,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2018,
     "country": "Malta",
     "pop": 439248,
     "emp": 212430,
     "avh": 1913,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2019,
     "country": "Malta",
     "pop": 440372,
     "emp": 220190,
     "avh": 1915,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 1970,
     "country": "Myanmar",
     "pop": 27269069,
     "emp": 10371445,
     "avh": 2446,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1971,
     "country": "Myanmar",
     "pop": 27913750,
     "emp": 10617727,
     "avh": 2446,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1972,
     "country": "Myanmar",
     "pop": 28570097,
     "emp": 10880557,
     "avh": 2446,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1973,
     "country": "Myanmar",
     "pop": 29238168,
     "emp": 11156081,
     "avh": 2445,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1974,
     "country": "Myanmar",
     "pop": 29918461,
     "emp": 11339281,
     "avh": 2445,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1975,
     "country": "Myanmar",
     "pop": 30611095,
     "emp": 11524341,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1976,
     "country": "Myanmar",
     "pop": 31314341,
     "emp": 11891622,
     "avh": 2442,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1977,
     "country": "Myanmar",
     "pop": 32026742,
     "emp": 12263115,
     "avh": 2441,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1978,
     "country": "Myanmar",
     "pop": 32748784,
     "emp": 12640000,
     "avh": 2440,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1979,
     "country": "Myanmar",
     "pop": 33481396,
     "emp": 12935000,
     "avh": 2439,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1980,
     "country": "Myanmar",
     "pop": 34224313,
     "emp": 13208000,
     "avh": 2437,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1981,
     "country": "Myanmar",
     "pop": 34976462,
     "emp": 13515000,
     "avh": 2436,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1982,
     "country": "Myanmar",
     "pop": 35734272,
     "emp": 13789999,
     "avh": 2435,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1983,
     "country": "Myanmar",
     "pop": 36491800,
     "emp": 14185000,
     "avh": 2434,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1984,
     "country": "Myanmar",
     "pop": 37241527,
     "emp": 14496999,
     "avh": 2435,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1985,
     "country": "Myanmar",
     "pop": 37977086,
     "emp": 14791999,
     "avh": 2435,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1986,
     "country": "Myanmar",
     "pop": 38698482,
     "emp": 15130001,
     "avh": 2436,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1987,
     "country": "Myanmar",
     "pop": 39404335,
     "emp": 15505000,
     "avh": 2437,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1988,
     "country": "Myanmar",
     "pop": 40085651,
     "emp": 15812999,
     "avh": 2437,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1989,
     "country": "Myanmar",
     "pop": 40731426,
     "emp": 16035999,
     "avh": 2438,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1990,
     "country": "Myanmar",
     "pop": 41335199,
     "emp": 15220999,
     "avh": 2439,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1991,
     "country": "Myanmar",
     "pop": 41890197,
     "emp": 15477908,
     "avh": 2440,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1992,
     "country": "Myanmar",
     "pop": 42401684,
     "emp": 15737000,
     "avh": 2441,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1993,
     "country": "Myanmar",
     "pop": 42890002,
     "emp": 16468999,
     "avh": 2442,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1994,
     "country": "Myanmar",
     "pop": 43383428,
     "emp": 16816999,
     "avh": 2442,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1995,
     "country": "Myanmar",
     "pop": 43901598,
     "emp": 17184034,
     "avh": 2443,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1996,
     "country": "Myanmar",
     "pop": 44452206,
     "emp": 17565164,
     "avh": 2443,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1997,
     "country": "Myanmar",
     "pop": 45027233,
     "emp": 17964000,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1998,
     "country": "Myanmar",
     "pop": 45611220,
     "emp": 18334999,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1999,
     "country": "Myanmar",
     "pop": 46181077,
     "emp": 18670137,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2000,
     "country": "Myanmar",
     "pop": 46719701,
     "emp": 18964189,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2001,
     "country": "Myanmar",
     "pop": 47225120,
     "emp": 19206537,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2002,
     "country": "Myanmar",
     "pop": 47702171,
     "emp": 19421958,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2003,
     "country": "Myanmar",
     "pop": 48148902,
     "emp": 19602981,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2004,
     "country": "Myanmar",
     "pop": 48564484,
     "emp": 19766767,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2005,
     "country": "Myanmar",
     "pop": 48949924,
     "emp": 19910879,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2006,
     "country": "Myanmar",
     "pop": 49301050,
     "emp": 20023220,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2007,
     "country": "Myanmar",
     "pop": 49621475,
     "emp": 20134742,
     "avh": 2444,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2008,
     "country": "Myanmar",
     "pop": 49929642,
     "emp": 20256004,
     "avh": 2443,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2009,
     "country": "Myanmar",
     "pop": 50250367,
     "emp": 20361679,
     "avh": 2443,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2010,
     "country": "Myanmar",
     "pop": 50600818,
     "emp": 20499628,
     "avh": 2442,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2011,
     "country": "Myanmar",
     "pop": 50990617,
     "emp": 20745088,
     "avh": 2443,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2012,
     "country": "Myanmar",
     "pop": 51413704,
     "emp": 20982116,
     "avh": 2443,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2013,
     "country": "Myanmar",
     "pop": 51852468,
     "emp": 21214149,
     "avh": 2443,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2014,
     "country": "Myanmar",
     "pop": 52280824,
     "emp": 21455953,
     "avh": 2443,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2015,
     "country": "Myanmar",
     "pop": 52680726,
     "emp": 21700300,
     "avh": 2445,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2016,
     "country": "Myanmar",
     "pop": 53045201,
     "emp": 21829284,
     "avh": 2445,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2017,
     "country": "Myanmar",
     "pop": 53382523,
     "emp": 21941400,
     "avh": 2447,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2018,
     "country": "Myanmar",
     "pop": 53708320,
     "emp": 22615804,
     "avh": 2447,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2019,
     "country": "Myanmar",
     "pop": 54045420,
     "emp": 22109308,
     "avh": 2447,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 1970,
     "country": "Malaysia",
     "pop": 10804131,
     "emp": 3554496,
     "avh": 2229,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1971,
     "country": "Malaysia",
     "pop": 11062433,
     "emp": 3671677,
     "avh": 2230,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1972,
     "country": "Malaysia",
     "pop": 11324277,
     "emp": 3781677,
     "avh": 2231,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1973,
     "country": "Malaysia",
     "pop": 11592638,
     "emp": 3892970,
     "avh": 2232,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1974,
     "country": "Malaysia",
     "pop": 11871104,
     "emp": 4013277,
     "avh": 2233,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1975,
     "country": "Malaysia",
     "pop": 12162187,
     "emp": 4142580,
     "avh": 2233,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1976,
     "country": "Malaysia",
     "pop": 12468689,
     "emp": 4277624,
     "avh": 2234,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1977,
     "country": "Malaysia",
     "pop": 12790312,
     "emp": 4422326,
     "avh": 2235,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1978,
     "country": "Malaysia",
     "pop": 13122839,
     "emp": 4585248,
     "avh": 2236,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1979,
     "country": "Malaysia",
     "pop": 13460031,
     "emp": 4746026,
     "avh": 2236,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1980,
     "country": "Malaysia",
     "pop": 13798085,
     "emp": 4890689,
     "avh": 2237,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1981,
     "country": "Malaysia",
     "pop": 14134058,
     "emp": 5155569,
     "avh": 2237,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1982,
     "country": "Malaysia",
     "pop": 14471211,
     "emp": 5323721,
     "avh": 2237,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1983,
     "country": "Malaysia",
     "pop": 14819424,
     "emp": 5527075,
     "avh": 2237,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1984,
     "country": "Malaysia",
     "pop": 15192298,
     "emp": 5625420,
     "avh": 2238,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1985,
     "country": "Malaysia",
     "pop": 15598927,
     "emp": 5695829,
     "avh": 2238,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1986,
     "country": "Malaysia",
     "pop": 16043731,
     "emp": 5802851,
     "avh": 2236,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1987,
     "country": "Malaysia",
     "pop": 16522000,
     "emp": 6043665,
     "avh": 2234,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1988,
     "country": "Malaysia",
     "pop": 17022465,
     "emp": 6241474,
     "avh": 2234,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1989,
     "country": "Malaysia",
     "pop": 17528961,
     "emp": 6497548,
     "avh": 2238,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1990,
     "country": "Malaysia",
     "pop": 18029824,
     "emp": 6831814,
     "avh": 2240,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1991,
     "country": "Malaysia",
     "pop": 18519937,
     "emp": 7009088,
     "avh": 2244,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1992,
     "country": "Malaysia",
     "pop": 19002656,
     "emp": 7189733,
     "avh": 2248,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1993,
     "country": "Malaysia",
     "pop": 19484898,
     "emp": 7511145,
     "avh": 2249,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1994,
     "country": "Malaysia",
     "pop": 19977500,
     "emp": 7628971,
     "avh": 2249,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1995,
     "country": "Malaysia",
     "pop": 20487607,
     "emp": 7760100,
     "avh": 2248,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1996,
     "country": "Malaysia",
     "pop": 21017613,
     "emp": 8507902,
     "avh": 2250,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1997,
     "country": "Malaysia",
     "pop": 21562793,
     "emp": 8694483,
     "avh": 2250,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1998,
     "country": "Malaysia",
     "pop": 22114654,
     "emp": 8709565,
     "avh": 2249,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1999,
     "country": "Malaysia",
     "pop": 22661298,
     "emp": 8944147,
     "avh": 2248,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2000,
     "country": "Malaysia",
     "pop": 23194257,
     "emp": 9375031,
     "avh": 2247,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2001,
     "country": "Malaysia",
     "pop": 23709119,
     "emp": 9460223,
     "avh": 2247,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2002,
     "country": "Malaysia",
     "pop": 24208391,
     "emp": 9648386,
     "avh": 2274,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2003,
     "country": "Malaysia",
     "pop": 24698819,
     "emp": 9990324,
     "avh": 2265,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2004,
     "country": "Malaysia",
     "pop": 25190652,
     "emp": 10096057,
     "avh": 2261,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2005,
     "country": "Malaysia",
     "pop": 25690611,
     "emp": 10138338,
     "avh": 2308,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2006,
     "country": "Malaysia",
     "pop": 26201961,
     "emp": 10406430,
     "avh": 2289,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2007,
     "country": "Malaysia",
     "pop": 26720370,
     "emp": 10682456,
     "avh": 2266,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2008,
     "country": "Malaysia",
     "pop": 27236006,
     "emp": 10813543,
     "avh": 2239,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2009,
     "country": "Malaysia",
     "pop": 27735040,
     "emp": 11045295,
     "avh": 2244,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2010,
     "country": "Malaysia",
     "pop": 28208035,
     "emp": 12039651,
     "avh": 2227,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2011,
     "country": "Malaysia",
     "pop": 28650959,
     "emp": 12489845,
     "avh": 2225,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2012,
     "country": "Malaysia",
     "pop": 29068189,
     "emp": 12983949,
     "avh": 2204,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2013,
     "country": "Malaysia",
     "pop": 29468923,
     "emp": 13620676,
     "avh": 2170,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2014,
     "country": "Malaysia",
     "pop": 29866603,
     "emp": 13872319,
     "avh": 2180,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2015,
     "country": "Malaysia",
     "pop": 30270962,
     "emp": 14060624,
     "avh": 2169,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2016,
     "country": "Malaysia",
     "pop": 30684654,
     "emp": 14129375,
     "avh": 2190,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2017,
     "country": "Malaysia",
     "pop": 31104646,
     "emp": 14459714,
     "avh": 2197,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2018,
     "country": "Malaysia",
     "pop": 31528033,
     "emp": 14813860,
     "avh": 2197,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2019,
     "country": "Malaysia",
     "pop": 31949777,
     "emp": 15118323,
     "avh": 2197,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 1950,
     "country": "Netherlands",
     "pop": 10089941,
     "emp": 4248744,
     "avh": 1997,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1951,
     "country": "Netherlands",
     "pop": 10240373,
     "emp": 4264510,
     "avh": 1982,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1952,
     "country": "Netherlands",
     "pop": 10357776,
     "emp": 4246492,
     "avh": 1967,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1953,
     "country": "Netherlands",
     "pop": 10468713,
     "emp": 4324193,
     "avh": 1953,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1954,
     "country": "Netherlands",
     "pop": 10590624,
     "emp": 4441306,
     "avh": 1939,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1955,
     "country": "Netherlands",
     "pop": 10725770,
     "emp": 4522385,
     "avh": 1924,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1956,
     "country": "Netherlands",
     "pop": 10863956,
     "emp": 4592202,
     "avh": 1910,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1957,
     "country": "Netherlands",
     "pop": 11000669,
     "emp": 4616977,
     "avh": 1896,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1958,
     "country": "Netherlands",
     "pop": 11160786,
     "emp": 4574185,
     "avh": 1882,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1959,
     "country": "Netherlands",
     "pop": 11321175,
     "emp": 4621481,
     "avh": 1868,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1960,
     "country": "Netherlands",
     "pop": 11459213,
     "emp": 4709316,
     "avh": 1855,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1961,
     "country": "Netherlands",
     "pop": 11611570,
     "emp": 4778007,
     "avh": 1853,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1962,
     "country": "Netherlands",
     "pop": 11778157,
     "emp": 4873725,
     "avh": 1851,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1963,
     "country": "Netherlands",
     "pop": 11938060,
     "emp": 4940165,
     "avh": 1850,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1964,
     "country": "Netherlands",
     "pop": 12098838,
     "emp": 5026874,
     "avh": 1848,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1965,
     "country": "Netherlands",
     "pop": 12263334,
     "emp": 5069665,
     "avh": 1846,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1966,
     "country": "Netherlands",
     "pop": 12425754,
     "emp": 5109078,
     "avh": 1845,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1967,
     "country": "Netherlands",
     "pop": 12567445,
     "emp": 5093313,
     "avh": 1843,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1968,
     "country": "Netherlands",
     "pop": 12695005,
     "emp": 5140609,
     "avh": 1841,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1970,
     "country": "Netherlands",
     "pop": 13001943,
     "emp": 5578368,
     "avh": 1838,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1971,
     "country": "Netherlands",
     "pop": 13147932,
     "emp": 5629356,
     "avh": 1804,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1972,
     "country": "Netherlands",
     "pop": 13291873,
     "emp": 5600795,
     "avh": 1803,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1973,
     "country": "Netherlands",
     "pop": 13431182,
     "emp": 5652013,
     "avh": 1776,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1974,
     "country": "Netherlands",
     "pop": 13562438,
     "emp": 5702291,
     "avh": 1723,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1975,
     "country": "Netherlands",
     "pop": 13683291,
     "emp": 5701593,
     "avh": 1669,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1976,
     "country": "Netherlands",
     "pop": 13793110,
     "emp": 5743146,
     "avh": 1654,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1977,
     "country": "Netherlands",
     "pop": 13892917,
     "emp": 5755751,
     "avh": 1633,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1978,
     "country": "Netherlands",
     "pop": 13984060,
     "emp": 5834533,
     "avh": 1605,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1979,
     "country": "Netherlands",
     "pop": 14068593,
     "emp": 5954569,
     "avh": 1583,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1980,
     "country": "Netherlands",
     "pop": 14148415,
     "emp": 6051342,
     "avh": 1580,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1981,
     "country": "Netherlands",
     "pop": 14223763,
     "emp": 6012948,
     "avh": 1580,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1982,
     "country": "Netherlands",
     "pop": 14295217,
     "emp": 5925911,
     "avh": 1565,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1983,
     "country": "Netherlands",
     "pop": 14365385,
     "emp": 5880870,
     "avh": 1550,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1984,
     "country": "Netherlands",
     "pop": 14437506,
     "emp": 5934958,
     "avh": 1542,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1985,
     "country": "Netherlands",
     "pop": 14513949,
     "emp": 6048170,
     "avh": 1526,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1986,
     "country": "Netherlands",
     "pop": 14595755,
     "emp": 6191230,
     "avh": 1511,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1987,
     "country": "Netherlands",
     "pop": 14682649,
     "emp": 6320897,
     "avh": 1489,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1988,
     "country": "Netherlands",
     "pop": 14774038,
     "emp": 6433093,
     "avh": 1486,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1989,
     "country": "Netherlands",
     "pop": 14868655,
     "emp": 6608910,
     "avh": 1482,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1990,
     "country": "Netherlands",
     "pop": 14965448,
     "emp": 6807824,
     "avh": 1476,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1991,
     "country": "Netherlands",
     "pop": 15064519,
     "emp": 6929596,
     "avh": 1467,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1992,
     "country": "Netherlands",
     "pop": 15165862,
     "emp": 7021058,
     "avh": 1473,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1993,
     "country": "Netherlands",
     "pop": 15268006,
     "emp": 7048759,
     "avh": 1463,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1994,
     "country": "Netherlands",
     "pop": 15369120,
     "emp": 7101705,
     "avh": 1470,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1995,
     "country": "Netherlands",
     "pop": 15467851,
     "emp": 7272158,
     "avh": 1481,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1996,
     "country": "Netherlands",
     "pop": 15563255,
     "emp": 7435649,
     "avh": 1496,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1997,
     "country": "Netherlands",
     "pop": 15655475,
     "emp": 7669960,
     "avh": 1481,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1998,
     "country": "Netherlands",
     "pop": 15745647,
     "emp": 7849161,
     "avh": 1478,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1999,
     "country": "Netherlands",
     "pop": 15835523,
     "emp": 8066938,
     "avh": 1477,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2000,
     "country": "Netherlands",
     "pop": 15926188,
     "emp": 8203348,
     "avh": 1464,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2001,
     "country": "Netherlands",
     "pop": 16018114,
     "emp": 8352365,
     "avh": 1454,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2002,
     "country": "Netherlands",
     "pop": 16110355,
     "emp": 8406870,
     "avh": 1436,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2003,
     "country": "Netherlands",
     "pop": 16200951,
     "emp": 8367423,
     "avh": 1427,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2004,
     "country": "Netherlands",
     "pop": 16287182,
     "emp": 8287748,
     "avh": 1447,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2005,
     "country": "Netherlands",
     "pop": 16367158,
     "emp": 8364166,
     "avh": 1433,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2006,
     "country": "Netherlands",
     "pop": 16440097,
     "emp": 8569997,
     "avh": 1430,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2007,
     "country": "Netherlands",
     "pop": 16506655,
     "emp": 8838912,
     "avh": 1429,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2008,
     "country": "Netherlands",
     "pop": 16568104,
     "emp": 8981410,
     "avh": 1428,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2009,
     "country": "Netherlands",
     "pop": 16626373,
     "emp": 8890323,
     "avh": 1420,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2010,
     "country": "Netherlands",
     "pop": 16682917,
     "emp": 8814677,
     "avh": 1419,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2011,
     "country": "Netherlands",
     "pop": 16738193,
     "emp": 8878933,
     "avh": 1420,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2012,
     "country": "Netherlands",
     "pop": 16791840,
     "emp": 8856450,
     "avh": 1410,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2013,
     "country": "Netherlands",
     "pop": 16843502,
     "emp": 8753303,
     "avh": 1414,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2014,
     "country": "Netherlands",
     "pop": 16892523,
     "emp": 8739233,
     "avh": 1425,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2015,
     "country": "Netherlands",
     "pop": 16938499,
     "emp": 8807258,
     "avh": 1425,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2016,
     "country": "Netherlands",
     "pop": 16981295,
     "emp": 8917259,
     "avh": 1437,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2017,
     "country": "Netherlands",
     "pop": 17021347,
     "emp": 9098231,
     "avh": 1436,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2018,
     "country": "Netherlands",
     "pop": 17059560,
     "emp": 9302178,
     "avh": 1436,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2019,
     "country": "Netherlands",
     "pop": 17097130,
     "emp": 9456908,
     "avh": 1439,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 1950,
     "country": "Norway",
     "pop": 3264009,
     "emp": 1520443,
     "avh": 2129,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1951,
     "country": "Norway",
     "pop": 3294743,
     "emp": 1522197,
     "avh": 2118,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1952,
     "country": "Norway",
     "pop": 3326589,
     "emp": 1524227,
     "avh": 2107,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1953,
     "country": "Norway",
     "pop": 3359738,
     "emp": 1526605,
     "avh": 2097,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1954,
     "country": "Norway",
     "pop": 3393085,
     "emp": 1528820,
     "avh": 2086,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1955,
     "country": "Norway",
     "pop": 3426236,
     "emp": 1530693,
     "avh": 2075,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1956,
     "country": "Norway",
     "pop": 3458808,
     "emp": 1532057,
     "avh": 2065,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1957,
     "country": "Norway",
     "pop": 3490743,
     "emp": 1533118,
     "avh": 2054,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1958,
     "country": "Norway",
     "pop": 3521788,
     "emp": 1517193,
     "avh": 2044,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1959,
     "country": "Norway",
     "pop": 3551635,
     "emp": 1516131,
     "avh": 2034,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1960,
     "country": "Norway",
     "pop": 3580014,
     "emp": 1528872,
     "avh": 2023,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1961,
     "country": "Norway",
     "pop": 3608565,
     "emp": 1549255,
     "avh": 2009,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1962,
     "country": "Norway",
     "pop": 3637674,
     "emp": 1557749,
     "avh": 1995,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1963,
     "country": "Norway",
     "pop": 3665285,
     "emp": 1564143,
     "avh": 1986,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1964,
     "country": "Norway",
     "pop": 3693075,
     "emp": 1568540,
     "avh": 1996,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1965,
     "country": "Norway",
     "pop": 3721879,
     "emp": 1582529,
     "avh": 1951,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1966,
     "country": "Norway",
     "pop": 3752344,
     "emp": 1588923,
     "avh": 1952,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1967,
     "country": "Norway",
     "pop": 3784724,
     "emp": 1598416,
     "avh": 1936,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1968,
     "country": "Norway",
     "pop": 3817676,
     "emp": 1599915,
     "avh": 1897,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1969,
     "country": "Norway",
     "pop": 3849659,
     "emp": 1614003,
     "avh": 1849,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1970,
     "country": "Norway",
     "pop": 3876060,
     "emp": 1640082,
     "avh": 1835,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1971,
     "country": "Norway",
     "pop": 3905269,
     "emp": 1655282,
     "avh": 1814,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1972,
     "country": "Norway",
     "pop": 3933725,
     "emp": 1673635,
     "avh": 1781,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1973,
     "country": "Norway",
     "pop": 3960802,
     "emp": 1685403,
     "avh": 1767,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1974,
     "country": "Norway",
     "pop": 3985741,
     "emp": 1707720,
     "avh": 1745,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1975,
     "country": "Norway",
     "pop": 4008031,
     "emp": 1736310,
     "avh": 1728,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1976,
     "country": "Norway",
     "pop": 4027475,
     "emp": 1794589,
     "avh": 1674,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1977,
     "country": "Norway",
     "pop": 4044330,
     "emp": 1844513,
     "avh": 1638,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1978,
     "country": "Norway",
     "pop": 4059183,
     "emp": 1876236,
     "avh": 1601,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1979,
     "country": "Norway",
     "pop": 4072868,
     "emp": 1902163,
     "avh": 1579,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1980,
     "country": "Norway",
     "pop": 4086076,
     "emp": 1948217,
     "avh": 1580,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1981,
     "country": "Norway",
     "pop": 4098973,
     "emp": 1972649,
     "avh": 1570,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1982,
     "country": "Norway",
     "pop": 4111657,
     "emp": 1972498,
     "avh": 1558,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1983,
     "country": "Norway",
     "pop": 4124585,
     "emp": 1968164,
     "avh": 1552,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1984,
     "country": "Norway",
     "pop": 4138268,
     "emp": 1983124,
     "avh": 1548,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1985,
     "country": "Norway",
     "pop": 4153105,
     "emp": 2039336,
     "avh": 1542,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1986,
     "country": "Norway",
     "pop": 4169322,
     "emp": 2107378,
     "avh": 1538,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1987,
     "country": "Norway",
     "pop": 4186968,
     "emp": 2149421,
     "avh": 1510,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1988,
     "country": "Norway",
     "pop": 4205966,
     "emp": 2135597,
     "avh": 1513,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1989,
     "country": "Norway",
     "pop": 4226122,
     "emp": 2075990,
     "avh": 1510,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1990,
     "country": "Norway",
     "pop": 4247285,
     "emp": 2060561,
     "avh": 1502,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1991,
     "country": "Norway",
     "pop": 4269471,
     "emp": 2041444,
     "avh": 1500,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1992,
     "country": "Norway",
     "pop": 4292683,
     "emp": 2036725,
     "avh": 1510,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1993,
     "country": "Norway",
     "pop": 4316788,
     "emp": 2051021,
     "avh": 1506,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1994,
     "country": "Norway",
     "pop": 4341615,
     "emp": 2079134,
     "avh": 1504,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1995,
     "country": "Norway",
     "pop": 4366995,
     "emp": 2123532,
     "avh": 1487,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1996,
     "country": "Norway",
     "pop": 4393209,
     "emp": 2168589,
     "avh": 1482,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1997,
     "country": "Norway",
     "pop": 4420262,
     "emp": 2233352,
     "avh": 1477,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1998,
     "country": "Norway",
     "pop": 4447486,
     "emp": 2292973,
     "avh": 1475,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1999,
     "country": "Norway",
     "pop": 4474004,
     "emp": 2311958,
     "avh": 1474,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2000,
     "country": "Norway",
     "pop": 4499367,
     "emp": 2324047,
     "avh": 1456,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2001,
     "country": "Norway",
     "pop": 4523145,
     "emp": 2339565,
     "avh": 1423,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2002,
     "country": "Norway",
     "pop": 4546019,
     "emp": 2326730,
     "avh": 1406,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2003,
     "country": "Norway",
     "pop": 4570106,
     "emp": 2290344,
     "avh": 1389,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2004,
     "country": "Norway",
     "pop": 4598214,
     "emp": 2296860,
     "avh": 1404,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2005,
     "country": "Norway",
     "pop": 4632364,
     "emp": 2322257,
     "avh": 1406,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2006,
     "country": "Norway",
     "pop": 4672994,
     "emp": 2398020,
     "avh": 1399,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2007,
     "country": "Norway",
     "pop": 4719402,
     "emp": 2490095,
     "avh": 1405,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2008,
     "country": "Norway",
     "pop": 4771019,
     "emp": 2565187,
     "avh": 1406,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2009,
     "country": "Norway",
     "pop": 4826848,
     "emp": 2553685,
     "avh": 1387,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2010,
     "country": "Norway",
     "pop": 4885878,
     "emp": 2544922,
     "avh": 1395,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2011,
     "country": "Norway",
     "pop": 4948330,
     "emp": 2581193,
     "avh": 1400,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2012,
     "country": "Norway",
     "pop": 5013709,
     "emp": 2634113,
     "avh": 1396,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2013,
     "country": "Norway",
     "pop": 5079455,
     "emp": 2665577,
     "avh": 1386,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2014,
     "country": "Norway",
     "pop": 5142265,
     "emp": 2696300,
     "avh": 1389,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2015,
     "country": "Norway",
     "pop": 5199836,
     "emp": 2712517,
     "avh": 1391,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2016,
     "country": "Norway",
     "pop": 5250949,
     "emp": 2723179,
     "avh": 1394,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2017,
     "country": "Norway",
     "pop": 5296326,
     "emp": 2756730,
     "avh": 1380,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2018,
     "country": "Norway",
     "pop": 5337962,
     "emp": 2805337,
     "avh": 1382,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2019,
     "country": "Norway",
     "pop": 5378857,
     "emp": 2853661,
     "avh": 1384,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 1970,
     "country": "New Zealand",
     "pop": 2818387,
     "emp": 1244248,
     "avh": 1866,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1971,
     "country": "New Zealand",
     "pop": 2870822,
     "emp": 1280647,
     "avh": 1863,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1972,
     "country": "New Zealand",
     "pop": 2929686,
     "emp": 1298009,
     "avh": 1848,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1973,
     "country": "New Zealand",
     "pop": 2989409,
     "emp": 1322529,
     "avh": 1846,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1974,
     "country": "New Zealand",
     "pop": 3042177,
     "emp": 1371494,
     "avh": 1855,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1975,
     "country": "New Zealand",
     "pop": 3082633,
     "emp": 1407147,
     "avh": 1839,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1976,
     "country": "New Zealand",
     "pop": 3108570,
     "emp": 1419495,
     "avh": 1836,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1977,
     "country": "New Zealand",
     "pop": 3122406,
     "emp": 1422747,
     "avh": 1841,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1978,
     "country": "New Zealand",
     "pop": 3128956,
     "emp": 1514212,
     "avh": 1832,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1979,
     "country": "New Zealand",
     "pop": 3135297,
     "emp": 1524176,
     "avh": 1823,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1980,
     "country": "New Zealand",
     "pop": 3146619,
     "emp": 1536047,
     "avh": 1812,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1981,
     "country": "New Zealand",
     "pop": 3164828,
     "emp": 1511677,
     "avh": 1794,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1982,
     "country": "New Zealand",
     "pop": 3188539,
     "emp": 1522323,
     "avh": 1801,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1983,
     "country": "New Zealand",
     "pop": 3215729,
     "emp": 1511874,
     "avh": 1855,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1984,
     "country": "New Zealand",
     "pop": 3243036,
     "emp": 1518828,
     "avh": 1848,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1985,
     "country": "New Zealand",
     "pop": 3268236,
     "emp": 1569081,
     "avh": 1842,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1986,
     "country": "New Zealand",
     "pop": 3290304,
     "emp": 1587352,
     "avh": 1836,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1987,
     "country": "New Zealand",
     "pop": 3310743,
     "emp": 1597135,
     "avh": 1840,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1988,
     "country": "New Zealand",
     "pop": 3332792,
     "emp": 1552116,
     "avh": 1832,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1989,
     "country": "New Zealand",
     "pop": 3360957,
     "emp": 1509795,
     "avh": 1819,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1990,
     "country": "New Zealand",
     "pop": 3398172,
     "emp": 1521319,
     "avh": 1808,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1991,
     "country": "New Zealand",
     "pop": 3446170,
     "emp": 1498921,
     "avh": 1795,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1992,
     "country": "New Zealand",
     "pop": 3503181,
     "emp": 1511453,
     "avh": 1804,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1993,
     "country": "New Zealand",
     "pop": 3564464,
     "emp": 1550309,
     "avh": 1857,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1994,
     "country": "New Zealand",
     "pop": 3623279,
     "emp": 1621018,
     "avh": 1851,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1995,
     "country": "New Zealand",
     "pop": 3674936,
     "emp": 1694214,
     "avh": 1845,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1996,
     "country": "New Zealand",
     "pop": 3717349,
     "emp": 1742345,
     "avh": 1838,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1997,
     "country": "New Zealand",
     "pop": 3752362,
     "emp": 1749711,
     "avh": 1823,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1998,
     "country": "New Zealand",
     "pop": 3783974,
     "emp": 1740501,
     "avh": 1824,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1999,
     "country": "New Zealand",
     "pop": 3818131,
     "emp": 1774060,
     "avh": 1840,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2000,
     "country": "New Zealand",
     "pop": 3858999,
     "emp": 1818422,
     "avh": 1836,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2001,
     "country": "New Zealand",
     "pop": 3907933,
     "emp": 1867323,
     "avh": 1820,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2002,
     "country": "New Zealand",
     "pop": 3963206,
     "emp": 1919323,
     "avh": 1820,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2003,
     "country": "New Zealand",
     "pop": 4022069,
     "emp": 1961770,
     "avh": 1818,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2004,
     "country": "New Zealand",
     "pop": 4080438,
     "emp": 2035265,
     "avh": 1832,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2005,
     "country": "New Zealand",
     "pop": 4135355,
     "emp": 2099347,
     "avh": 1812,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2006,
     "country": "New Zealand",
     "pop": 4185888,
     "emp": 2150455,
     "avh": 1796,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2007,
     "country": "New Zealand",
     "pop": 4233046,
     "emp": 2193405,
     "avh": 1777,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2008,
     "country": "New Zealand",
     "pop": 4278155,
     "emp": 2215900,
     "avh": 1759,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2009,
     "country": "New Zealand",
     "pop": 4323337,
     "emp": 2173697,
     "avh": 1741,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2010,
     "country": "New Zealand",
     "pop": 4370062,
     "emp": 2186931,
     "avh": 1759,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2011,
     "country": "New Zealand",
     "pop": 4418678,
     "emp": 2232588,
     "avh": 1746,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2012,
     "country": "New Zealand",
     "pop": 4468457,
     "emp": 2238001,
     "avh": 1739,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2013,
     "country": "New Zealand",
     "pop": 4518515,
     "emp": 2279929,
     "avh": 1756,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2014,
     "country": "New Zealand",
     "pop": 4567527,
     "emp": 2339179,
     "avh": 1756,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2015,
     "country": "New Zealand",
     "pop": 4614532,
     "emp": 2365273,
     "avh": 1750,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2016,
     "country": "New Zealand",
     "pop": 4659265,
     "emp": 2415880,
     "avh": 1764,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2017,
     "country": "New Zealand",
     "pop": 4702034,
     "emp": 2494049,
     "avh": 1752,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2018,
     "country": "New Zealand",
     "pop": 4743131,
     "emp": 2518759,
     "avh": 1769,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2019,
     "country": "New Zealand",
     "pop": 4783063,
     "emp": 2506080,
     "avh": 1778,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 1970,
     "country": "Pakistan",
     "pop": 58142060,
     "emp": 17248102,
     "avh": 2241,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1971,
     "country": "Pakistan",
     "pop": 59734481,
     "emp": 17326372,
     "avh": 2239,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1972,
     "country": "Pakistan",
     "pop": 61381987,
     "emp": 18665307,
     "avh": 2241,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1973,
     "country": "Pakistan",
     "pop": 63099406,
     "emp": 19225837,
     "avh": 2239,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1974,
     "country": "Pakistan",
     "pop": 64905998,
     "emp": 19542942,
     "avh": 2237,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1975,
     "country": "Pakistan",
     "pop": 66816877,
     "emp": 19786941,
     "avh": 2234,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1976,
     "country": "Pakistan",
     "pop": 68834326,
     "emp": 20376367,
     "avh": 2230,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1977,
     "country": "Pakistan",
     "pop": 70958169,
     "emp": 20983976,
     "avh": 2225,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1978,
     "country": "Pakistan",
     "pop": 73197258,
     "emp": 21621246,
     "avh": 2222,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1979,
     "country": "Pakistan",
     "pop": 75561131,
     "emp": 22599157,
     "avh": 2218,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1980,
     "country": "Pakistan",
     "pop": 78054343,
     "emp": 23290967,
     "avh": 2220,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1981,
     "country": "Pakistan",
     "pop": 80680459,
     "emp": 24002876,
     "avh": 2174,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1982,
     "country": "Pakistan",
     "pop": 83431605,
     "emp": 24745399,
     "avh": 2178,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1983,
     "country": "Pakistan",
     "pop": 86285935,
     "emp": 24740615,
     "avh": 2186,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1984,
     "country": "Pakistan",
     "pop": 89213706,
     "emp": 25508020,
     "avh": 2189,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1985,
     "country": "Pakistan",
     "pop": 92191510,
     "emp": 25797946,
     "avh": 2206,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1986,
     "country": "Pakistan",
     "pop": 95215378,
     "emp": 25866840,
     "avh": 2203,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1987,
     "country": "Pakistan",
     "pop": 98285755,
     "emp": 27464799,
     "avh": 2188,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1988,
     "country": "Pakistan",
     "pop": 101389603,
     "emp": 27744205,
     "avh": 2202,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1989,
     "country": "Pakistan",
     "pop": 104512881,
     "emp": 27799703,
     "avh": 2203,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1990,
     "country": "Pakistan",
     "pop": 107647921,
     "emp": 28511606,
     "avh": 2205,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1991,
     "country": "Pakistan",
     "pop": 110778648,
     "emp": 27443748,
     "avh": 2205,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1992,
     "country": "Pakistan",
     "pop": 113911126,
     "emp": 28144115,
     "avh": 2191,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1993,
     "country": "Pakistan",
     "pop": 117086685,
     "emp": 28602767,
     "avh": 2194,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1994,
     "country": "Pakistan",
     "pop": 120362762,
     "emp": 29612518,
     "avh": 2191,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1995,
     "country": "Pakistan",
     "pop": 123776839,
     "emp": 29809268,
     "avh": 2208,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1996,
     "country": "Pakistan",
     "pop": 127349290,
     "emp": 31092615,
     "avh": 2206,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1997,
     "country": "Pakistan",
     "pop": 131057431,
     "emp": 32505916,
     "avh": 2199,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1998,
     "country": "Pakistan",
     "pop": 134843233,
     "emp": 33562534,
     "avh": 2177,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1999,
     "country": "Pakistan",
     "pop": 138624621,
     "emp": 34874385,
     "avh": 2179,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2000,
     "country": "Pakistan",
     "pop": 142343578,
     "emp": 36319999,
     "avh": 2186,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2001,
     "country": "Pakistan",
     "pop": 145978402,
     "emp": 37911228,
     "avh": 2178,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2002,
     "country": "Pakistan",
     "pop": 149549700,
     "emp": 39599998,
     "avh": 2169,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2003,
     "country": "Pakistan",
     "pop": 153093373,
     "emp": 40746662,
     "avh": 2183,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2004,
     "country": "Pakistan",
     "pop": 156664697,
     "emp": 41979000,
     "avh": 2176,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2005,
     "country": "Pakistan",
     "pop": 160304008,
     "emp": 44459545,
     "avh": 2164,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2006,
     "country": "Pakistan",
     "pop": 164022627,
     "emp": 46916530,
     "avh": 2131,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2007,
     "country": "Pakistan",
     "pop": 167808105,
     "emp": 47616645,
     "avh": 2135,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2008,
     "country": "Pakistan",
     "pop": 171648986,
     "emp": 49040912,
     "avh": 2128,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2009,
     "country": "Pakistan",
     "pop": 175525609,
     "emp": 50790000,
     "avh": 2109,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2010,
     "country": "Pakistan",
     "pop": 179424641,
     "emp": 53119544,
     "avh": 2127,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2011,
     "country": "Pakistan",
     "pop": 183340174,
     "emp": 53834621,
     "avh": 2114,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2012,
     "country": "Pakistan",
     "pop": 187280129,
     "emp": 55016780,
     "avh": 2101,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2013,
     "country": "Pakistan",
     "pop": 191260806,
     "emp": 56004394,
     "avh": 2088,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2014,
     "country": "Pakistan",
     "pop": 195305013,
     "emp": 56520000,
     "avh": 2058,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2015,
     "country": "Pakistan",
     "pop": 199426964,
     "emp": 57419994,
     "avh": 2026,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2016,
     "country": "Pakistan",
     "pop": 203631353,
     "emp": 58810356,
     "avh": 1997,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2017,
     "country": "Pakistan",
     "pop": 207906209,
     "emp": 60250595,
     "avh": 1966,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2018,
     "country": "Pakistan",
     "pop": 212228286,
     "emp": 61703830,
     "avh": 1966,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2019,
     "country": "Pakistan",
     "pop": 216565318,
     "emp": 63085052,
     "avh": 1966,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 1950,
     "country": "Peru",
     "pop": 7786965,
     "emp": 2637480,
     "avh": 2508,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1951,
     "country": "Peru",
     "pop": 7984585,
     "emp": 2684702,
     "avh": 2496,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1952,
     "country": "Peru",
     "pop": 8188122,
     "emp": 2737931,
     "avh": 2484,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1953,
     "country": "Peru",
     "pop": 8398699,
     "emp": 2792746,
     "avh": 2472,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1954,
     "country": "Peru",
     "pop": 8617949,
     "emp": 2849646,
     "avh": 2460,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1955,
     "country": "Peru",
     "pop": 8846993,
     "emp": 2908951,
     "avh": 2448,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1956,
     "country": "Peru",
     "pop": 9085115,
     "emp": 2970375,
     "avh": 2436,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1957,
     "country": "Peru",
     "pop": 9331197,
     "emp": 3033501,
     "avh": 2425,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1958,
     "country": "Peru",
     "pop": 9586869,
     "emp": 3098814,
     "avh": 2413,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1959,
     "country": "Peru",
     "pop": 9853253,
     "emp": 3166619,
     "avh": 2401,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1960,
     "country": "Peru",
     "pop": 10131982,
     "emp": 3237379,
     "avh": 2390,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1961,
     "country": "Peru",
     "pop": 10424280,
     "emp": 3294053,
     "avh": 2378,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1962,
     "country": "Peru",
     "pop": 10729332,
     "emp": 3351719,
     "avh": 2367,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1963,
     "country": "Peru",
     "pop": 11044891,
     "emp": 3410394,
     "avh": 2355,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1964,
     "country": "Peru",
     "pop": 11369021,
     "emp": 3470097,
     "avh": 2344,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1965,
     "country": "Peru",
     "pop": 11699374,
     "emp": 3533520,
     "avh": 2333,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1966,
     "country": "Peru",
     "pop": 12035134,
     "emp": 3597290,
     "avh": 2321,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1967,
     "country": "Peru",
     "pop": 12377730,
     "emp": 3662211,
     "avh": 2310,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1968,
     "country": "Peru",
     "pop": 12728487,
     "emp": 3728303,
     "avh": 2299,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1969,
     "country": "Peru",
     "pop": 13088733,
     "emp": 3795588,
     "avh": 2288,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1970,
     "country": "Peru",
     "pop": 13459794,
     "emp": 3964277,
     "avh": 2277,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1971,
     "country": "Peru",
     "pop": 13836367,
     "emp": 4137626,
     "avh": 2266,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1972,
     "country": "Peru",
     "pop": 14221961,
     "emp": 4309301,
     "avh": 2255,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1973,
     "country": "Peru",
     "pop": 14615845,
     "emp": 4478602,
     "avh": 2244,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1974,
     "country": "Peru",
     "pop": 15017055,
     "emp": 4669184,
     "avh": 2237,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1975,
     "country": "Peru",
     "pop": 15424744,
     "emp": 4782496,
     "avh": 2230,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1976,
     "country": "Peru",
     "pop": 15838572,
     "emp": 4916395,
     "avh": 2223,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1977,
     "country": "Peru",
     "pop": 16258321,
     "emp": 5016161,
     "avh": 2215,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1978,
     "country": "Peru",
     "pop": 16683456,
     "emp": 5117360,
     "avh": 2208,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1979,
     "country": "Peru",
     "pop": 17113388,
     "emp": 5231474,
     "avh": 2201,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1980,
     "country": "Peru",
     "pop": 17547610,
     "emp": 5425911,
     "avh": 2194,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1981,
     "country": "Peru",
     "pop": 17985393,
     "emp": 5641967,
     "avh": 2187,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1982,
     "country": "Peru",
     "pop": 18426415,
     "emp": 5821972,
     "avh": 2180,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1983,
     "country": "Peru",
     "pop": 18870993,
     "emp": 6112834,
     "avh": 2173,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1984,
     "country": "Peru",
     "pop": 19319746,
     "emp": 6328578,
     "avh": 2166,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1985,
     "country": "Peru",
     "pop": 19772872,
     "emp": 6476982,
     "avh": 2159,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1986,
     "country": "Peru",
     "pop": 20230384,
     "emp": 7028465,
     "avh": 2152,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1987,
     "country": "Peru",
     "pop": 20691283,
     "emp": 7293948,
     "avh": 2145,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1988,
     "country": "Peru",
     "pop": 21153459,
     "emp": 7332128,
     "avh": 2138,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1989,
     "country": "Peru",
     "pop": 21614193,
     "emp": 7504090,
     "avh": 2131,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1990,
     "country": "Peru",
     "pop": 22071433,
     "emp": 7723278,
     "avh": 2124,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1991,
     "country": "Peru",
     "pop": 22522378,
     "emp": 8247714,
     "avh": 2120,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1992,
     "country": "Peru",
     "pop": 22966818,
     "emp": 8249194,
     "avh": 2126,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1993,
     "country": "Peru",
     "pop": 23408131,
     "emp": 8504463,
     "avh": 2119,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1994,
     "country": "Peru",
     "pop": 23851408,
     "emp": 8960496,
     "avh": 2117,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1995,
     "country": "Peru",
     "pop": 24299160,
     "emp": 9450029,
     "avh": 2117,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1996,
     "country": "Peru",
     "pop": 24753824,
     "emp": 9838640,
     "avh": 2112,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1997,
     "country": "Peru",
     "pop": 25210954,
     "emp": 10083786,
     "avh": 2111,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1998,
     "country": "Peru",
     "pop": 25658062,
     "emp": 10529559,
     "avh": 2104,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1999,
     "country": "Peru",
     "pop": 26078293,
     "emp": 10854041,
     "avh": 2101,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2000,
     "country": "Peru",
     "pop": 26459944,
     "emp": 11320485,
     "avh": 2101,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2001,
     "country": "Peru",
     "pop": 26799285,
     "emp": 11483965,
     "avh": 2100,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2002,
     "country": "Peru",
     "pop": 27100968,
     "emp": 11722552,
     "avh": 2098,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2003,
     "country": "Peru",
     "pop": 27372226,
     "emp": 11921598,
     "avh": 2100,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2004,
     "country": "Peru",
     "pop": 27624213,
     "emp": 12220470,
     "avh": 2099,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2005,
     "country": "Peru",
     "pop": 27866145,
     "emp": 12479557,
     "avh": 2100,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2006,
     "country": "Peru",
     "pop": 28102056,
     "emp": 12900005,
     "avh": 2100,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2007,
     "country": "Peru",
     "pop": 28333052,
     "emp": 13269493,
     "avh": 2116,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2008,
     "country": "Peru",
     "pop": 28562317,
     "emp": 13563444,
     "avh": 2123,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2009,
     "country": "Peru",
     "pop": 28792655,
     "emp": 13867296,
     "avh": 2123,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2010,
     "country": "Peru",
     "pop": 29027674,
     "emp": 14223339,
     "avh": 2132,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2011,
     "country": "Peru",
     "pop": 29264318,
     "emp": 14578624,
     "avh": 2132,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2012,
     "country": "Peru",
     "pop": 29506788,
     "emp": 14942000,
     "avh": 2134,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2013,
     "country": "Peru",
     "pop": 29773987,
     "emp": 15207255,
     "avh": 2137,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2014,
     "country": "Peru",
     "pop": 30090359,
     "emp": 15559915,
     "avh": 2134,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2015,
     "country": "Peru",
     "pop": 30470734,
     "emp": 15887750,
     "avh": 2133,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2016,
     "country": "Peru",
     "pop": 30926032,
     "emp": 16055540,
     "avh": 2139,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2017,
     "country": "Peru",
     "pop": 31444298,
     "emp": 16347433,
     "avh": 2139,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2018,
     "country": "Peru",
     "pop": 31989260,
     "emp": 16649900,
     "avh": 2139,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2019,
     "country": "Peru",
     "pop": 32510453,
     "emp": 16890403,
     "avh": 2139,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 1970,
     "country": "Philippines",
     "pop": 35803594,
     "emp": 11095973,
     "avh": 2112,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1971,
     "country": "Philippines",
     "pop": 36849675,
     "emp": 12253635,
     "avh": 2115,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1972,
     "country": "Philippines",
     "pop": 37923396,
     "emp": 12290757,
     "avh": 2117,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1973,
     "country": "Philippines",
     "pop": 39022767,
     "emp": 13545136,
     "avh": 2107,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1974,
     "country": "Philippines",
     "pop": 40144248,
     "emp": 13507036,
     "avh": 2117,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1975,
     "country": "Philippines",
     "pop": 41285742,
     "emp": 14183072,
     "avh": 2121,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1976,
     "country": "Philippines",
     "pop": 42446653,
     "emp": 13908553,
     "avh": 2123,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1977,
     "country": "Philippines",
     "pop": 43629412,
     "emp": 14004293,
     "avh": 2159,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1978,
     "country": "Philippines",
     "pop": 44838483,
     "emp": 15747137,
     "avh": 2135,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1979,
     "country": "Philippines",
     "pop": 46079850,
     "emp": 15890745,
     "avh": 2134,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1980,
     "country": "Philippines",
     "pop": 47357743,
     "emp": 16054870,
     "avh": 2133,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1981,
     "country": "Philippines",
     "pop": 48672838,
     "emp": 17048408,
     "avh": 2134,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1982,
     "country": "Philippines",
     "pop": 50023563,
     "emp": 16969276,
     "avh": 2130,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1983,
     "country": "Philippines",
     "pop": 51408912,
     "emp": 18768779,
     "avh": 2140,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1984,
     "country": "Philippines",
     "pop": 52827040,
     "emp": 19180067,
     "avh": 2171,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1985,
     "country": "Philippines",
     "pop": 54275822,
     "emp": 19340286,
     "avh": 2172,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1986,
     "country": "Philippines",
     "pop": 55755355,
     "emp": 20120853,
     "avh": 2170,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1987,
     "country": "Philippines",
     "pop": 57263836,
     "emp": 20315259,
     "avh": 2179,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1988,
     "country": "Philippines",
     "pop": 58795001,
     "emp": 21001066,
     "avh": 2187,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1989,
     "country": "Philippines",
     "pop": 60340767,
     "emp": 21344945,
     "avh": 2197,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1990,
     "country": "Philippines",
     "pop": 61895160,
     "emp": 22012189,
     "avh": 2191,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1991,
     "country": "Philippines",
     "pop": 63454786,
     "emp": 22448877,
     "avh": 2176,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1992,
     "country": "Philippines",
     "pop": 65020116,
     "emp": 23365238,
     "avh": 2176,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1993,
     "country": "Philippines",
     "pop": 66593904,
     "emp": 23879102,
     "avh": 2136,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1994,
     "country": "Philippines",
     "pop": 68180859,
     "emp": 24585424,
     "avh": 2149,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1995,
     "country": "Philippines",
     "pop": 69784088,
     "emp": 25105150,
     "avh": 2130,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1996,
     "country": "Philippines",
     "pop": 71401749,
     "emp": 26808916,
     "avh": 2094,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1997,
     "country": "Philippines",
     "pop": 73030884,
     "emp": 27244625,
     "avh": 2146,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1998,
     "country": "Philippines",
     "pop": 74672014,
     "emp": 27609998,
     "avh": 2105,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1999,
     "country": "Philippines",
     "pop": 76325927,
     "emp": 28333904,
     "avh": 2115,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2000,
     "country": "Philippines",
     "pop": 77991755,
     "emp": 28347171,
     "avh": 2160,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2001,
     "country": "Philippines",
     "pop": 79672873,
     "emp": 29150749,
     "avh": 2067,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2002,
     "country": "Philippines",
     "pop": 81365258,
     "emp": 29923749,
     "avh": 2061,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2003,
     "country": "Philippines",
     "pop": 83051971,
     "emp": 30641750,
     "avh": 2077,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2004,
     "country": "Philippines",
     "pop": 84710542,
     "emp": 31611749,
     "avh": 2084,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2005,
     "country": "Philippines",
     "pop": 86326250,
     "emp": 31799165,
     "avh": 2103,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2006,
     "country": "Philippines",
     "pop": 87888675,
     "emp": 32589317,
     "avh": 2077,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2007,
     "country": "Philippines",
     "pop": 89405482,
     "emp": 33763500,
     "avh": 2092,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2008,
     "country": "Philippines",
     "pop": 90901965,
     "emp": 34089000,
     "avh": 2112,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2009,
     "country": "Philippines",
     "pop": 92414158,
     "emp": 35097064,
     "avh": 2117,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2010,
     "country": "Philippines",
     "pop": 93966780,
     "emp": 36147220,
     "avh": 2124,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2011,
     "country": "Philippines",
     "pop": 95570050,
     "emp": 37080066,
     "avh": 2127,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2012,
     "country": "Philippines",
     "pop": 97212643,
     "emp": 37712802,
     "avh": 2131,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2013,
     "country": "Philippines",
     "pop": 98871555,
     "emp": 38118000,
     "avh": 2140,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2014,
     "country": "Philippines",
     "pop": 100513142,
     "emp": 38573699,
     "avh": 2142,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2015,
     "country": "Philippines",
     "pop": 102113212,
     "emp": 38741001,
     "avh": 2149,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2016,
     "country": "Philippines",
     "pop": 103663816,
     "emp": 40994697,
     "avh": 2159,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2017,
     "country": "Philippines",
     "pop": 105172925,
     "emp": 40333992,
     "avh": 2168,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2018,
     "country": "Philippines",
     "pop": 106651394,
     "emp": 41153003,
     "avh": 2168,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2019,
     "country": "Philippines",
     "pop": 108116615,
     "emp": 42424800,
     "avh": 2168,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 1995,
     "country": "Poland",
     "pop": 38458638,
     "emp": 14126860,
     "avh": 2081,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 1996,
     "country": "Poland",
     "pop": 38509666,
     "emp": 14392114,
     "avh": 2082,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 1997,
     "country": "Poland",
     "pop": 38544841,
     "emp": 14767498,
     "avh": 2081,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 1998,
     "country": "Poland",
     "pop": 38564195,
     "emp": 14965051,
     "avh": 2081,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 1999,
     "country": "Poland",
     "pop": 38567854,
     "emp": 14836434,
     "avh": 2115,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2000,
     "country": "Poland",
     "pop": 38556693,
     "emp": 14478693,
     "avh": 2081,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2001,
     "country": "Poland",
     "pop": 38529582,
     "emp": 14151682,
     "avh": 2083,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2002,
     "country": "Poland",
     "pop": 38488647,
     "emp": 13716254,
     "avh": 2078,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2003,
     "country": "Poland",
     "pop": 38441824,
     "emp": 13549286,
     "avh": 2084,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2004,
     "country": "Poland",
     "pop": 38399558,
     "emp": 13695788,
     "avh": 2084,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2005,
     "country": "Poland",
     "pop": 38368949,
     "emp": 13986089,
     "avh": 2079,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2006,
     "country": "Poland",
     "pop": 38354450,
     "emp": 14434426,
     "avh": 2080,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2007,
     "country": "Poland",
     "pop": 38353338,
     "emp": 15091058,
     "avh": 2077,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2008,
     "country": "Poland",
     "pop": 38356786,
     "emp": 15663866,
     "avh": 2069,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2009,
     "country": "Poland",
     "pop": 38351916,
     "emp": 15738269,
     "avh": 2054,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2010,
     "country": "Poland",
     "pop": 38329781,
     "emp": 15326408,
     "avh": 2048,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2011,
     "country": "Poland",
     "pop": 38286831,
     "emp": 15387612,
     "avh": 2043,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2012,
     "country": "Poland",
     "pop": 38227044,
     "emp": 15381113,
     "avh": 2038,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2013,
     "country": "Poland",
     "pop": 38158041,
     "emp": 15351599,
     "avh": 2034,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2014,
     "country": "Poland",
     "pop": 38091089,
     "emp": 15601132,
     "avh": 2041,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2015,
     "country": "Poland",
     "pop": 38034079,
     "emp": 15824996,
     "avh": 2049,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2016,
     "country": "Poland",
     "pop": 37989220,
     "emp": 15941554,
     "avh": 2051,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2017,
     "country": "Poland",
     "pop": 37953180,
     "emp": 16137399,
     "avh": 2029,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2018,
     "country": "Poland",
     "pop": 37921592,
     "emp": 16211662,
     "avh": 2002,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2019,
     "country": "Poland",
     "pop": 37887768,
     "emp": 16159107,
     "avh": 2022,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 1950,
     "country": "Portugal",
     "pop": 8076015,
     "emp": 3048248,
     "avh": 2404,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1951,
     "country": "Portugal",
     "pop": 8121452,
     "emp": 3046919,
     "avh": 2389,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1952,
     "country": "Portugal",
     "pop": 8155696,
     "emp": 3041210,
     "avh": 2374,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1953,
     "country": "Portugal",
     "pop": 8206299,
     "emp": 3041407,
     "avh": 2359,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1954,
     "country": "Portugal",
     "pop": 8257140,
     "emp": 3041462,
     "avh": 2344,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1955,
     "country": "Portugal",
     "pop": 8315013,
     "emp": 3043860,
     "avh": 2329,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1956,
     "country": "Portugal",
     "pop": 8375658,
     "emp": 3047003,
     "avh": 2314,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1957,
     "country": "Portugal",
     "pop": 8434630,
     "emp": 2985391,
     "avh": 2299,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1958,
     "country": "Portugal",
     "pop": 8502450,
     "emp": 3089945,
     "avh": 2285,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1959,
     "country": "Portugal",
     "pop": 8572279,
     "emp": 3111416,
     "avh": 2270,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1960,
     "country": "Portugal",
     "pop": 8644166,
     "emp": 3151557,
     "avh": 2256,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1961,
     "country": "Portugal",
     "pop": 8638905,
     "emp": 3154894,
     "avh": 2243,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1962,
     "country": "Portugal",
     "pop": 8628000,
     "emp": 3145957,
     "avh": 2231,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1963,
     "country": "Portugal",
     "pop": 8687115,
     "emp": 3136782,
     "avh": 2219,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1964,
     "country": "Portugal",
     "pop": 8726239,
     "emp": 3127846,
     "avh": 2207,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1965,
     "country": "Portugal",
     "pop": 8732313,
     "emp": 3118671,
     "avh": 2194,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1966,
     "country": "Portugal",
     "pop": 8713133,
     "emp": 3103182,
     "avh": 2182,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1967,
     "country": "Portugal",
     "pop": 8707585,
     "emp": 3084117,
     "avh": 2170,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1968,
     "country": "Portugal",
     "pop": 8719112,
     "emp": 3065053,
     "avh": 2158,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1969,
     "country": "Portugal",
     "pop": 8702038,
     "emp": 3045989,
     "avh": 2146,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1970,
     "country": "Portugal",
     "pop": 8651340,
     "emp": 3142502,
     "avh": 2102,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1971,
     "country": "Portugal",
     "pop": 8699997,
     "emp": 3235963,
     "avh": 2101,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1972,
     "country": "Portugal",
     "pop": 8789102,
     "emp": 3259918,
     "avh": 2101,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1973,
     "country": "Portugal",
     "pop": 8907926,
     "emp": 3276872,
     "avh": 2100,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1974,
     "country": "Portugal",
     "pop": 9039975,
     "emp": 3512290,
     "avh": 2109,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1975,
     "country": "Portugal",
     "pop": 9172241,
     "emp": 3605849,
     "avh": 2110,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1976,
     "country": "Portugal",
     "pop": 9302298,
     "emp": 3626806,
     "avh": 2105,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1977,
     "country": "Portugal",
     "pop": 9431043,
     "emp": 3682208,
     "avh": 2106,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1978,
     "country": "Portugal",
     "pop": 9552604,
     "emp": 3706555,
     "avh": 2091,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1979,
     "country": "Portugal",
     "pop": 9660746,
     "emp": 3784859,
     "avh": 2076,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1980,
     "country": "Portugal",
     "pop": 9750964,
     "emp": 3883376,
     "avh": 2058,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1981,
     "country": "Portugal",
     "pop": 9820872,
     "emp": 3900898,
     "avh": 2040,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1982,
     "country": "Portugal",
     "pop": 9870823,
     "emp": 3914937,
     "avh": 2020,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1983,
     "country": "Portugal",
     "pop": 9902997,
     "emp": 4103524,
     "avh": 2002,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1984,
     "country": "Portugal",
     "pop": 9921241,
     "emp": 4095333,
     "avh": 1985,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1985,
     "country": "Portugal",
     "pop": 9929184,
     "emp": 4074889,
     "avh": 1971,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1986,
     "country": "Portugal",
     "pop": 9926416,
     "emp": 4076824,
     "avh": 1958,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1987,
     "country": "Portugal",
     "pop": 9914066,
     "emp": 4175392,
     "avh": 1974,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1988,
     "country": "Portugal",
     "pop": 9899198,
     "emp": 4276299,
     "avh": 1954,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1989,
     "country": "Portugal",
     "pop": 9890822,
     "emp": 4367899,
     "avh": 1982,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1990,
     "country": "Portugal",
     "pop": 9895364,
     "emp": 4467215,
     "avh": 1972,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1991,
     "country": "Portugal",
     "pop": 9916049,
     "emp": 4620273,
     "avh": 1893,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1992,
     "country": "Portugal",
     "pop": 9951303,
     "emp": 4682068,
     "avh": 1876,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1993,
     "country": "Portugal",
     "pop": 9996640,
     "emp": 4602285,
     "avh": 1863,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1994,
     "country": "Portugal",
     "pop": 10045044,
     "emp": 4606681,
     "avh": 1859,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1995,
     "country": "Portugal",
     "pop": 10091325,
     "emp": 4586215,
     "avh": 1897,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1996,
     "country": "Portugal",
     "pop": 10134020,
     "emp": 4665219,
     "avh": 1898,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1997,
     "country": "Portugal",
     "pop": 10174563,
     "emp": 4785222,
     "avh": 1893,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1998,
     "country": "Portugal",
     "pop": 10214052,
     "emp": 4913673,
     "avh": 1909,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1999,
     "country": "Portugal",
     "pop": 10254490,
     "emp": 4981141,
     "avh": 1910,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2000,
     "country": "Portugal",
     "pop": 10297112,
     "emp": 5076171,
     "avh": 1920,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2001,
     "country": "Portugal",
     "pop": 10341454,
     "emp": 5150791,
     "avh": 1903,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2002,
     "country": "Portugal",
     "pop": 10385987,
     "emp": 5164615,
     "avh": 1896,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2003,
     "country": "Portugal",
     "pop": 10429612,
     "emp": 5116971,
     "avh": 1889,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2004,
     "country": "Portugal",
     "pop": 10470921,
     "emp": 5088782,
     "avh": 1896,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2005,
     "country": "Portugal",
     "pop": 10508495,
     "emp": 5074203,
     "avh": 1898,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2006,
     "country": "Portugal",
     "pop": 10542830,
     "emp": 5101672,
     "avh": 1886,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2007,
     "country": "Portugal",
     "pop": 10573143,
     "emp": 5107033,
     "avh": 1903,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2008,
     "country": "Portugal",
     "pop": 10595314,
     "emp": 5129096,
     "avh": 1890,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2009,
     "country": "Portugal",
     "pop": 10604056,
     "emp": 4988680,
     "avh": 1890,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2010,
     "country": "Portugal",
     "pop": 10596058,
     "emp": 4911687,
     "avh": 1893,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2011,
     "country": "Portugal",
     "pop": 10569380,
     "emp": 4811248,
     "avh": 1870,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2012,
     "country": "Portugal",
     "pop": 10526308,
     "emp": 4614422,
     "avh": 1853,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2013,
     "country": "Portugal",
     "pop": 10473021,
     "emp": 4484049,
     "avh": 1863,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2014,
     "country": "Portugal",
     "pop": 10418218,
     "emp": 4548008,
     "avh": 1870,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2015,
     "country": "Portugal",
     "pop": 10368351,
     "emp": 4608299,
     "avh": 1878,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2016,
     "country": "Portugal",
     "pop": 10325538,
     "emp": 4678263,
     "avh": 1884,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2017,
     "country": "Portugal",
     "pop": 10288527,
     "emp": 4826373,
     "avh": 1873,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2018,
     "country": "Portugal",
     "pop": 10256193,
     "emp": 4931154,
     "avh": 1867,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2019,
     "country": "Portugal",
     "pop": 10226187,
     "emp": 4961589,
     "avh": 1864,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 1995,
     "country": "Romania",
     "pop": 22964754,
     "emp": 11152299,
     "avh": 1822,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 1996,
     "country": "Romania",
     "pop": 22805703,
     "emp": 11179114,
     "avh": 1861,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 1997,
     "country": "Romania",
     "pop": 22637604,
     "emp": 11199999,
     "avh": 1860,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 1998,
     "country": "Romania",
     "pop": 22466286,
     "emp": 11097100,
     "avh": 1859,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 1999,
     "country": "Romania",
     "pop": 22298125,
     "emp": 11022000,
     "avh": 1850,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2000,
     "country": "Romania",
     "pop": 22137419,
     "emp": 10897600,
     "avh": 1852,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2001,
     "country": "Romania",
     "pop": 21989350,
     "emp": 10807499,
     "avh": 1852,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2002,
     "country": "Romania",
     "pop": 21853273,
     "emp": 9767600,
     "avh": 1867,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2003,
     "country": "Romania",
     "pop": 21720407,
     "emp": 9367899,
     "avh": 1837,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2004,
     "country": "Romania",
     "pop": 21577885,
     "emp": 9282899,
     "avh": 1886,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2005,
     "country": "Romania",
     "pop": 21417291,
     "emp": 9114600,
     "avh": 1876,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2006,
     "country": "Romania",
     "pop": 21234305,
     "emp": 9291199,
     "avh": 1836,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2007,
     "country": "Romania",
     "pop": 21034189,
     "emp": 9353300,
     "avh": 1839,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2008,
     "country": "Romania",
     "pop": 20829517,
     "emp": 9369099,
     "avh": 1835,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2009,
     "country": "Romania",
     "pop": 20637991,
     "emp": 9243499,
     "avh": 1815,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2010,
     "country": "Romania",
     "pop": 20471864,
     "emp": 8712800,
     "avh": 1840,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2011,
     "country": "Romania",
     "pop": 20336718,
     "emp": 8528200,
     "avh": 1849,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2012,
     "country": "Romania",
     "pop": 20227469,
     "emp": 8605099,
     "avh": 1811,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2013,
     "country": "Romania",
     "pop": 20132776,
     "emp": 8549099,
     "avh": 1806,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2014,
     "country": "Romania",
     "pop": 20035930,
     "emp": 8613699,
     "avh": 1792,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2015,
     "country": "Romania",
     "pop": 19925175,
     "emp": 8535400,
     "avh": 1785,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2016,
     "country": "Romania",
     "pop": 19796285,
     "emp": 8448800,
     "avh": 1809,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2017,
     "country": "Romania",
     "pop": 19653969,
     "emp": 8670599,
     "avh": 1785,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2018,
     "country": "Romania",
     "pop": 19506114,
     "emp": 8688500,
     "avh": 1787,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2019,
     "country": "Romania",
     "pop": 19364557,
     "emp": 8680299,
     "avh": 1791,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 1992,
     "country": "Russian Federation",
     "pop": 148268581,
     "emp": 72240905,
     "avh": 1933,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 1993,
     "country": "Russian Federation",
     "pop": 148373580,
     "emp": 71165107,
     "avh": 1939,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 1994,
     "country": "Russian Federation",
     "pop": 148349441,
     "emp": 68729125,
     "avh": 1895,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 1995,
     "country": "Russian Federation",
     "pop": 148227466,
     "emp": 66713844,
     "avh": 1891,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 1996,
     "country": "Russian Federation",
     "pop": 148020847,
     "emp": 66128524,
     "avh": 1894,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 1997,
     "country": "Russian Federation",
     "pop": 147730019,
     "emp": 65039398,
     "avh": 1951,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 1998,
     "country": "Russian Federation",
     "pop": 147360604,
     "emp": 64111717,
     "avh": 1946,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 1999,
     "country": "Russian Federation",
     "pop": 146915915,
     "emp": 64613677,
     "avh": 1964,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2000,
     "country": "Russian Federation",
     "pop": 146404903,
     "emp": 65059394,
     "avh": 1982,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2001,
     "country": "Russian Federation",
     "pop": 145830721,
     "emp": 65763763,
     "avh": 1980,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2002,
     "country": "Russian Federation",
     "pop": 145215700,
     "emp": 66176193,
     "avh": 1982,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2003,
     "country": "Russian Federation",
     "pop": 144610882,
     "emp": 66629249,
     "avh": 1993,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2004,
     "country": "Russian Federation",
     "pop": 144080643,
     "emp": 67599044,
     "avh": 1993,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2005,
     "country": "Russian Federation",
     "pop": 143672116,
     "emp": 68715812,
     "avh": 1989,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2006,
     "country": "Russian Federation",
     "pop": 143403256,
     "emp": 69614433,
     "avh": 1998,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2007,
     "country": "Russian Federation",
     "pop": 143266212,
     "emp": 71158256,
     "avh": 1999,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2008,
     "country": "Russian Federation",
     "pop": 143248764,
     "emp": 71433616,
     "avh": 1997,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2009,
     "country": "Russian Federation",
     "pop": 143326913,
     "emp": 69820526,
     "avh": 1974,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2010,
     "country": "Russian Federation",
     "pop": 143479274,
     "emp": 70372367,
     "avh": 1976,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2011,
     "country": "Russian Federation",
     "pop": 143703025,
     "emp": 71362312,
     "avh": 1979,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2012,
     "country": "Russian Federation",
     "pop": 143993892,
     "emp": 72050727,
     "avh": 1982,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2013,
     "country": "Russian Federation",
     "pop": 144325449,
     "emp": 71860641,
     "avh": 1980,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2014,
     "country": "Russian Federation",
     "pop": 144664841,
     "emp": 70895790,
     "avh": 1985,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2015,
     "country": "Russian Federation",
     "pop": 144985057,
     "emp": 71733901,
     "avh": 1978,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2016,
     "country": "Russian Federation",
     "pop": 145275383,
     "emp": 71799095,
     "avh": 1974,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2017,
     "country": "Russian Federation",
     "pop": 145530082,
     "emp": 71799873,
     "avh": 1979,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2018,
     "country": "Russian Federation",
     "pop": 145734038,
     "emp": 72164085,
     "avh": 1970,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2019,
     "country": "Russian Federation",
     "pop": 145872256,
     "emp": 71670639,
     "avh": 1965,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 1960,
     "country": "Singapore",
     "pop": 1644634,
     "emp": 485596,
     "avh": 2400,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1961,
     "country": "Singapore",
     "pop": 1700574,
     "emp": 505058,
     "avh": 2395,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1962,
     "country": "Singapore",
     "pop": 1748323,
     "emp": 522266,
     "avh": 2389,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1963,
     "country": "Singapore",
     "pop": 1793075,
     "emp": 538739,
     "avh": 2384,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1964,
     "country": "Singapore",
     "pop": 1839625,
     "emp": 555911,
     "avh": 2379,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1965,
     "country": "Singapore",
     "pop": 1884877,
     "emp": 572849,
     "avh": 2373,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1966,
     "country": "Singapore",
     "pop": 1932326,
     "emp": 590616,
     "avh": 2368,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1967,
     "country": "Singapore",
     "pop": 1975479,
     "emp": 607227,
     "avh": 2363,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1968,
     "country": "Singapore",
     "pop": 2009843,
     "emp": 621270,
     "avh": 2358,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1969,
     "country": "Singapore",
     "pop": 2040310,
     "emp": 634220,
     "avh": 2352,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1970,
     "country": "Singapore",
     "pop": 2072283,
     "emp": 647747,
     "avh": 2347,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1971,
     "country": "Singapore",
     "pop": 2110963,
     "emp": 707889,
     "avh": 2347,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1972,
     "country": "Singapore",
     "pop": 2150504,
     "emp": 788084,
     "avh": 2347,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1973,
     "country": "Singapore",
     "pop": 2189607,
     "emp": 795727,
     "avh": 2347,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1974,
     "country": "Singapore",
     "pop": 2226377,
     "emp": 820407,
     "avh": 2347,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1975,
     "country": "Singapore",
     "pop": 2259721,
     "emp": 829463,
     "avh": 2326,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1976,
     "country": "Singapore",
     "pop": 2288862,
     "emp": 866184,
     "avh": 2352,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1977,
     "country": "Singapore",
     "pop": 2314988,
     "emp": 899522,
     "avh": 2297,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1978,
     "country": "Singapore",
     "pop": 2341405,
     "emp": 950972,
     "avh": 2297,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1979,
     "country": "Singapore",
     "pop": 2372595,
     "emp": 1013368,
     "avh": 2272,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1980,
     "country": "Singapore",
     "pop": 2411688,
     "emp": 1063723,
     "avh": 2281,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1981,
     "country": "Singapore",
     "pop": 2460500,
     "emp": 1148013,
     "avh": 2308,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1982,
     "country": "Singapore",
     "pop": 2517985,
     "emp": 1215186,
     "avh": 2314,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1983,
     "country": "Singapore",
     "pop": 2580912,
     "emp": 1245140,
     "avh": 2320,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1984,
     "country": "Singapore",
     "pop": 2644497,
     "emp": 1263053,
     "avh": 2329,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1985,
     "country": "Singapore",
     "pop": 2705534,
     "emp": 1228620,
     "avh": 2288,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1986,
     "country": "Singapore",
     "pop": 2762438,
     "emp": 1208419,
     "avh": 2322,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1987,
     "country": "Singapore",
     "pop": 2816971,
     "emp": 1260864,
     "avh": 2353,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1988,
     "country": "Singapore",
     "pop": 2873281,
     "emp": 1325051,
     "avh": 2367,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1989,
     "country": "Singapore",
     "pop": 2937276,
     "emp": 1387248,
     "avh": 2427,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1990,
     "country": "Singapore",
     "pop": 3012966,
     "emp": 1529556,
     "avh": 2431,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1991,
     "country": "Singapore",
     "pop": 3101147,
     "emp": 1579628,
     "avh": 2451,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1992,
     "country": "Singapore",
     "pop": 3199642,
     "emp": 1616797,
     "avh": 2455,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1993,
     "country": "Singapore",
     "pop": 3305807,
     "emp": 1615236,
     "avh": 2482,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1994,
     "country": "Singapore",
     "pop": 3415703,
     "emp": 1660504,
     "avh": 2498,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1995,
     "country": "Singapore",
     "pop": 3525969,
     "emp": 1693856,
     "avh": 2512,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1996,
     "country": "Singapore",
     "pop": 3638187,
     "emp": 1758450,
     "avh": 2533,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1997,
     "country": "Singapore",
     "pop": 3752140,
     "emp": 1867531,
     "avh": 2547,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1998,
     "country": "Singapore",
     "pop": 3860714,
     "emp": 1929824,
     "avh": 2535,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1999,
     "country": "Singapore",
     "pop": 3954743,
     "emp": 1975232,
     "avh": 2556,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2000,
     "country": "Singapore",
     "pop": 4028871,
     "emp": 2084654,
     "avh": 2574,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2001,
     "country": "Singapore",
     "pop": 4077145,
     "emp": 2133071,
     "avh": 2553,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2002,
     "country": "Singapore",
     "pop": 4104419,
     "emp": 2198262,
     "avh": 2545,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2003,
     "country": "Singapore",
     "pop": 4129225,
     "emp": 2186929,
     "avh": 2550,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2004,
     "country": "Singapore",
     "pop": 4177213,
     "emp": 2259111,
     "avh": 2515,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2005,
     "country": "Singapore",
     "pop": 4265687,
     "emp": 2373216,
     "avh": 2515,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2006,
     "country": "Singapore",
     "pop": 4402331,
     "emp": 2547529,
     "avh": 2507,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2007,
     "country": "Singapore",
     "pop": 4578630,
     "emp": 2797019,
     "avh": 2484,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2008,
     "country": "Singapore",
     "pop": 4775804,
     "emp": 2952399,
     "avh": 2477,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2009,
     "country": "Singapore",
     "pop": 4966614,
     "emp": 2991791,
     "avh": 2440,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2010,
     "country": "Singapore",
     "pop": 5131172,
     "emp": 3108314,
     "avh": 2476,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2011,
     "country": "Singapore",
     "pop": 5263636,
     "emp": 3230442,
     "avh": 2433,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2012,
     "country": "Singapore",
     "pop": 5369476,
     "emp": 3359426,
     "avh": 2441,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2013,
     "country": "Singapore",
     "pop": 5453737,
     "emp": 3496714,
     "avh": 2430,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2014,
     "country": "Singapore",
     "pop": 5525626,
     "emp": 3622608,
     "avh": 2390,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2015,
     "country": "Singapore",
     "pop": 5592152,
     "emp": 3655489,
     "avh": 2362,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2016,
     "country": "Singapore",
     "pop": 5653634,
     "emp": 3672650,
     "avh": 2351,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2017,
     "country": "Singapore",
     "pop": 5708041,
     "emp": 3669285,
     "avh": 2333,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2018,
     "country": "Singapore",
     "pop": 5757499,
     "emp": 3714766,
     "avh": 2306,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2019,
     "country": "Singapore",
     "pop": 5804337,
     "emp": 3759603,
     "avh": 2330,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 1990,
     "country": "Slovakia",
     "pop": 5288454,
     "emp": 2449722,
     "avh": 1827,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 1991,
     "country": "Slovakia",
     "pop": 5309235,
     "emp": 2261086,
     "avh": 1827,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 1992,
     "country": "Slovakia",
     "pop": 5329033,
     "emp": 2123515,
     "avh": 1827,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 1993,
     "country": "Slovakia",
     "pop": 5347214,
     "emp": 2122642,
     "avh": 1827,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 1994,
     "country": "Slovakia",
     "pop": 5362896,
     "emp": 2080933,
     "avh": 1827,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 1995,
     "country": "Slovakia",
     "pop": 5375470,
     "emp": 2127164,
     "avh": 1853,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 1996,
     "country": "Slovakia",
     "pop": 5384788,
     "emp": 2170665,
     "avh": 1819,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 1997,
     "country": "Slovakia",
     "pop": 5391204,
     "emp": 2146855,
     "avh": 1829,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 1998,
     "country": "Slovakia",
     "pop": 5395254,
     "emp": 2135469,
     "avh": 1821,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 1999,
     "country": "Slovakia",
     "pop": 5397708,
     "emp": 2080192,
     "avh": 1816,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2000,
     "country": "Slovakia",
     "pop": 5399211,
     "emp": 2042890,
     "avh": 1815,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2001,
     "country": "Slovakia",
     "pop": 5399992,
     "emp": 2058715,
     "avh": 1800,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2002,
     "country": "Slovakia",
     "pop": 5400122,
     "emp": 2061435,
     "avh": 1754,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2003,
     "country": "Slovakia",
     "pop": 5399834,
     "emp": 2085005,
     "avh": 1697,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2004,
     "country": "Slovakia",
     "pop": 5399380,
     "emp": 2080457,
     "avh": 1741,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2005,
     "country": "Slovakia",
     "pop": 5398963,
     "emp": 2113666,
     "avh": 1769,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2006,
     "country": "Slovakia",
     "pop": 5398673,
     "emp": 2157446,
     "avh": 1774,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2007,
     "country": "Slovakia",
     "pop": 5398692,
     "emp": 2201915,
     "avh": 1791,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2008,
     "country": "Slovakia",
     "pop": 5399371,
     "emp": 2271226,
     "avh": 1793,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2009,
     "country": "Slovakia",
     "pop": 5401153,
     "emp": 2224544,
     "avh": 1780,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2010,
     "country": "Slovakia",
     "pop": 5404294,
     "emp": 2190112,
     "avh": 1805,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2011,
     "country": "Slovakia",
     "pop": 5408937,
     "emp": 2228003,
     "avh": 1793,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2012,
     "country": "Slovakia",
     "pop": 5414889,
     "emp": 2227791,
     "avh": 1789,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2013,
     "country": "Slovakia",
     "pop": 5421725,
     "emp": 2210882,
     "avh": 1771,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2014,
     "country": "Slovakia",
     "pop": 5428803,
     "emp": 2242794,
     "avh": 1759,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2015,
     "country": "Slovakia",
     "pop": 5435611,
     "emp": 2287825,
     "avh": 1754,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2016,
     "country": "Slovakia",
     "pop": 5442003,
     "emp": 2342001,
     "avh": 1740,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2017,
     "country": "Slovakia",
     "pop": 5447900,
     "emp": 2392552,
     "avh": 1713,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2018,
     "country": "Slovakia",
     "pop": 5453014,
     "emp": 2439509,
     "avh": 1703,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2019,
     "country": "Slovakia",
     "pop": 5457013,
     "emp": 2468860,
     "avh": 1694,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 1995,
     "country": "Slovenia",
     "pop": 1991131,
     "emp": 926256,
     "avh": 1755,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 1996,
     "country": "Slovenia",
     "pop": 1988565,
     "emp": 907297,
     "avh": 1727,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 1997,
     "country": "Slovenia",
     "pop": 1987455,
     "emp": 891451,
     "avh": 1715,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 1998,
     "country": "Slovenia",
     "pop": 1987385,
     "emp": 892420,
     "avh": 1728,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 1999,
     "country": "Slovenia",
     "pop": 1987632,
     "emp": 905633,
     "avh": 1730,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2000,
     "country": "Slovenia",
     "pop": 1987717,
     "emp": 917375,
     "avh": 1710,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2001,
     "country": "Slovenia",
     "pop": 1987461,
     "emp": 921050,
     "avh": 1695,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2002,
     "country": "Slovenia",
     "pop": 1987267,
     "emp": 934327,
     "avh": 1720,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2003,
     "country": "Slovenia",
     "pop": 1987862,
     "emp": 931105,
     "avh": 1723,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2004,
     "country": "Slovenia",
     "pop": 1990222,
     "emp": 934443,
     "avh": 1736,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2005,
     "country": "Slovenia",
     "pop": 1994976,
     "emp": 930541,
     "avh": 1696,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2006,
     "country": "Slovenia",
     "pop": 2002430,
     "emp": 945671,
     "avh": 1667,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2007,
     "country": "Slovenia",
     "pop": 2012118,
     "emp": 980402,
     "avh": 1654,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2008,
     "country": "Slovenia",
     "pop": 2023052,
     "emp": 1004885,
     "avh": 1673,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2009,
     "country": "Slovenia",
     "pop": 2033804,
     "emp": 984665,
     "avh": 1678,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2010,
     "country": "Slovenia",
     "pop": 2043337,
     "emp": 964307,
     "avh": 1680,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2011,
     "country": "Slovenia",
     "pop": 2051287,
     "emp": 949836,
     "avh": 1663,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2012,
     "country": "Slovenia",
     "pop": 2057823,
     "emp": 941859,
     "avh": 1644,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2013,
     "country": "Slovenia",
     "pop": 2063110,
     "emp": 932375,
     "avh": 1662,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2014,
     "country": "Slovenia",
     "pop": 2067488,
     "emp": 937419,
     "avh": 1681,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2015,
     "country": "Slovenia",
     "pop": 2071199,
     "emp": 950674,
     "avh": 1687,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2016,
     "country": "Slovenia",
     "pop": 2074210,
     "emp": 968354,
     "avh": 1652,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2017,
     "country": "Slovenia",
     "pop": 2076394,
     "emp": 997621,
     "avh": 1621,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2018,
     "country": "Slovenia",
     "pop": 2077837,
     "emp": 1026230,
     "avh": 1598,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2019,
     "country": "Slovenia",
     "pop": 2078654,
     "emp": 1046805,
     "avh": 1592,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 1950,
     "country": "Sweden",
     "pop": 7024568,
     "emp": 3376038,
     "avh": 2005,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1951,
     "country": "Sweden",
     "pop": 7083482,
     "emp": 3409248,
     "avh": 1995,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1952,
     "country": "Sweden",
     "pop": 7135403,
     "emp": 3381171,
     "avh": 1995,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1953,
     "country": "Sweden",
     "pop": 7182261,
     "emp": 3373249,
     "avh": 1975,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1954,
     "country": "Sweden",
     "pop": 7224354,
     "emp": 3401202,
     "avh": 1986,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1955,
     "country": "Sweden",
     "pop": 7273326,
     "emp": 3432873,
     "avh": 1975,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1956,
     "country": "Sweden",
     "pop": 7325568,
     "emp": 3483870,
     "avh": 1950,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1957,
     "country": "Sweden",
     "pop": 7374892,
     "emp": 3489890,
     "avh": 1950,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1958,
     "country": "Sweden",
     "pop": 7420302,
     "emp": 3515211,
     "avh": 1919,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1959,
     "country": "Sweden",
     "pop": 7457463,
     "emp": 3560684,
     "avh": 1893,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1960,
     "country": "Sweden",
     "pop": 7491660,
     "emp": 3660868,
     "avh": 1888,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1961,
     "country": "Sweden",
     "pop": 7531323,
     "emp": 3690339,
     "avh": 1890,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1962,
     "country": "Sweden",
     "pop": 7572976,
     "emp": 3710184,
     "avh": 1878,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1963,
     "country": "Sweden",
     "pop": 7615780,
     "emp": 3729074,
     "avh": 1872,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1964,
     "country": "Sweden",
     "pop": 7672892,
     "emp": 3782646,
     "avh": 1841,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1965,
     "country": "Sweden",
     "pop": 7745500,
     "emp": 3808520,
     "avh": 1831,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1966,
     "country": "Sweden",
     "pop": 7819556,
     "emp": 3813859,
     "avh": 1816,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1967,
     "country": "Sweden",
     "pop": 7879780,
     "emp": 3773225,
     "avh": 1786,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1968,
     "country": "Sweden",
     "pop": 7924133,
     "emp": 3813354,
     "avh": 1742,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1969,
     "country": "Sweden",
     "pop": 7980018,
     "emp": 3885040,
     "avh": 1720,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1970,
     "country": "Sweden",
     "pop": 8054916,
     "emp": 3960969,
     "avh": 1703,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1971,
     "country": "Sweden",
     "pop": 8095793,
     "emp": 3946350,
     "avh": 1672,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1972,
     "country": "Sweden",
     "pop": 8127034,
     "emp": 3962821,
     "avh": 1633,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1973,
     "country": "Sweden",
     "pop": 8151598,
     "emp": 3982358,
     "avh": 1617,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1974,
     "country": "Sweden",
     "pop": 8173968,
     "emp": 4060520,
     "avh": 1599,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1975,
     "country": "Sweden",
     "pop": 8197340,
     "emp": 4136231,
     "avh": 1575,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1976,
     "country": "Sweden",
     "pop": 8223249,
     "emp": 4148925,
     "avh": 1588,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1977,
     "country": "Sweden",
     "pop": 8250695,
     "emp": 4156028,
     "avh": 1557,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1978,
     "country": "Sweden",
     "pop": 8277414,
     "emp": 4172967,
     "avh": 1520,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1979,
     "country": "Sweden",
     "pop": 8300003,
     "emp": 4236073,
     "avh": 1511,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1980,
     "country": "Sweden",
     "pop": 8316338,
     "emp": 4283282,
     "avh": 1514,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1981,
     "country": "Sweden",
     "pop": 8325493,
     "emp": 4289722,
     "avh": 1506,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1982,
     "country": "Sweden",
     "pop": 8329425,
     "emp": 4281078,
     "avh": 1520,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1983,
     "country": "Sweden",
     "pop": 8332443,
     "emp": 4290383,
     "avh": 1529,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1984,
     "country": "Sweden",
     "pop": 8340440,
     "emp": 4326080,
     "avh": 1531,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1985,
     "country": "Sweden",
     "pop": 8357652,
     "emp": 4372880,
     "avh": 1535,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1986,
     "country": "Sweden",
     "pop": 8384989,
     "emp": 4403741,
     "avh": 1533,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1987,
     "country": "Sweden",
     "pop": 8421056,
     "emp": 4443112,
     "avh": 1543,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1988,
     "country": "Sweden",
     "pop": 8464787,
     "emp": 4507133,
     "avh": 1563,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1989,
     "country": "Sweden",
     "pop": 8514206,
     "emp": 4568691,
     "avh": 1562,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1990,
     "country": "Sweden",
     "pop": 8567384,
     "emp": 4603871,
     "avh": 1558,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1991,
     "country": "Sweden",
     "pop": 8625137,
     "emp": 4534415,
     "avh": 1545,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1992,
     "country": "Sweden",
     "pop": 8686738,
     "emp": 4338086,
     "avh": 1563,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1993,
     "country": "Sweden",
     "pop": 8746776,
     "emp": 4115596,
     "avh": 1594,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1994,
     "country": "Sweden",
     "pop": 8798234,
     "emp": 4071314,
     "avh": 1633,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1995,
     "country": "Sweden",
     "pop": 8836420,
     "emp": 4133455,
     "avh": 1638,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1996,
     "country": "Sweden",
     "pop": 8859191,
     "emp": 4104249,
     "avh": 1651,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1997,
     "country": "Sweden",
     "pop": 8868853,
     "emp": 4053739,
     "avh": 1656,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1998,
     "country": "Sweden",
     "pop": 8870848,
     "emp": 4121053,
     "avh": 1655,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1999,
     "country": "Sweden",
     "pop": 8873100,
     "emp": 4204934,
     "avh": 1664,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2000,
     "country": "Sweden",
     "pop": 8881640,
     "emp": 4305336,
     "avh": 1643,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2001,
     "country": "Sweden",
     "pop": 8897793,
     "emp": 4392419,
     "avh": 1620,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2002,
     "country": "Sweden",
     "pop": 8920710,
     "emp": 4391123,
     "avh": 1597,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2003,
     "country": "Sweden",
     "pop": 8951436,
     "emp": 4364802,
     "avh": 1583,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2004,
     "country": "Sweden",
     "pop": 8990654,
     "emp": 4336328,
     "avh": 1606,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2005,
     "country": "Sweden",
     "pop": 9038623,
     "emp": 4346067,
     "avh": 1605,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2006,
     "country": "Sweden",
     "pop": 9096165,
     "emp": 4428739,
     "avh": 1603,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2007,
     "country": "Sweden",
     "pop": 9162939,
     "emp": 4531755,
     "avh": 1616,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2008,
     "country": "Sweden",
     "pop": 9236428,
     "emp": 4564108,
     "avh": 1627,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2009,
     "country": "Sweden",
     "pop": 9313087,
     "emp": 4467704,
     "avh": 1613,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2010,
     "country": "Sweden",
     "pop": 9390168,
     "emp": 4494977,
     "avh": 1640,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2011,
     "country": "Sweden",
     "pop": 9466710,
     "emp": 4601816,
     "avh": 1640,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2012,
     "country": "Sweden",
     "pop": 9542812,
     "emp": 4638603,
     "avh": 1627,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2013,
     "country": "Sweden",
     "pop": 9618016,
     "emp": 4680492,
     "avh": 1617,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2014,
     "country": "Sweden",
     "pop": 9692131,
     "emp": 4735364,
     "avh": 1619,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2015,
     "country": "Sweden",
     "pop": 9764950,
     "emp": 4790610,
     "avh": 1620,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2016,
     "country": "Sweden",
     "pop": 9836007,
     "emp": 4853437,
     "avh": 1634,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2017,
     "country": "Sweden",
     "pop": 9904896,
     "emp": 4940289,
     "avh": 1621,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2018,
     "country": "Sweden",
     "pop": 9971638,
     "emp": 4995614,
     "avh": 1620,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2019,
     "country": "Sweden",
     "pop": 10036379,
     "emp": 5002136,
     "avh": 1605,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 1970,
     "country": "Thailand",
     "pop": 36884536,
     "emp": 15204714,
     "avh": 2455,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1971,
     "country": "Thailand",
     "pop": 37963278,
     "emp": 15629531,
     "avh": 2455,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1972,
     "country": "Thailand",
     "pop": 39058603,
     "emp": 16056514,
     "avh": 2352,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1973,
     "country": "Thailand",
     "pop": 40159582,
     "emp": 16495126,
     "avh": 2471,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1974,
     "country": "Thailand",
     "pop": 41252324,
     "emp": 16947759,
     "avh": 2489,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1975,
     "country": "Thailand",
     "pop": 42326312,
     "emp": 17409986,
     "avh": 2461,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1976,
     "country": "Thailand",
     "pop": 43377271,
     "emp": 17880859,
     "avh": 2457,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1977,
     "country": "Thailand",
     "pop": 44405904,
     "emp": 18358676,
     "avh": 2453,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1978,
     "country": "Thailand",
     "pop": 45413080,
     "emp": 19441888,
     "avh": 2528,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1979,
     "country": "Thailand",
     "pop": 46401754,
     "emp": 19122068,
     "avh": 2619,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1980,
     "country": "Thailand",
     "pop": 47374472,
     "emp": 20313409,
     "avh": 2710,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1981,
     "country": "Thailand",
     "pop": 48326274,
     "emp": 20869209,
     "avh": 2632,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1982,
     "country": "Thailand",
     "pop": 49255900,
     "emp": 21419685,
     "avh": 2348,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1983,
     "country": "Thailand",
     "pop": 50173924,
     "emp": 22932546,
     "avh": 2682,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1984,
     "country": "Thailand",
     "pop": 51094868,
     "emp": 24281976,
     "avh": 2700,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1985,
     "country": "Thailand",
     "pop": 52026901,
     "emp": 24334468,
     "avh": 2672,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1986,
     "country": "Thailand",
     "pop": 52980094,
     "emp": 25108785,
     "avh": 2671,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1987,
     "country": "Thailand",
     "pop": 53945881,
     "emp": 26404281,
     "avh": 2625,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1988,
     "country": "Thailand",
     "pop": 54891520,
     "emp": 27775581,
     "avh": 2648,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1989,
     "country": "Thailand",
     "pop": 55772169,
     "emp": 28478906,
     "avh": 2715,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1990,
     "country": "Thailand",
     "pop": 56558186,
     "emp": 28704509,
     "avh": 2579,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1991,
     "country": "Thailand",
     "pop": 57232465,
     "emp": 29032207,
     "avh": 2627,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1992,
     "country": "Thailand",
     "pop": 57811021,
     "emp": 30343666,
     "avh": 2643,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1993,
     "country": "Thailand",
     "pop": 58337773,
     "emp": 30317150,
     "avh": 2564,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1994,
     "country": "Thailand",
     "pop": 58875269,
     "emp": 30343334,
     "avh": 2614,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1995,
     "country": "Thailand",
     "pop": 59467274,
     "emp": 30927778,
     "avh": 2609,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1996,
     "country": "Thailand",
     "pop": 60130186,
     "emp": 30697734,
     "avh": 2555,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1997,
     "country": "Thailand",
     "pop": 60846582,
     "emp": 31580263,
     "avh": 2485,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1998,
     "country": "Thailand",
     "pop": 61585103,
     "emp": 30615234,
     "avh": 2533,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1999,
     "country": "Thailand",
     "pop": 62298571,
     "emp": 30577653,
     "avh": 2498,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2000,
     "country": "Thailand",
     "pop": 62952642,
     "emp": 31473855,
     "avh": 2502,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2001,
     "country": "Thailand",
     "pop": 63539196,
     "emp": 32090091,
     "avh": 2404,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2002,
     "country": "Thailand",
     "pop": 64069087,
     "emp": 33048217,
     "avh": 2393,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2003,
     "country": "Thailand",
     "pop": 64549866,
     "emp": 33823299,
     "avh": 2383,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2004,
     "country": "Thailand",
     "pop": 64995299,
     "emp": 34700328,
     "avh": 2389,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2005,
     "country": "Thailand",
     "pop": 65416189,
     "emp": 35209247,
     "avh": 2337,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2006,
     "country": "Thailand",
     "pop": 65812536,
     "emp": 35620029,
     "avh": 2325,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2007,
     "country": "Thailand",
     "pop": 66182067,
     "emp": 36189197,
     "avh": 2329,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2008,
     "country": "Thailand",
     "pop": 66530984,
     "emp": 36977848,
     "avh": 2342,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2009,
     "country": "Thailand",
     "pop": 66866839,
     "emp": 37681354,
     "avh": 2354,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2010,
     "country": "Thailand",
     "pop": 67195028,
     "emp": 38012290,
     "avh": 2349,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2011,
     "country": "Thailand",
     "pop": 67518388,
     "emp": 37913101,
     "avh": 2357,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2012,
     "country": "Thailand",
     "pop": 67835962,
     "emp": 38278762,
     "avh": 2312,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2013,
     "country": "Thailand",
     "pop": 68144518,
     "emp": 38150440,
     "avh": 2273,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2014,
     "country": "Thailand",
     "pop": 68438746,
     "emp": 38016036,
     "avh": 2247,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2015,
     "country": "Thailand",
     "pop": 68714511,
     "emp": 37952987,
     "avh": 2186,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2016,
     "country": "Thailand",
     "pop": 68971308,
     "emp": 37614360,
     "avh": 2207,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2017,
     "country": "Thailand",
     "pop": 69209810,
     "emp": 37371986,
     "avh": 2092,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2018,
     "country": "Thailand",
     "pop": 69428453,
     "emp": 37791679,
     "avh": 2092,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2019,
     "country": "Thailand",
     "pop": 69625582,
     "emp": 37540958,
     "avh": 2092,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 1991,
     "country": "Trinidad and Tobago",
     "pop": 1229103,
     "emp": 400999,
     "avh": 1585,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 1992,
     "country": "Trinidad and Tobago",
     "pop": 1236683,
     "emp": 405999,
     "avh": 1564,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 1993,
     "country": "Trinidad and Tobago",
     "pop": 1243616,
     "emp": 404599,
     "avh": 1580,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 1994,
     "country": "Trinidad and Tobago",
     "pop": 1249520,
     "emp": 415600,
     "avh": 1591,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 1995,
     "country": "Trinidad and Tobago",
     "pop": 1254200,
     "emp": 431600,
     "avh": 1602,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 1996,
     "country": "Trinidad and Tobago",
     "pop": 1257549,
     "emp": 444200,
     "avh": 1618,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 1997,
     "country": "Trinidad and Tobago",
     "pop": 1259848,
     "emp": 459800,
     "avh": 1627,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 1998,
     "country": "Trinidad and Tobago",
     "pop": 1261695,
     "emp": 479299,
     "avh": 1630,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 1999,
     "country": "Trinidad and Tobago",
     "pop": 1263933,
     "emp": 489399,
     "avh": 1636,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 2000,
     "country": "Trinidad and Tobago",
     "pop": 1267153,
     "emp": 503100,
     "avh": 1663,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 2001,
     "country": "Trinidad and Tobago",
     "pop": 1271632,
     "emp": 514100,
     "avh": 1668,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 2002,
     "country": "Trinidad and Tobago",
     "pop": 1277213,
     "emp": 524999,
     "avh": 1634,
     "left": 60.3,
     "top": 60.7
    },
    {
     "year": 1970,
     "country": "Turkey",
     "pop": 34876303,
     "emp": 11372816,
     "avh": 2086,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1971,
     "country": "Turkey",
     "pop": 35720599,
     "emp": 11580862,
     "avh": 2077,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1972,
     "country": "Turkey",
     "pop": 36587261,
     "emp": 11891639,
     "avh": 2069,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1973,
     "country": "Turkey",
     "pop": 37472336,
     "emp": 12081873,
     "avh": 2060,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1974,
     "country": "Turkey",
     "pop": 38370283,
     "emp": 12363206,
     "avh": 2044,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1975,
     "country": "Turkey",
     "pop": 39277258,
     "emp": 12489052,
     "avh": 2028,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1976,
     "country": "Turkey",
     "pop": 40189567,
     "emp": 12662555,
     "avh": 2012,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1977,
     "country": "Turkey",
     "pop": 41108297,
     "emp": 13075785,
     "avh": 1996,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1978,
     "country": "Turkey",
     "pop": 42039992,
     "emp": 13267882,
     "avh": 1980,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1979,
     "country": "Turkey",
     "pop": 42994041,
     "emp": 13488226,
     "avh": 1964,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1980,
     "country": "Turkey",
     "pop": 43975971,
     "emp": 13692535,
     "avh": 1957,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1981,
     "country": "Turkey",
     "pop": 44988414,
     "emp": 13813305,
     "avh": 1950,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1982,
     "country": "Turkey",
     "pop": 46025411,
     "emp": 14318219,
     "avh": 1943,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1983,
     "country": "Turkey",
     "pop": 47073472,
     "emp": 14613952,
     "avh": 1935,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1984,
     "country": "Turkey",
     "pop": 48114155,
     "emp": 14948913,
     "avh": 1871,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1985,
     "country": "Turkey",
     "pop": 49133937,
     "emp": 15462635,
     "avh": 1898,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1986,
     "country": "Turkey",
     "pop": 50128541,
     "emp": 16181818,
     "avh": 1883,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1987,
     "country": "Turkey",
     "pop": 51100924,
     "emp": 16909763,
     "avh": 1844,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1988,
     "country": "Turkey",
     "pop": 52053765,
     "emp": 17646844,
     "avh": 1837,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1989,
     "country": "Turkey",
     "pop": 52992487,
     "emp": 18040060,
     "avh": 1867,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1990,
     "country": "Turkey",
     "pop": 53921760,
     "emp": 17739168,
     "avh": 1866,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1991,
     "country": "Turkey",
     "pop": 54840590,
     "emp": 18459106,
     "avh": 1870,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1992,
     "country": "Turkey",
     "pop": 55748948,
     "emp": 18524927,
     "avh": 1897,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1993,
     "country": "Turkey",
     "pop": 56653804,
     "emp": 17571063,
     "avh": 1917,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1994,
     "country": "Turkey",
     "pop": 57564204,
     "emp": 18949985,
     "avh": 1886,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1995,
     "country": "Turkey",
     "pop": 58486456,
     "emp": 19409660,
     "avh": 1876,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1996,
     "country": "Turkey",
     "pop": 59423282,
     "emp": 19911075,
     "avh": 1892,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1997,
     "country": "Turkey",
     "pop": 60372568,
     "emp": 19832405,
     "avh": 1878,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1998,
     "country": "Turkey",
     "pop": 61329676,
     "emp": 20335327,
     "avh": 1884,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1999,
     "country": "Turkey",
     "pop": 62287397,
     "emp": 20566719,
     "avh": 1925,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2000,
     "country": "Turkey",
     "pop": 63240194,
     "emp": 20092596,
     "avh": 1937,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2001,
     "country": "Turkey",
     "pop": 64192243,
     "emp": 20012521,
     "avh": 1942,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2002,
     "country": "Turkey",
     "pop": 65145367,
     "emp": 19854684,
     "avh": 1943,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2003,
     "country": "Turkey",
     "pop": 66089402,
     "emp": 19667341,
     "avh": 1943,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2004,
     "country": "Turkey",
     "pop": 67010930,
     "emp": 19571113,
     "avh": 1918,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2005,
     "country": "Turkey",
     "pop": 67903469,
     "emp": 20066986,
     "avh": 1936,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2006,
     "country": "Turkey",
     "pop": 68756810,
     "emp": 20446863,
     "avh": 1944,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2007,
     "country": "Turkey",
     "pop": 69581848,
     "emp": 20766233,
     "avh": 1911,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2008,
     "country": "Turkey",
     "pop": 70418604,
     "emp": 21225351,
     "avh": 1900,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2009,
     "country": "Turkey",
     "pop": 71321399,
     "emp": 21260082,
     "avh": 1881,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2010,
     "country": "Turkey",
     "pop": 72326988,
     "emp": 22581518,
     "avh": 1877,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2011,
     "country": "Turkey",
     "pop": 73443250,
     "emp": 24076166,
     "avh": 1864,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2012,
     "country": "Turkey",
     "pop": 74651050,
     "emp": 24798152,
     "avh": 1855,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2013,
     "country": "Turkey",
     "pop": 75925462,
     "emp": 25523000,
     "avh": 1832,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2014,
     "country": "Turkey",
     "pop": 77229256,
     "emp": 25931001,
     "avh": 1832,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2015,
     "country": "Turkey",
     "pop": 78529409,
     "emp": 26619998,
     "avh": 1832,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2016,
     "country": "Turkey",
     "pop": 79827871,
     "emp": 27204999,
     "avh": 1832,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2017,
     "country": "Turkey",
     "pop": 81116450,
     "emp": 28188999,
     "avh": 1832,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2018,
     "country": "Turkey",
     "pop": 82340088,
     "emp": 28740999,
     "avh": 1832,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2019,
     "country": "Turkey",
     "pop": 83429615,
     "emp": 28087333,
     "avh": 1832,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 1951,
     "country": "Taiwan",
     "pop": 7758202,
     "emp": 3082202,
     "avh": 2356,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1952,
     "country": "Taiwan",
     "pop": 8046915,
     "emp": 3136429,
     "avh": 2353,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1953,
     "country": "Taiwan",
     "pop": 8333009,
     "emp": 3176434,
     "avh": 2350,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1954,
     "country": "Taiwan",
     "pop": 8645264,
     "emp": 3221728,
     "avh": 2347,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1955,
     "country": "Taiwan",
     "pop": 8967001,
     "emp": 3253588,
     "avh": 2344,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1956,
     "country": "Taiwan",
     "pop": 9289545,
     "emp": 3289814,
     "avh": 2341,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1957,
     "country": "Taiwan",
     "pop": 9597690,
     "emp": 3331722,
     "avh": 2338,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1958,
     "country": "Taiwan",
     "pop": 9920227,
     "emp": 3366833,
     "avh": 2336,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1959,
     "country": "Taiwan",
     "pop": 10288327,
     "emp": 3388812,
     "avh": 2333,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1960,
     "country": "Taiwan",
     "pop": 10667705,
     "emp": 3433731,
     "avh": 2330,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1961,
     "country": "Taiwan",
     "pop": 11030385,
     "emp": 3558910,
     "avh": 2327,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1962,
     "country": "Taiwan",
     "pop": 11392513,
     "emp": 3679619,
     "avh": 2324,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1963,
     "country": "Taiwan",
     "pop": 11762101,
     "emp": 3808869,
     "avh": 2321,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1964,
     "country": "Taiwan",
     "pop": 12137143,
     "emp": 3858432,
     "avh": 2318,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1965,
     "country": "Taiwan",
     "pop": 12511863,
     "emp": 3883943,
     "avh": 2315,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1966,
     "country": "Taiwan",
     "pop": 12874153,
     "emp": 3984531,
     "avh": 2312,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1967,
     "country": "Taiwan",
     "pop": 13210344,
     "emp": 4190451,
     "avh": 2310,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1968,
     "country": "Taiwan",
     "pop": 13548537,
     "emp": 4378203,
     "avh": 2307,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1969,
     "country": "Taiwan",
     "pop": 14068984,
     "emp": 4553743,
     "avh": 2304,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1970,
     "country": "Taiwan",
     "pop": 14582944,
     "emp": 4750026,
     "avh": 2301,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1971,
     "country": "Taiwan",
     "pop": 14913564,
     "emp": 4916214,
     "avh": 2305,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1972,
     "country": "Taiwan",
     "pop": 15220495,
     "emp": 5139204,
     "avh": 2307,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1973,
     "country": "Taiwan",
     "pop": 15505121,
     "emp": 5536259,
     "avh": 2305,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1974,
     "country": "Taiwan",
     "pop": 15784817,
     "emp": 5697383,
     "avh": 2307,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1975,
     "country": "Taiwan",
     "pop": 16075128,
     "emp": 5731746,
     "avh": 2308,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1976,
     "country": "Taiwan",
     "pop": 16401413,
     "emp": 5885410,
     "avh": 2307,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1977,
     "country": "Taiwan",
     "pop": 16730895,
     "emp": 6216761,
     "avh": 2306,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1978,
     "country": "Taiwan",
     "pop": 17042272,
     "emp": 6484742,
     "avh": 2303,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1979,
     "country": "Taiwan",
     "pop": 17372779,
     "emp": 6713920,
     "avh": 2336,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1980,
     "country": "Taiwan",
     "pop": 17704538,
     "emp": 6848904,
     "avh": 2313,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1981,
     "country": "Taiwan",
     "pop": 18029982,
     "emp": 6977102,
     "avh": 2310,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1982,
     "country": "Taiwan",
     "pop": 18354855,
     "emp": 7142240,
     "avh": 2269,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1983,
     "country": "Taiwan",
     "pop": 18653146,
     "emp": 7424176,
     "avh": 2254,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1984,
     "country": "Taiwan",
     "pop": 18929866,
     "emp": 7661985,
     "avh": 2254,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1985,
     "country": "Taiwan",
     "pop": 19191510,
     "emp": 7785408,
     "avh": 2244,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1986,
     "country": "Taiwan",
     "pop": 19411454,
     "emp": 8120947,
     "avh": 2242,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1987,
     "country": "Taiwan",
     "pop": 19617046,
     "emp": 8393571,
     "avh": 2276,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1988,
     "country": "Taiwan",
     "pop": 19839704,
     "emp": 8487944,
     "avh": 2250,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1989,
     "country": "Taiwan",
     "pop": 20055492,
     "emp": 8643921,
     "avh": 2231,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1990,
     "country": "Taiwan",
     "pop": 20278946,
     "emp": 8649189,
     "avh": 2230,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1991,
     "country": "Taiwan",
     "pop": 20503568,
     "emp": 8767300,
     "avh": 2217,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1992,
     "country": "Taiwan",
     "pop": 20704227,
     "emp": 8976655,
     "avh": 2220,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1993,
     "country": "Taiwan",
     "pop": 20899019,
     "emp": 9083629,
     "avh": 2240,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1994,
     "country": "Taiwan",
     "pop": 21086645,
     "emp": 9281928,
     "avh": 2184,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1995,
     "country": "Taiwan",
     "pop": 21267653,
     "emp": 9367665,
     "avh": 2224,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1996,
     "country": "Taiwan",
     "pop": 21441432,
     "emp": 9274668,
     "avh": 2198,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1997,
     "country": "Taiwan",
     "pop": 21634124,
     "emp": 9389664,
     "avh": 2141,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1998,
     "country": "Taiwan",
     "pop": 21835703,
     "emp": 9424662,
     "avh": 2192,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1999,
     "country": "Taiwan",
     "pop": 22010489,
     "emp": 9457661,
     "avh": 2190,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2000,
     "country": "Taiwan",
     "pop": 22184530,
     "emp": 9596656,
     "avh": 2180,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2001,
     "country": "Taiwan",
     "pop": 22341120,
     "emp": 9382664,
     "avh": 2125,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2002,
     "country": "Taiwan",
     "pop": 22463172,
     "emp": 9453661,
     "avh": 2111,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2003,
     "country": "Taiwan",
     "pop": 22562663,
     "emp": 9573657,
     "avh": 2117,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2004,
     "country": "Taiwan",
     "pop": 22646836,
     "emp": 9783650,
     "avh": 2135,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2005,
     "country": "Taiwan",
     "pop": 22729753,
     "emp": 9942645,
     "avh": 2127,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2006,
     "country": "Taiwan",
     "pop": 22823455,
     "emp": 10112638,
     "avh": 2134,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2007,
     "country": "Taiwan",
     "pop": 22917444,
     "emp": 10291632,
     "avh": 2129,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2008,
     "country": "Taiwan",
     "pop": 22997696,
     "emp": 10403629,
     "avh": 2073,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2009,
     "country": "Taiwan",
     "pop": 23078402,
     "emp": 10278633,
     "avh": 2054,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2010,
     "country": "Taiwan",
     "pop": 23140948,
     "emp": 10493144,
     "avh": 2062,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2011,
     "country": "Taiwan",
     "pop": 23193518,
     "emp": 10708807,
     "avh": 2052,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2012,
     "country": "Taiwan",
     "pop": 23270367,
     "emp": 10859925,
     "avh": 2066,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2013,
     "country": "Taiwan",
     "pop": 23344670,
     "emp": 10967165,
     "avh": 2062,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2015,
     "country": "Taiwan",
     "pop": 23462914,
     "emp": 11197801,
     "avh": 2152,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2016,
     "country": "Taiwan",
     "pop": 23515945,
     "emp": 11267197,
     "avh": 2123,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2017,
     "country": "Taiwan",
     "pop": 23555522,
     "emp": 11350999,
     "avh": 2092,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2018,
     "country": "Taiwan",
     "pop": 23580080,
     "emp": 11435000,
     "avh": 2090,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2019,
     "country": "Taiwan",
     "pop": 23596027,
     "emp": 11500000,
     "avh": 2085,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 1990,
     "country": "Uruguay",
     "pop": 3109601,
     "emp": 1263685,
     "avh": 1788,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 1991,
     "country": "Uruguay",
     "pop": 3131660,
     "emp": 1278098,
     "avh": 1781,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 1992,
     "country": "Uruguay",
     "pop": 3154464,
     "emp": 1310250,
     "avh": 1775,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 1993,
     "country": "Uruguay",
     "pop": 3177745,
     "emp": 1305901,
     "avh": 1768,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 1994,
     "country": "Uruguay",
     "pop": 3201151,
     "emp": 1344598,
     "avh": 1762,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 1995,
     "country": "Uruguay",
     "pop": 3224281,
     "emp": 1377791,
     "avh": 1755,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 1996,
     "country": "Uruguay",
     "pop": 3247381,
     "emp": 1394223,
     "avh": 1749,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 1997,
     "country": "Uruguay",
     "pop": 3270164,
     "emp": 1411243,
     "avh": 1743,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 1998,
     "country": "Uruguay",
     "pop": 3291053,
     "emp": 1428569,
     "avh": 1736,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 1999,
     "country": "Uruguay",
     "pop": 3308012,
     "emp": 1412191,
     "avh": 1722,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2000,
     "country": "Uruguay",
     "pop": 3319736,
     "emp": 1393310,
     "avh": 1704,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2001,
     "country": "Uruguay",
     "pop": 3325473,
     "emp": 1389793,
     "avh": 1672,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2002,
     "country": "Uruguay",
     "pop": 3326040,
     "emp": 1338125,
     "avh": 1635,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2003,
     "country": "Uruguay",
     "pop": 3323668,
     "emp": 1327381,
     "avh": 1612,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2004,
     "country": "Uruguay",
     "pop": 3321476,
     "emp": 1382630,
     "avh": 1638,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2005,
     "country": "Uruguay",
     "pop": 3321803,
     "emp": 1406130,
     "avh": 1628,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2006,
     "country": "Uruguay",
     "pop": 3325401,
     "emp": 1457141,
     "avh": 1622,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2007,
     "country": "Uruguay",
     "pop": 3331749,
     "emp": 1518509,
     "avh": 1608,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2008,
     "country": "Uruguay",
     "pop": 3340221,
     "emp": 1565925,
     "avh": 1623,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2009,
     "country": "Uruguay",
     "pop": 3349676,
     "emp": 1589357,
     "avh": 1603,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2010,
     "country": "Uruguay",
     "pop": 3359275,
     "emp": 1603875,
     "avh": 1597,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2011,
     "country": "Uruguay",
     "pop": 3368934,
     "emp": 1639674,
     "avh": 1592,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2012,
     "country": "Uruguay",
     "pop": 3378975,
     "emp": 1636097,
     "avh": 1578,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2013,
     "country": "Uruguay",
     "pop": 3389443,
     "emp": 1633927,
     "avh": 1571,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2014,
     "country": "Uruguay",
     "pop": 3400436,
     "emp": 1655324,
     "avh": 1567,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2015,
     "country": "Uruguay",
     "pop": 3412009,
     "emp": 1638986,
     "avh": 1556,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2016,
     "country": "Uruguay",
     "pop": 3424129,
     "emp": 1635623,
     "avh": 1532,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2017,
     "country": "Uruguay",
     "pop": 3436641,
     "emp": 1633812,
     "avh": 1532,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2018,
     "country": "Uruguay",
     "pop": 3449285,
     "emp": 1628946,
     "avh": 1532,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2019,
     "country": "Uruguay",
     "pop": 3461734,
     "emp": 1635378,
     "avh": 1532,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 1950,
     "country": "United States",
     "pop": 155583972,
     "emp": 62814365,
     "avh": 1990,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1951,
     "country": "United States",
     "pop": 158247703,
     "emp": 65092643,
     "avh": 2031,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1952,
     "country": "United States",
     "pop": 160980891,
     "emp": 65884353,
     "avh": 2027,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1953,
     "country": "United States",
     "pop": 163669146,
     "emp": 66820716,
     "avh": 2021,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1954,
     "country": "United States",
     "pop": 166572975,
     "emp": 65598327,
     "avh": 1998,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1955,
     "country": "United States",
     "pop": 169541178,
     "emp": 67496948,
     "avh": 2005,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1956,
     "country": "United States",
     "pop": 172577841,
     "emp": 69129676,
     "avh": 1990,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1957,
     "country": "United States",
     "pop": 175725868,
     "emp": 69468490,
     "avh": 1962,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1958,
     "country": "United States",
     "pop": 178686930,
     "emp": 68217369,
     "avh": 1928,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1959,
     "country": "United States",
     "pop": 181699068,
     "emp": 69783210,
     "avh": 1953,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1960,
     "country": "United States",
     "pop": 184601884,
     "emp": 70956939,
     "avh": 1935,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1961,
     "country": "United States",
     "pop": 187687579,
     "emp": 71006713,
     "avh": 1920,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1962,
     "country": "United States",
     "pop": 190596522,
     "emp": 72063232,
     "avh": 1940,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1963,
     "country": "United States",
     "pop": 193359363,
     "emp": 73074264,
     "avh": 1928,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1964,
     "country": "United States",
     "pop": 196063957,
     "emp": 74739616,
     "avh": 1935,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1965,
     "country": "United States",
     "pop": 198530465,
     "emp": 76513412,
     "avh": 1955,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1966,
     "country": "United States",
     "pop": 200836575,
     "emp": 78846908,
     "avh": 1963,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1967,
     "country": "United States",
     "pop": 203035404,
     "emp": 80663368,
     "avh": 1941,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1968,
     "country": "United States",
     "pop": 205072776,
     "emp": 82269714,
     "avh": 1937,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1969,
     "country": "United States",
     "pop": 207086667,
     "emp": 84233688,
     "avh": 1938,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1970,
     "country": "United States",
     "pop": 209513341,
     "emp": 84696891,
     "avh": 1893,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1971,
     "country": "United States",
     "pop": 211384068,
     "emp": 84701377,
     "avh": 1877,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1972,
     "country": "United States",
     "pop": 213269802,
     "emp": 86972824,
     "avh": 1874,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1973,
     "country": "United States",
     "pop": 215178797,
     "emp": 89760955,
     "avh": 1872,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1974,
     "country": "United States",
     "pop": 217114909,
     "emp": 91432579,
     "avh": 1844,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1975,
     "country": "United States",
     "pop": 219081251,
     "emp": 90273147,
     "avh": 1813,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1976,
     "country": "United States",
     "pop": 221086429,
     "emp": 93088272,
     "avh": 1809,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1977,
     "country": "United States",
     "pop": 223135663,
     "emp": 96261909,
     "avh": 1809,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1978,
     "country": "United States",
     "pop": 225223303,
     "emp": 100194435,
     "avh": 1815,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1979,
     "country": "United States",
     "pop": 227339318,
     "emp": 102810615,
     "avh": 1817,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1980,
     "country": "United States",
     "pop": 229476354,
     "emp": 103070930,
     "avh": 1801,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1981,
     "country": "United States",
     "pop": 231636058,
     "emp": 104216178,
     "avh": 1790,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1982,
     "country": "United States",
     "pop": 233821844,
     "emp": 103408576,
     "avh": 1770,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1983,
     "country": "United States",
     "pop": 236030238,
     "emp": 104779136,
     "avh": 1779,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1984,
     "country": "United States",
     "pop": 238256844,
     "emp": 109116043,
     "avh": 1795,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1985,
     "country": "United States",
     "pop": 240499825,
     "emp": 111384384,
     "avh": 1801,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1986,
     "country": "United States",
     "pop": 242763148,
     "emp": 113924011,
     "avh": 1780,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1987,
     "country": "United States",
     "pop": 245052789,
     "emp": 116886093,
     "avh": 1788,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1988,
     "country": "United States",
     "pop": 247372264,
     "emp": 119454811,
     "avh": 1798,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1989,
     "country": "United States",
     "pop": 249725805,
     "emp": 121828071,
     "avh": 1810,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1990,
     "country": "United States",
     "pop": 252120309,
     "emp": 123046020,
     "avh": 1795,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1991,
     "country": "United States",
     "pop": 254539370,
     "emp": 121567062,
     "avh": 1787,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1992,
     "country": "United States",
     "pop": 256990613,
     "emp": 121797004,
     "avh": 1774,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1993,
     "country": "United States",
     "pop": 259532129,
     "emp": 123120697,
     "avh": 1789,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1994,
     "country": "United States",
     "pop": 262241196,
     "emp": 125689979,
     "avh": 1807,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1995,
     "country": "United States",
     "pop": 265163745,
     "emp": 127462738,
     "avh": 1817,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1996,
     "country": "United States",
     "pop": 268335003,
     "emp": 129357666,
     "avh": 1823,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1997,
     "country": "United States",
     "pop": 271713635,
     "emp": 132362579,
     "avh": 1828,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1998,
     "country": "United States",
     "pop": 275175301,
     "emp": 134500900,
     "avh": 1839,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1999,
     "country": "United States",
     "pop": 278548150,
     "emp": 136756469,
     "avh": 1841,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2000,
     "country": "United States",
     "pop": 281710909,
     "emp": 138636108,
     "avh": 1844,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2001,
     "country": "United States",
     "pop": 284607993,
     "emp": 138646804,
     "avh": 1823,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2002,
     "country": "United States",
     "pop": 287279318,
     "emp": 138152084,
     "avh": 1806,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2003,
     "country": "United States",
     "pop": 289815562,
     "emp": 138690856,
     "avh": 1790,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2004,
     "country": "United States",
     "pop": 292354658,
     "emp": 140270187,
     "avh": 1789,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2005,
     "country": "United States",
     "pop": 294993511,
     "emp": 142493301,
     "avh": 1787,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2006,
     "country": "United States",
     "pop": 297758969,
     "emp": 145094146,
     "avh": 1787,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2007,
     "country": "United States",
     "pop": 300608429,
     "emp": 146395782,
     "avh": 1785,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2008,
     "country": "United States",
     "pop": 303486012,
     "emp": 146228500,
     "avh": 1765,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2009,
     "country": "United States",
     "pop": 306307567,
     "emp": 141220809,
     "avh": 1728,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2010,
     "country": "United States",
     "pop": 309011475,
     "emp": 140713806,
     "avh": 1735,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2011,
     "country": "United States",
     "pop": 311584047,
     "emp": 142147354,
     "avh": 1744,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2012,
     "country": "United States",
     "pop": 314043885,
     "emp": 144588485,
     "avh": 1746,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2013,
     "country": "United States",
     "pop": 316400538,
     "emp": 145978454,
     "avh": 1752,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2014,
     "country": "United States",
     "pop": 318673411,
     "emp": 148220642,
     "avh": 1758,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2015,
     "country": "United States",
     "pop": 320878310,
     "emp": 150248474,
     "avh": 1770,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2016,
     "country": "United States",
     "pop": 323015995,
     "emp": 152396957,
     "avh": 1766,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2017,
     "country": "United States",
     "pop": 325084756,
     "emp": 154672317,
     "avh": 1763,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2018,
     "country": "United States",
     "pop": 327096265,
     "emp": 156675903,
     "avh": 1774,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2019,
     "country": "United States",
     "pop": 329064917,
     "emp": 158299591,
     "avh": 1765,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 1950,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 5306238,
     "emp": 1688438,
     "avh": 2179,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1951,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 5526595,
     "emp": 1743905,
     "avh": 2162,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1952,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 5762349,
     "emp": 1801193,
     "avh": 2147,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1953,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 6010967,
     "emp": 1860363,
     "avh": 2131,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1954,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 6269915,
     "emp": 1921477,
     "avh": 2115,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1955,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 6536651,
     "emp": 1989846,
     "avh": 2100,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1956,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 6812903,
     "emp": 2055390,
     "avh": 2084,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1957,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 7100401,
     "emp": 2123093,
     "avh": 2069,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1958,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 7396601,
     "emp": 2193027,
     "avh": 2054,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1959,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 7698948,
     "emp": 2265264,
     "avh": 2038,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1960,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 8004881,
     "emp": 2346099,
     "avh": 2024,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1961,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 8313523,
     "emp": 2413656,
     "avh": 2016,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1962,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 8626600,
     "emp": 2483158,
     "avh": 2009,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1963,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 8945445,
     "emp": 2554661,
     "avh": 2001,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1964,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 9271401,
     "emp": 2628223,
     "avh": 1994,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1965,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 9605810,
     "emp": 2709408,
     "avh": 1987,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1966,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 9944206,
     "emp": 2779381,
     "avh": 1979,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1967,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 10285712,
     "emp": 2851162,
     "avh": 1972,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1968,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 10637067,
     "emp": 2924796,
     "avh": 1965,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1969,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 11005034,
     "emp": 3000332,
     "avh": 1958,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1970,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 11396393,
     "emp": 3082868,
     "avh": 1951,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1971,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 11745945,
     "emp": 3211404,
     "avh": 1955,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1972,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 12097694,
     "emp": 3313138,
     "avh": 1960,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1973,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 12453718,
     "emp": 3459871,
     "avh": 1965,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1974,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 12816955,
     "emp": 3612836,
     "avh": 1969,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1975,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 13189509,
     "emp": 3763199,
     "avh": 1974,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1976,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 13572208,
     "emp": 3703200,
     "avh": 1978,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1977,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 13964379,
     "emp": 3781100,
     "avh": 1983,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1978,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 14364727,
     "emp": 3994499,
     "avh": 1987,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1979,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 14771271,
     "emp": 4106199,
     "avh": 1992,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1980,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 15182611,
     "emp": 4635099,
     "avh": 1997,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1981,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 15597886,
     "emp": 4801199,
     "avh": 1985,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1982,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 16017573,
     "emp": 4927299,
     "avh": 1975,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1983,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 16443134,
     "emp": 4934000,
     "avh": 1964,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1984,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 16876703,
     "emp": 4938000,
     "avh": 1953,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1985,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 17319520,
     "emp": 5106100,
     "avh": 1942,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1986,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 17772001,
     "emp": 5395999,
     "avh": 1931,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1987,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 18232730,
     "emp": 5694200,
     "avh": 1921,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1988,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 18698847,
     "emp": 6035399,
     "avh": 1910,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1989,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 19166471,
     "emp": 6112599,
     "avh": 1900,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1990,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 19632665,
     "emp": 6404500,
     "avh": 1889,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1991,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 20096317,
     "emp": 6701200,
     "avh": 1878,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1992,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 20557683,
     "emp": 6986400,
     "avh": 1868,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1993,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 21016901,
     "emp": 7102699,
     "avh": 1888,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1994,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 21474549,
     "emp": 7265900,
     "avh": 1910,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1995,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 21931084,
     "emp": 7666999,
     "avh": 1915,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1996,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 22385650,
     "emp": 7819099,
     "avh": 1920,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1997,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 22837743,
     "emp": 8286800,
     "avh": 1925,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1998,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 23288564,
     "emp": 8710700,
     "avh": 1931,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1999,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 23739841,
     "emp": 8726200,
     "avh": 1886,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 2000,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 24192446,
     "emp": 8835200,
     "avh": 1898,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 2001,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 24646472,
     "emp": 9402700,
     "avh": 1869,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 2002,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 25100408,
     "emp": 9786199,
     "avh": 1829,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 2003,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 25551624,
     "emp": 9993800,
     "avh": 1801,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 2004,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 25996594,
     "emp": 10248700,
     "avh": 1896,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 2005,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 26432447,
     "emp": 10404700,
     "avh": 1922,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 2006,
     "country": "Venezuela (Bolivarian Republic of)",
     "pop": 26850194,
     "emp": 11016699,
     "avh": 1903,
     "left": 58,
     "top": 62.1
    },
    {
     "year": 1970,
     "country": "Viet Nam",
     "pop": 43404793,
     "emp": 15576066,
     "avh": 2986,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1971,
     "country": "Viet Nam",
     "pop": 44484035,
     "emp": 15749793,
     "avh": 2906,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1972,
     "country": "Viet Nam",
     "pop": 45548479,
     "emp": 15891457,
     "avh": 2849,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1973,
     "country": "Viet Nam",
     "pop": 46603525,
     "emp": 16570516,
     "avh": 2802,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1974,
     "country": "Viet Nam",
     "pop": 47657561,
     "emp": 17828090,
     "avh": 2766,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1975,
     "country": "Viet Nam",
     "pop": 48718189,
     "emp": 19061237,
     "avh": 2729,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1976,
     "country": "Viet Nam",
     "pop": 49785282,
     "emp": 19085187,
     "avh": 2682,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1977,
     "country": "Viet Nam",
     "pop": 50861162,
     "emp": 19736761,
     "avh": 2637,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1978,
     "country": "Viet Nam",
     "pop": 51959015,
     "emp": 20530321,
     "avh": 2597,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1979,
     "country": "Viet Nam",
     "pop": 53095408,
     "emp": 21210103,
     "avh": 2563,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1980,
     "country": "Viet Nam",
     "pop": 54281846,
     "emp": 22064880,
     "avh": 2534,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1981,
     "country": "Viet Nam",
     "pop": 55522803,
     "emp": 22693521,
     "avh": 2484,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1982,
     "country": "Viet Nam",
     "pop": 56814306,
     "emp": 23355026,
     "avh": 2446,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1983,
     "country": "Viet Nam",
     "pop": 58148384,
     "emp": 24056537,
     "avh": 2416,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1984,
     "country": "Viet Nam",
     "pop": 59512619,
     "emp": 24735403,
     "avh": 2394,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1985,
     "country": "Viet Nam",
     "pop": 60896721,
     "emp": 25498485,
     "avh": 2379,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1986,
     "country": "Viet Nam",
     "pop": 62293856,
     "emp": 26245998,
     "avh": 2370,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1987,
     "country": "Viet Nam",
     "pop": 63701972,
     "emp": 26985418,
     "avh": 2361,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1988,
     "country": "Viet Nam",
     "pop": 65120439,
     "emp": 27691127,
     "avh": 2357,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1989,
     "country": "Viet Nam",
     "pop": 66550234,
     "emp": 28339704,
     "avh": 2355,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1990,
     "country": "Viet Nam",
     "pop": 67988862,
     "emp": 29049198,
     "avh": 2349,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1991,
     "country": "Viet Nam",
     "pop": 69436954,
     "emp": 29709102,
     "avh": 2346,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1992,
     "country": "Viet Nam",
     "pop": 70883481,
     "emp": 30449100,
     "avh": 2344,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1993,
     "country": "Viet Nam",
     "pop": 72300308,
     "emp": 31187658,
     "avh": 2342,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1994,
     "country": "Viet Nam",
     "pop": 73651218,
     "emp": 31945220,
     "avh": 2339,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1995,
     "country": "Viet Nam",
     "pop": 74910461,
     "emp": 32718631,
     "avh": 2336,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1996,
     "country": "Viet Nam",
     "pop": 76068743,
     "emp": 33463584,
     "avh": 2331,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1997,
     "country": "Viet Nam",
     "pop": 77133214,
     "emp": 33953823,
     "avh": 2317,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1998,
     "country": "Viet Nam",
     "pop": 78115710,
     "emp": 35035453,
     "avh": 2362,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 1999,
     "country": "Viet Nam",
     "pop": 79035871,
     "emp": 35904514,
     "avh": 2362,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2000,
     "country": "Viet Nam",
     "pop": 79910412,
     "emp": 37051803,
     "avh": 2393,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2001,
     "country": "Viet Nam",
     "pop": 80742499,
     "emp": 38097496,
     "avh": 2246,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2002,
     "country": "Viet Nam",
     "pop": 81534407,
     "emp": 39486427,
     "avh": 2230,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2003,
     "country": "Viet Nam",
     "pop": 82301656,
     "emp": 40508422,
     "avh": 2254,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2004,
     "country": "Viet Nam",
     "pop": 83062821,
     "emp": 41639965,
     "avh": 2206,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2005,
     "country": "Viet Nam",
     "pop": 83832661,
     "emp": 42774898,
     "avh": 2191,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2006,
     "country": "Viet Nam",
     "pop": 84617540,
     "emp": 43964588,
     "avh": 2239,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2007,
     "country": "Viet Nam",
     "pop": 85419591,
     "emp": 45207901,
     "avh": 2241,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2008,
     "country": "Viet Nam",
     "pop": 86243413,
     "emp": 46460800,
     "avh": 2336,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2009,
     "country": "Viet Nam",
     "pop": 87092252,
     "emp": 47743698,
     "avh": 2405,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2010,
     "country": "Viet Nam",
     "pop": 87967651,
     "emp": 49048500,
     "avh": 2299,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2011,
     "country": "Viet Nam",
     "pop": 88871380,
     "emp": 50351898,
     "avh": 2331,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2012,
     "country": "Viet Nam",
     "pop": 89801926,
     "emp": 51422397,
     "avh": 2310,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2013,
     "country": "Viet Nam",
     "pop": 90752592,
     "emp": 52207801,
     "avh": 2267,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2014,
     "country": "Viet Nam",
     "pop": 91713848,
     "emp": 52744495,
     "avh": 2150,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2015,
     "country": "Viet Nam",
     "pop": 92677076,
     "emp": 52840003,
     "avh": 2191,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2016,
     "country": "Viet Nam",
     "pop": 93640422,
     "emp": 53302799,
     "avh": 2169,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2017,
     "country": "Viet Nam",
     "pop": 94600648,
     "emp": 53703395,
     "avh": 2131,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2018,
     "country": "Viet Nam",
     "pop": 95545962,
     "emp": 54069103,
     "avh": 2131,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2019,
     "country": "Viet Nam",
     "pop": 96462106,
     "emp": 50399562,
     "avh": 2131,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2001,
     "country": "South Africa",
     "pop": 45571274,
     "emp": 13373290,
     "avh": 2376,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2002,
     "country": "South Africa",
     "pop": 46150913,
     "emp": 14032674,
     "avh": 2382,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2003,
     "country": "South Africa",
     "pop": 46719196,
     "emp": 13728831,
     "avh": 2318,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2004,
     "country": "South Africa",
     "pop": 47291610,
     "emp": 13850427,
     "avh": 2342,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2005,
     "country": "South Africa",
     "pop": 47880601,
     "emp": 13727082,
     "avh": 2399,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2006,
     "country": "South Africa",
     "pop": 48489459,
     "emp": 15648827,
     "avh": 2315,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2007,
     "country": "South Africa",
     "pop": 49119759,
     "emp": 15848689,
     "avh": 2322,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2008,
     "country": "South Africa",
     "pop": 49779471,
     "emp": 16367197,
     "avh": 2284,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2009,
     "country": "South Africa",
     "pop": 50477011,
     "emp": 16039417,
     "avh": 2249,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2010,
     "country": "South Africa",
     "pop": 51216964,
     "emp": 15727519,
     "avh": 2235,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2011,
     "country": "South Africa",
     "pop": 52003755,
     "emp": 16447732,
     "avh": 2254,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2012,
     "country": "South Africa",
     "pop": 52832658,
     "emp": 16517950,
     "avh": 2224,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2013,
     "country": "South Africa",
     "pop": 53687121,
     "emp": 16875900,
     "avh": 2211,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2014,
     "country": "South Africa",
     "pop": 54544186,
     "emp": 16992683,
     "avh": 2209,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2016,
     "country": "South Africa",
     "pop": 56207646,
     "emp": 17984968,
     "avh": 2218,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2017,
     "country": "South Africa",
     "pop": 57009756,
     "emp": 18302843,
     "avh": 2197,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2018,
     "country": "South Africa",
     "pop": 57792518,
     "emp": 18686357,
     "avh": 2191,
     "left": 98.3,
     "top": 80.7
    },
    {
     "year": 2019,
     "country": "South Africa",
     "pop": 58558270,
     "emp": 18642709,
     "avh": 2191,
     "left": 98.3,
     "top": 80.7
    }
   ]

let oneYearData = [
    {
     "year": 2019,
     "country": "Argentina",
     "pop": 44780677,
     "emp": 20643215,
     "avh": 1609,
     "left": 59.1,
     "top": 84
    },
    {
     "year": 2019,
     "country": "Australia",
     "pop": 25203198,
     "emp": 12863174,
     "avh": 1726,
     "left": 150.8,
     "top": 78.6
    },
    {
     "year": 2019,
     "country": "Austria",
     "pop": 8955102,
     "emp": 4550281,
     "avh": 1611,
     "left": 94.8,
     "top": 41.1
    },
    {
     "year": 2019,
     "country": "Belgium",
     "pop": 11539328,
     "emp": 4921936,
     "avh": 1586,
     "left": 90.3,
     "top": 39.4
    },
    {
     "year": 2019,
     "country": "Bangladesh",
     "pop": 163046161,
     "emp": 65534065,
     "avh": 2418,
     "left": 130.4,
     "top": 53.9
    },
    {
     "year": 2019,
     "country": "Bulgaria",
     "pop": 7000119,
     "emp": 3420418,
     "avh": 1645,
     "left": 99.9,
     "top": 43.9
    },
    {
     "year": 2019,
     "country": "Brazil",
     "pop": 211049527,
     "emp": 93956825,
     "avh": 1707,
     "left": 64.6,
     "top": 70.9
    },
    {
     "year": 2019,
     "country": "Canada",
     "pop": 37411047,
     "emp": 19298662,
     "avh": 1689,
     "left": 37.8,
     "top": 34.2
    },
    {
     "year": 2019,
     "country": "Switzerland",
     "pop": 8591365,
     "emp": 5011204,
     "avh": 1556,
     "left": 91.8,
     "top": 41.6
    },
    {
     "year": 2019,
     "country": "Chile",
     "pop": 18952038,
     "emp": 8100071,
     "avh": 1914,
     "left": 55.4,
     "top": 85.2
    },
    {
     "year": 2019,
     "country": "China",
     "pop": 1433783686,
     "emp": 798807739,
     "avh": 2168,
     "left": 136,
     "top": 48.3
    },
    {
     "year": 2019,
     "country": "Colombia",
     "pop": 50339443,
     "emp": 21199607,
     "avh": 1968,
     "left": 54.7,
     "top": 64.6
    },
    {
     "year": 2019,
     "country": "Costa Rica",
     "pop": 5047561,
     "emp": 2256355,
     "avh": 2069,
     "left": 49.6,
     "top": 61.3
    },
    {
     "year": 2019,
     "country": "Cyprus",
     "pop": 868495,
     "emp": 366567,
     "avh": 1805,
     "left": 103.3,
     "top": 48.3
    },
    {
     "year": 2019,
     "country": "Czech Republic",
     "pop": 10689209,
     "emp": 5481432,
     "avh": 1787,
     "left": 95.5,
     "top": 39.8
    },
    {
     "year": 2019,
     "country": "Germany",
     "pop": 83517045,
     "emp": 44795196,
     "avh": 1386,
     "left": 92.7,
     "top": 38.6
    },
    {
     "year": 2019,
     "country": "Denmark",
     "pop": 5771876,
     "emp": 2971836,
     "avh": 1380,
     "left": 92.3,
     "top": 35.5
    },
    {
     "year": 2019,
     "country": "Dominican Republic",
     "pop": 10738958,
     "emp": 5126679,
     "avh": 2142,
     "left": 55.7,
     "top": 56.5
    },
    {
     "year": 2019,
     "country": "Ecuador",
     "pop": 17373662,
     "emp": 8246670,
     "avh": 1551,
     "left": 52.4,
     "top": 67.1
    },
    {
     "year": 2019,
     "country": "Spain",
     "pop": 46736776,
     "emp": 19872013,
     "avh": 1685,
     "left": 86,
     "top": 45.6
    },
    {
     "year": 2019,
     "country": "Estonia",
     "pop": 1325648,
     "emp": 672975,
     "avh": 1797,
     "left": 100,
     "top": 34
    },
    {
     "year": 2019,
     "country": "Finland",
     "pop": 5532156,
     "emp": 2673705,
     "avh": 1590,
     "left": 100,
     "top": 31
    },
    {
     "year": 2019,
     "country": "France",
     "pop": 67351247,
     "emp": 28532564,
     "avh": 1504,
     "left": 89.1,
     "top": 41.7
    },
    {
     "year": 2019,
     "country": "United Kingdom",
     "pop": 67530172,
     "emp": 32982498,
     "avh": 1667,
     "left": 40.6,
     "top": 46.7
    },
    {
     "year": 2019,
     "country": "Greece",
     "pop": 10473455,
     "emp": 4235072,
     "avh": 2036,
     "left": 98.2,
     "top": 45.9
    },
    {
     "year": 2019,
     "country": "China, Hong Kong SAR",
     "pop": 7436154,
     "emp": 3863810,
     "avh": 2147,
     "left": 141.2,
     "top": 54.3
    },
    {
     "year": 2019,
     "country": "Croatia",
     "pop": 4130304,
     "emp": 1817624,
     "avh": 1831,
     "left": 96.2,
     "top": 42.4
    },
    {
     "year": 2019,
     "country": "Hungary",
     "pop": 9684679,
     "emp": 4711576,
     "avh": 1725,
     "left": 96.6,
     "top": 41.6
    },
    {
     "year": 2019,
     "country": "Indonesia",
     "pop": 270625568,
     "emp": 131170684,
     "avh": 2019,
     "left": 141.3,
     "top": 66.4
    },
    {
     "year": 2019,
     "country": "India",
     "pop": 1366417754,
     "emp": 497615722,
     "avh": 2122,
     "left": 125.3,
     "top": 55.2
    },
    {
     "year": 2019,
     "country": "Ireland",
     "pop": 4882495,
     "emp": 2260447,
     "avh": 1771,
     "left": 84,
     "top": 37.4
    },
    {
     "year": 2019,
     "country": "Iceland",
     "pop": 339031,
     "emp": 192338,
     "avh": 1454,
     "left": 81.3,
     "top": 28.2
    },
    {
     "year": 2019,
     "country": "Israel",
     "pop": 8519377,
     "emp": 4228710,
     "avh": 1900,
     "left": 104.1,
     "top": 50.2
    },
    {
     "year": 2019,
     "country": "Italy",
     "pop": 60550075,
     "emp": 25596328,
     "avh": 1717,
     "left": 93.2,
     "top": 43.1
    },
    {
     "year": 2019,
     "country": "Japan",
     "pop": 126860301,
     "emp": 69976692,
     "avh": 1691,
     "left": 153.2,
     "top": 47.8
    },
    {
     "year": 2019,
     "country": "Cambodia",
     "pop": 16486542,
     "emp": 8731463,
     "avh": 2474,
     "left": 137.2,
     "top": 59.5
    },
    {
     "year": 2019,
     "country": "Republic of Korea",
     "pop": 51225308,
     "emp": 26798534,
     "avh": 1979,
     "left": 148.2,
     "top": 47.8
    },
    {
     "year": 2019,
     "country": "Sri Lanka",
     "pop": 21323733,
     "emp": 8180496,
     "avh": 1922,
     "left": 126.1,
     "top": 62.1
    },
    {
     "year": 2019,
     "country": "Lithuania",
     "pop": 2759627,
     "emp": 1379528,
     "avh": 1886,
     "left": 99,
     "top": 35.8
    },
    {
     "year": 2019,
     "country": "Luxembourg",
     "pop": 615729,
     "emp": 460662,
     "avh": 1505,
     "left": 90.8,
     "top": 39.9
    },
    {
     "year": 2019,
     "country": "Latvia",
     "pop": 1906743,
     "emp": 896588,
     "avh": 1864,
     "left": 100.4,
     "top": 35.3
    },
    {
     "year": 2019,
     "country": "Mexico",
     "pop": 127575529,
     "emp": 54993595,
     "avh": 2137,
     "left": 41.3,
     "top": 54.6
    },
    {
     "year": 2019,
     "country": "Malta",
     "pop": 440372,
     "emp": 220190,
     "avh": 1915,
     "left": 94.6,
     "top": 47.6
    },
    {
     "year": 2019,
     "country": "Myanmar",
     "pop": 54045420,
     "emp": 22109308,
     "avh": 2447,
     "left": 133,
     "top": 55.3
    },
    {
     "year": 2019,
     "country": "Malaysia",
     "pop": 31949777,
     "emp": 15118323,
     "avh": 2197,
     "left": 141,
     "top": 64.8
    },
    {
     "year": 2019,
     "country": "Netherlands",
     "pop": 17097130,
     "emp": 9456908,
     "avh": 1439,
     "left": 90.5,
     "top": 38.4
    },
    {
     "year": 2019,
     "country": "Norway",
     "pop": 5378857,
     "emp": 2853661,
     "avh": 1384,
     "left": 92.1,
     "top": 32.1
    },
    {
     "year": 2019,
     "country": "New Zealand",
     "pop": 4783063,
     "emp": 2506080,
     "avh": 1778,
     "left": 171.1,
     "top": 85.5
    },
    {
     "year": 2019,
     "country": "Pakistan",
     "pop": 216565318,
     "emp": 63085052,
     "avh": 1966,
     "left": 119.3,
     "top": 52.2
    },
    {
     "year": 2019,
     "country": "Peru",
     "pop": 32510453,
     "emp": 16890403,
     "avh": 2139,
     "left": 53.8,
     "top": 70.6
    },
    {
     "year": 2019,
     "country": "Philippines",
     "pop": 108116615,
     "emp": 42424800,
     "avh": 2168,
     "left": 146.7,
     "top": 62.1
    },
    {
     "year": 2019,
     "country": "Poland",
     "pop": 37887768,
     "emp": 16159107,
     "avh": 2022,
     "left": 96.6,
     "top": 37.8
    },
    {
     "year": 2019,
     "country": "Portugal",
     "pop": 10226187,
     "emp": 4961589,
     "avh": 1864,
     "left": 84.1,
     "top": 45.2
    },
    {
     "year": 2019,
     "country": "Romania",
     "pop": 19364557,
     "emp": 8680299,
     "avh": 1791,
     "left": 99.5,
     "top": 42
    },
    {
     "year": 2019,
     "country": "Russian Federation",
     "pop": 145872256,
     "emp": 71670639,
     "avh": 1965,
     "left": 135.5,
     "top": 30.6
    },
    {
     "year": 2019,
     "country": "Singapore",
     "pop": 5804337,
     "emp": 3759603,
     "avh": 2330,
     "left": 136.5,
     "top": 65.2
    },
    {
     "year": 2019,
     "country": "Slovakia",
     "pop": 5457013,
     "emp": 2468860,
     "avh": 1694,
     "left": 97,
     "top": 40.3
    },
    {
     "year": 2019,
     "country": "Slovenia",
     "pop": 2078654,
     "emp": 1046805,
     "avh": 1592,
     "left": 94.7,
     "top": 42.2
    },
    {
     "year": 2019,
     "country": "Sweden",
     "pop": 10036379,
     "emp": 5002136,
     "avh": 1605,
     "left": 96.1,
     "top": 29.4
    },
    {
     "year": 2019,
     "country": "Thailand",
     "pop": 69625582,
     "emp": 37540958,
     "avh": 2092,
     "left": 135.5,
     "top": 58.3
    },
    {
     "year": 2019,
     "country": "Turkey",
     "pop": 83429615,
     "emp": 28087333,
     "avh": 1832,
     "left": 105.8,
     "top": 46
    },
    {
     "year": 2019,
     "country": "Taiwan",
     "pop": 23596027,
     "emp": 11500000,
     "avh": 2085,
     "left": 144.8,
     "top": 54.2
    },
    {
     "year": 2019,
     "country": "Uruguay",
     "pop": 3461734,
     "emp": 1635378,
     "avh": 1532,
     "left": 63.2,
     "top": 82
    },
    {
     "year": 2019,
     "country": "United States",
     "pop": 329064917,
     "emp": 158299591,
     "avh": 1765,
     "left": 40.4,
     "top": 46.6
    },
    {
     "year": 2019,
     "country": "Viet Nam",
     "pop": 96462106,
     "emp": 50399562,
     "avh": 2131,
     "left": 137,
     "top": 55.2
    },
    {
     "year": 2019,
     "country": "South Africa",
     "pop": 58558270,
     "emp": 18642709,
     "avh": 2191,
     "left": 98.3,
     "top": 80.7
    }
   ]

function giveInfo(item){
    const infobox = document.createElement("div");
    infobox.style.padding = "1.5vh 0.5vh 1vh 1vh";
    infobox.style.position = "absolute";
    infobox.style.width = "auto";
    infobox.style.height = "auto";
    infobox.style.backgroundColor = "white";
    infobox.style.top = item.target.style.top;
    infobox.style.left = item.target.style.left;
    infobox.style.fontSize = "0.5vh";
    infobox.style.borderRadius = "20px";
    infobox.className = "infor"
    const info0 = document.createElement("div");
    info0.style.textAlign = "center";
    info0.innerText = item.target.country;
    const info1 = document.createElement("div");
    info1.innerText = `인구:${item.target.pop}`;
    const info2 = document.createElement("div");
    info2.innerText = `종사자:${item.target.emp}`;
    const info3 = document.createElement("div");
    info3.innerText = `근로시간:${item.target.avh}`;
    infobox.appendChild(info0);
    infobox.appendChild(info1);
    infobox.appendChild(info2);
    infobox.appendChild(info3);
    document.body.appendChild(infobox);
    
}

function updateLoationDot(item){
    const LocationDot = document.createElement("i");
    LocationDot.className = "fa-solid fa-location-dot";
    LocationDot.country = item.country;
    LocationDot.pop = item.pop;
    LocationDot.emp = item.emp;
    LocationDot.avh = item.avh;
    LocationDot.style.position = "absolute";
    LocationDot.style.top = `${item.top}vh`;
    LocationDot.style.left = `${item.left}vh`;
    LocationDot.style.color = "#f92f2f";
    LocationDot.addEventListener('click', giveInfo);
    document.body.appendChild(LocationDot);
}

function eraseLocationDot(){
    const dotLength = document.body.querySelectorAll("i.fa-location-dot");
    for (let i=0; i<dotLength.length; i++){
        document.body.removeChild(dotLength[i]);
    }
}

function changeYearData(year){
    oneYearData = everyYearData.filter(item => item.year == year);
    oneYearData.forEach(updateLoationDot);
}

function changeyear(){
    year = prompt("원하시는 년도를 입력하세요(1950 ~ 2019년)");
    if (parseInt(year)>=1950 && parseInt(year)<=2019 && year%1===0)
    {
        localStorage.setItem("year",year);
        eraseLocationDot();
        eraseMessage();
        changeYearData(year);
        title.innerHTML = `${year}년의 국가별 인구, 직업 종사자, 1인당 연간 노동시간`;
    }
    else if(year == "캬루"){
        eraseLocationDot();
        eraseMessage();
        localStorage.setItem("year",year);
        karylfire();
    }

    else{
        alert("잘못된 입력입니다.");
    }

}
function eraseMessage(){
    const MessageLength = document.body.querySelectorAll(".infor");
    for (let i=0; i<MessageLength.length; i++){
        document.body.removeChild(MessageLength[i]);
    }
}

const hidden = document.querySelector(".hidden");

function karylfire(){
    hidden.classList.remove("hidden");
    all.style.display = "none";
}

let year = localStorage.getItem("year");
if (year == "캬루"){
    karylfire();
}
else if (parseInt(year) >= 1950 && parseInt(year) <=2019 && parseInt(year)%1===0){
    changeYearData(parseInt(year));
    title.innerText = `${parseInt(year)}년의 국가별 인구, 직업 종사자, 1인당 연간 노동시간`;
    calender.addEventListener("click",changeyear);
    eraseInfo.addEventListener("click", eraseMessage)
}
else {
changeYearData(2019);
calender.addEventListener("click",changeyear);
eraseInfo.addEventListener("click", eraseMessage);
}