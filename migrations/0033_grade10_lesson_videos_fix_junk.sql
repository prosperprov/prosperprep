-- Grade 10 video remap: replace junk/non-official matches with verified Khan Academy YouTube IDs.
-- Also documents that 0032 coverage stands; this pass corrects weak titles.
-- Do NOT run db:setup.

UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=7Uos1ED3KHI' WHERE "id" = 'ppg10m1d932f515f8a9ef397d6' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=CxEFOozrMSE' WHERE "id" = 'ppg10me96d06831ff7089f1c5d' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=6q8mk7z72AU' WHERE "id" = 'ppg10m870e6bb26af6373dbd23' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=TeiuG81mbII' WHERE "id" = 'ppg10e0032f7b6066bb69c65e1' AND "courseId" = 'cmuh9bxyp0875edanfk14k3jd';
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=h8EYEJ32oQ8' WHERE "id" = 'ppg10mdd6ba9dcfe25d64939ca' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=0lY4PcCYoyE' WHERE "id" = 'ppg10ma196f11330a06a815805' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=8YW6k0rp3Kg' WHERE "id" = 'ppg10e91e20f9ec0d9ac4706a7' AND "courseId" = 'cmuh9bxyp0875edanfk14k3jd';
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=gUW2jit3uvo' WHERE "id" = 'ppg10e803f021770865e1697f7' AND "courseId" = 'cmuh9bxyp0875edanfk14k3jd';
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=JC24Qcpyn9E' WHERE "id" = 'ppg10e4fbaaa083a702a6a2f9a' AND "courseId" = 'cmuh9bxyp0875edanfk14k3jd';
