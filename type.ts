export interface Kata {
    id: string // generate it from the title in japonese (lowercase, replace all spaces by dash)
    name: string, // title of the kata, at the top of the first page, capital letters, underlined
    description: string, // text underneath the title on the book. Please rephrase it from the original text and translate it to english
    // There are represented on the page by photographies and a text attached to each of them (using some kind of index to link both: yoi, 1, 1-A, for instances)
    // I'm only interested in the first one (labelled Yoi) and all the following ones that use a number as index and the last one called Yame
    // (so for instanced 1 and not 1-A, 2 and not 2-A)
    techniques: Motion[] 
}

// Here is how to fill one Motion. Each of them has a title in bold next to the index. It's from this title that we extract most of the information
// The title is usually structured this way: Index) Position / Side Target Name (yoi and yame are exceptions to this structure)
export interface Motion {
    position: Position // extract position from the title (as indicated previously) and match it to one of the Position enum (remove dachi from the end, it means `position` in japonese and turn it to lowercase letters). If you cannot find a match, prompt me, maybe the enum needs to be enriched. For Yoi and Yame, it's almost always hachiji (unless told differently)
    techniques: Technique[] // most of the time there is only one, on rare occasion they are two, which is why it's an array
    kiai?: boolean // if underneath the picture of this motion there is a bang operator, then true, undefined otherwise.
    // Describe the transition between the previous and current stance.
    // Include the pivot foot whenever the practitioner turns:
    // "around front foot" or "around rear foot".
    // Front and rear refer to the feet in the PREVIOUS stance.
    //
    // Read the movement description, including intermediate steps such as
    // 10-A, even though those steps are not included as separate motions.
    //
    // Express the change in facing direction using the smallest angle
    // between the previous and current orientations.
    // For example, N → E and S → W are both 90-degree right turns.
    // Specify the pivot foot separately; do not copy a larger rotation
    // angle from the book without reconciling it with this convention.
    //
    // Examples:
    // - "rotate 90 degrees right around front foot"
    // - "rotate 180 degrees right around rear foot"
    //
    // If the pivot foot or the intended rotation is unclear, ask me.
    note?: string 
    index?: string // the index of the motion in the kata, use the one from the book but concatenate numbers and letters (remove the dash) and make the letter lowercase. yoi and yame have no index
    hasBackPicture?: boolean // true if a back picture was extracted from the technique too
    hasSidePicture?: boolean // true if a side picture was extracted from the technique too
    // The orientation is the direction the practitioner faces in a fixed
    // coordinate system for the kata, not the camera angle or the rotation
    // of the head, shoulders or hips.
    //
    // Use the initial facing direction in Yoi as north:
    // - N: initial facing direction
    // - E: 90 degrees clockwise from north
    // - S: opposite the initial facing direction
    // - W: 90 degrees counterclockwise from north
    // - NE: halfway between north and east
    // - NW: halfway between north and west
    // - SE: halfway between south and east
    // - SW: halfway between south and west
    //
    // Determine the orientation primarily from the turns and movements
    // described in the book, using the kata's movement diagram if available.
    // Use photographs as supporting evidence: a three-quarter camera view
    // does not necessarily indicate a diagonal orientation.
    //
    // Yoi and Yame have no orientation.
    // If the available information does not establish the direction clearly,
    // ask me rather than guessing.
    orientation?: Orientation
}

export enum Position {
    HACHIJI = 'hachiji',
    ZENKUTSU = 'zenkutsu',
    KOKUTSU = 'kokutsu',
    KIBA = 'kiba',
    FUDO = 'fudo',
    HANGETSU = 'hangetsu',
    NEKO = 'neko',
    MUSTSUBI = 'mutsubi',
    RENOJI = 'renoji',
    TSURU_ASHI = 'tsuru-ashi',
    HEISOKU = 'heisoku'
}

export interface Technique {
    name: string // extract name from the title (as indicated previously) make it lower case, yoi for yoi, yame for yame
    target?: Target // extract target from the title (as indicated previously) and match it to one of the Target enum (sometimes there is no target, if you cannot find a match, prompt me to ask me if it should remain undefined, it's always undefined for Yoi and Yame)
    type?: Type // technique suffixed by uke are blocks, techniques suffixed by kamae are kamae (guard), others are usually hatemi. Gedan barai is a block though. Yoi and Yame are always kamae
    side?: Side, // extract side from the title (as indicated previously) and match it to one of the Side enum. Undefined for Yoi and Yame.
}

export enum Target {
    JODAN = 'jodan', 
    CHUDAN = 'chudan',
    GEDAN = 'gedan'
}

export enum Type {
    HATEMI = 'hatemi',
    BLOCK = 'block',
    KAMAE = 'kamae'
}

export enum Side { 
    MIGI = 'migi',
    HIDARI = 'hidari'
}

export enum Orientation { 
    N = 'north',
    S = 'south',
    E = 'est',
    W = 'west',
    NW = 'north-west',
    NE = 'north-east',
    SW = 'south-west',
    SE = 'south-east'
}