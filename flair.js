/* FLAIR MASTER CONFIG */ 
flair.load__by_id = function() {
    for (var key in flair.names) {
        if (flair.names.hasOwnProperty(key)) {
            var data = key.split(' ');
            
            var orig_id = data[2];
            
            if (orig_id.substring(0, 'a'.length) === 'a') {
                orig_id = orig_id.substring(1);
            }
            if (orig_id.substring(orig_id.length - 'm'.length) === 'm') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'o'.length) === 'o') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'x'.length) === 'x') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'y'.length) === 'y') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 1).match(/[a-z]/i) &&
                orig_id.substring(0, orig_id.length - 1).match(/^\d+$/)) {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            
            flair.by_id[data[2]] = {
                key: key,
                spritepos: data[0],
                sheet: data[1],
                unit_id: data[2],
                orig_id: orig_id,
                unit_name: flair.names[key],
                flair_class: ' flair-'+data[0] + ' flair-'+data[1] + ' flair-'+data[2]
            }
        }
    }
}
flair.by_id = {}
flair.names = {
/* [RS - LEGACY] */
    "1 rslegacy 750": "Dragon God Granados",
	"2 rslegacy 751": "Aqua Goddess Abel",
	"3 rslegacy 752": "Elf Queen Arbonella",
	"4 rslegacy 753": "Bolt Phoenix Ardas",
	"5 rslegacy 754": "Sky Goddess Raquel",
	"6 rslegacy 755": "Dark Lord Zaboeth",
/* [RS - 7 STAR] */
    "1 rs7star 852": "Brimstone Emperor Alpha",
/* [RS - OMNI EVO] */
    "1 rsoe 1309": "Fabled Emperor Kulyuk",
/* [NON-RS UNITS] */
    "1 freeall 1302": "Ignis Halcyon Vargas",
/* [GLOBAL] */
    "1 gl 8033": "Titan Wing Blaze",
/* [JP + EU] */
    "27 jpeu 1195": "Haruto",
/* [ALT] */
    "1 alt 880": "Angelic Blades Sefia (Alt)",
	"2 alt 1002": "Wildfire Lotus Michele (Alt)",
	"3 alt 8132": "Deimos Thunderborn (Alt)",
};