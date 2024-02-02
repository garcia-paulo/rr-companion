export interface Pokedex {
    species: { [key: string]: Species };
    moves: { [key: string]: MoveValue };
    abilities: { [key: string]: Ability };
    locations: Locations;
    eggGroups: { [key: string]: Ability };
    types: { [key: string]: TypeValue };
    splits: Splits;
    evolutionItems: { [key: string]: Ability };
    heldItems: { [key: string]: Ability };
    sprites: { [key: string]: string };
    flags: Flags;
    caps: { [key: string]: CapValue };
    evolutions: Evolutions;
    regions: { [key: string]: Region };
    stats: PokedexStats;
}

export interface Ability {
    ID: number;
    key: string;
    name: string;
    description?: string;
    sprite?: string;
}

export interface CapValue {
    name: string;
    ID: number;
    normal: number;
    hardcore: number;
    locations: { [key: string]: string[] };
    items?: string[];
    normalItems?: string[];
    hardcoreItems?: string[];
}

export interface Evolutions {
    MOVE: string;
    LEVEL_ATK_GT_DEF: string;
    NATURE_TOXTRICITY: string;
    MALE_LEVEL: string;
    FRIENDSHIP_DAY: string;
    MOVE_TYPE: string;
    OTHER_PARTY_MON: string;
    LEVEL_ATK_LT_DEF: string;
    LEVEL_NIGHT: string;
    NATURE_LOWKEY: string;
    LEVEL_ATK_EQ_DEF: string;
    LEVEL: string;
    LEVEL_NINJASK: string;
    FEMALE_LEVEL: string;
    LEVEL_CASCOON: string;
    RAINY_FOGGY_OW: string;
    FRIENDSHIP_NIGHT: string;
    LEVEL_DAY: string;
    FRIENDSHIP: string;
    MEGA: string;
    LEVEL_SPECIFIC_TIME_RANGE: string;
    TYPE_IN_PARTY: string;
    LEVEL_SILCOON: string;
    LEVEL_SHEDINJA: string;
    ITEM: string;
}

export interface Flags {
    GravityBannedMoves: AlwaysHitWhenMinimizedMoves;
    MeFirstBannedMoves: AlwaysHitWhenMinimizedMoves;
    CopycatBannedMoves: AlwaysHitWhenMinimizedMoves;
    InstructBannedMoves: AlwaysHitWhenMinimizedMoves;
    MetronomeBannedMoves: AlwaysHitWhenMinimizedMoves;
    ForbiddenSpellMoves: AlwaysCriticalMoves;
    RandomizerBannedMoves: AlwaysHitWhenMinimizedMoves;
    HardcoreBannedMoves: AlwaysCriticalMoves;
    HardcoreHalfBannedMoves: AlwaysCriticalMoves;
    HardcoreTrashBannedMoves: AlwaysCriticalMoves;
    AssistBannedMoves: AlwaysHitWhenMinimizedMoves;
    MimicBannedMoves: AlwaysHitWhenMinimizedMoves;
    SleepTalkBannedMoves: AlwaysCriticalMoves;
    ParentalBondBannedMoves: AlwaysCriticalMoves;
    SkyBattleBannedMoves: AlwaysHitWhenMinimizedMoves;
    RaidBattleBannedMoves: AlwaysCriticalMoves;
    RaidBattleBannedRaidMonMoves: AlwaysCriticalMoves;
    DynamaxBannedMoves: AlwaysCriticalMoves;
    SheerForceBoostedMoves: AlwaysHitWhenMinimizedMoves;
    RecklessBoostedMoves: AlwaysCriticalMoves;
    PunchingMoves: AlwaysCriticalMoves;
    KickingMoves: AlwaysCriticalMoves;
    SwordMoves: AlwaysCriticalMoves;
    BoneMoves: AlwaysCriticalMoves;
    PulseAuraMoves: AlwaysCriticalMoves;
    BitingMoves: AlwaysCriticalMoves;
    BallBombMoves: AlwaysHitWhenMinimizedMoves;
    WindMoves: AlwaysCriticalMoves;
    DanceMoves: AlwaysCriticalMoves;
    PowderMoves: AlwaysCriticalMoves;
    SoundMoves: AlwaysHitWhenMinimizedMoves;
    SubstituteBypassMoves: AlwaysHitWhenMinimizedMoves;
    TypeChangeExceptionMoves: AlwaysHitWhenMinimizedMoves;
    IgnoreStatChangesMoves: AlwaysCriticalMoves;
    HighCriticalChanceMoves: AlwaysCriticalMoves;
    AlwaysCriticalMoves: AlwaysCriticalMoves;
    MovesThatCallOtherMoves: AlwaysCriticalMoves;
    MovesThatRequireRecharging: AlwaysCriticalMoves;
    AlwaysHitWhenMinimizedMoves: AlwaysHitWhenMinimizedMoves;
    MoldBreakerMoves: AlwaysHitWhenMinimizedMoves;
    FlinchChanceMoves: AlwaysCriticalMoves;
    MovesCanUnfreezeAttacker: AlwaysCriticalMoves;
    MovesCanUnfreezeTarget: AlwaysCriticalMoves;
    MovesThatChangePhysicality: AlwaysHitWhenMinimizedMoves;
    TwoToFiveStrikesMoves: AlwaysHitWhenMinimizedMoves;
    TwoStrikesMoves: AlwaysCriticalMoves;
    Percent25RecoilMoves: AlwaysCriticalMoves;
    Percent33RecoilMoves: AlwaysCriticalMoves;
    Percent50RecoilMoves: AlwaysCriticalMoves;
    Percent66RecoilMoves: AlwaysCriticalMoves;
    Percent75RecoilMoves: AlwaysCriticalMoves;
    Percent100RecoilMoves: AlwaysCriticalMoves;
    IgnoreInAirMoves: AlwaysCriticalMoves;
    IgnoreUndergoundMoves: AlwaysCriticalMoves;
    IgnoreUnderwaterMoves: AlwaysCriticalMoves;
    AlwaysHitInRainMoves: AlwaysCriticalMoves;
    SpecialAttackPhysicalDamageMoves: AlwaysCriticalMoves;
    SpecialWholeFieldMoves: AlwaysCriticalMoves;
    AromaVeilProtectedMoves: AlwaysCriticalMoves;
    MovesThatLiftProtectTable: AlwaysCriticalMoves;
    MovesWithQuietBGM: AlwaysCriticalMoves;
    DoubleDamageOnStatus: AlwaysCriticalMoves;
    HalfMaxHealthRecoilMoves: AlwaysCriticalMoves;
}

export interface AlwaysCriticalMoves {
    key: string;
    moves: string[];
}

export interface AlwaysHitWhenMinimizedMoves {
    key: string;
    moves: Array<number | string>;
}

export interface Locations {
    PalletTown: BerryForest;
    Route1: CeruleanCave2F;
    ViridianCity: BerryForest;
    Route22: BerryForest;
    Route2: Route;
    ViridianForest: PowerPlant;
    ViridianForest2: CeruleanCave2F;
    DiglettsCaveNorthEntrance: CeruleanCave2F;
    PewterCity: CeruleanCave2F;
    Route3: CeruleanCave2F;
    MtMoon1F: CeruleanCave2F;
    MtMoonB1F: CeruleanCave2F;
    MtMoonB2F: CeruleanCave2F;
    Route4: CeruleanCave2F;
    CeruleanCity: BerryForest;
    Route24: BerryForest;
    Route25: BerryForest;
    Route5: Route;
    Route6: BerryForest;
    VermilionCity: BerryForest;
    Route11: BerryForest;
    DiglettsCaveB1F: CeruleanCave2F;
    SSAnne: BerryForest;
    Route9: CeruleanCave2F;
    Route10: BerryForest;
    RockTunnel1F: CeruleanCave2F;
    RockTunnelB1F: CeruleanCave2F;
    Route7: CeruleanCave2F;
    Route8: CeruleanCave2F;
    PokemonTower3F: CeruleanCave2F;
    PokemonTower4F: CeruleanCave2F;
    PokemonTower5F: CeruleanCave2F;
    PokemonTower6F: CeruleanCave2F;
    PokemonTower7F: CeruleanCave2F;
    Route16: Route;
    Route17: CeruleanCave2F;
    Route18: CeruleanCave2F;
    Route12: BerryForest;
    CeladonCity: CeladonCity;
    Route13: BerryForest;
    Route14: CeruleanCave2F;
    Route15: CeruleanCave2F;
    SafariZoneCenter: BerryForest;
    SafariZoneEast: BerryForest;
    SafariZoneNorth: BerryForest;
    SafariZoneWest: BerryForest;
    Route19: BerryForest;
    Route20: BerryForest;
    Route21A: BerryForest;
    Route21B: BerryForest;
    SeafoamIslands1F: CeruleanCave2F;
    SeafoamIslandsB1F: CeruleanCave2F;
    SeafoamIslandsB2F: BerryForest;
    SeafoamIslandsB3F: BerryForest;
    CinnabarIsland: BerryForest;
    PokemonMansion1F: CeruleanCave2F;
    PokemonMansion2F: CeruleanCave2F;
    PokemonMansion3F: CeruleanCave2F;
    PokemonMansionB1F: CeruleanCave2F;
    PowerPlant: PowerPlant;
    CeruleanCave1F: BerryForest;
    CeruleanCave2F: CeruleanCave2F;
    CeruleanCaveB1F: BerryForest;
    Route23: BerryForest;
    VictoryRoad1F: CeruleanCave2F;
    VictoryRoad2F: CeruleanCave2F;
    VictoryRoad3F: CeruleanCave2F;
    KindleRoad: BerryForest;
    TreasureBeach: BerryForest;
    MtEmberExterior: CeruleanCave2F;
    MtEmber1F: MTEmber1F;
    RockTunnel: RockTunnel;
    CapeBrink: CapeBrink;
    BondBridge: BerryForest;
    BerryForest: BerryForest;
    PkmnTower: PkmnTower;
    ThreeIslandPort: ThreeIslandPort;
    MtMoon: MTMoon;
    DiglettsCave: DiglettsCave;
    PokemonMansion: PokemonMansion;
    Seafoam: CeruleanCave;
    CeruleanCave: CeruleanCave;
    VictoryRoad: PokemonMansion;
    SaffronCity: SaffronCity;
    SilphCo: SaffronCity;
    OneIsland: OneIsland;
}

export interface BerryForest {
    name: string;
    LandMonsDay?: The1_Star;
    LandMonsNight?: The1_Star;
    SurfMons: The1_Star;
    OldRod: The1_Star;
    GoodRod: The1_Star;
    SuperRod: The1_Star;
    Gift?: The1_Star;
    Trade?: The1_Star;
    LandMons?: The1_Star;
    Starter?: The1_Star;
    "2Star"?: The1_Star;
    "4Star"?: The1_Star;
    Static?: The1_Star;
    "3Star"?: The1_Star;
    "5Star"?: The1_Star;
    Roaming?: The1_Star;
    "1Star"?: The1_Star;
    FossilVendor?: The1_Star;
}

export interface The1_Star {
    name: string;
    encounters: string[];
}

export interface CapeBrink {
    name: string;
    Night: The1_Star;
    Day: The1_Star;
    SurfMons: The1_Star;
    OldRod: The1_Star;
    GoodRod: The1_Star;
    SuperRod: The1_Star;
}

export interface CeladonCity {
    name: string;
    SurfMons: The1_Star;
    OldRod: The1_Star;
    GoodRod: The1_Star;
    SuperRod: The1_Star;
    GameCorner: The1_Star;
    RedShard: The1_Star;
    GreenShard: The1_Star;
    BlueShard: The1_Star;
    YellowShard: The1_Star;
    Trade: The1_Star;
    Gift: The1_Star;
}

export interface CeruleanCave {
    name: string;
    "4Star": The1_Star;
    "5Star": The1_Star;
    "6Star": The1_Star;
    Gift?: The1_Star;
    Secret: The1_Star;
    Static?: The1_Star;
}

export interface CeruleanCave2F {
    name: string;
    LandMonsDay: The1_Star;
    LandMonsNight: The1_Star;
    Static?: The1_Star;
    Gift?: The1_Star;
    "3Star"?: The1_Star;
    Trade?: The1_Star;
    "1Star"?: The1_Star;
    "2Star"?: The1_Star;
}

export interface DiglettsCave {
    name: string;
    "2Star": The1_Star;
}

export interface MTEmber1F {
    name: string;
    LandMonsNight: The1_Star;
}

export interface MTMoon {
    name: string;
    "1Star": The1_Star;
    "3Star": The1_Star;
    Static: The1_Star;
}

export interface OneIsland {
    name: string;
    Gift: The1_Star;
    Roaming: The1_Star;
}

export interface PkmnTower {
    name: string;
    PostGameLandMons: The1_Star;
    PostGameLandMons2: The1_Star;
    Secret: The1_Star;
}

export interface PokemonMansion {
    name: string;
    "3Star"?: The1_Star;
    "5Star": The1_Star;
    "6Star": The1_Star;
    Static?: The1_Star;
}

export interface PowerPlant {
    name: string;
    LandMonsDay: The1_Star;
    LandMonsNight: The1_Star;
    "4Star"?: The1_Star;
    "5Star": The1_Star;
    "6Star": The1_Star;
    Static: The1_Star;
    "3Star"?: The1_Star;
}

export interface RockTunnel {
    name: string;
    PostGameNight: The1_Star;
    SmashDay: The1_Star;
    PostGameDay: The1_Star;
    "2Star": The1_Star;
    Static: The1_Star;
    Secret: The1_Star;
}

export interface Route {
    name: string;
    LandMonsDay: The1_Star;
    LandMonsNight: The1_Star;
    "2Star": The1_Star;
    "4Star"?: The1_Star;
    Static?: The1_Star;
    Trade?: The1_Star;
    Gift?: The1_Star;
}

export interface SaffronCity {
    name: string;
    Gift: The1_Star;
}

export interface ThreeIslandPort {
    name: string;
    Day: The1_Star;
}

export interface MoveValue {
    ID: number;
    key: string;
    name: string;
    description: string;
    power: number;
    type: TypeEnum;
    accuracy: number;
    split: Split;
}

export enum Split {
    Physical = "PHYSICAL",
    Special = "SPECIAL",
    Status = "STATUS",
}

export enum TypeEnum {
    Amorphous = "AMORPHOUS",
    Bug = "BUG",
    Dark = "DARK",
    Ditto = "DITTO",
    Dragon = "DRAGON",
    Electric = "ELECTRIC",
    Fairy = "FAIRY",
    Field = "FIELD",
    Fighting = "FIGHTING",
    Fire = "FIRE",
    Flying = "FLYING",
    Ghost = "GHOST",
    Grass = "GRASS",
    Ground = "GROUND",
    HumanLike = "HUMAN_LIKE",
    Ice = "ICE",
    Mineral = "MINERAL",
    Monster = "MONSTER",
    Normal = "NORMAL",
    Poison = "POISON",
    Psychic = "PSYCHIC",
    Rock = "ROCK",
    Steel = "STEEL",
    Undiscovered = "UNDISCOVERED",
    Water = "WATER",
    Water1 = "WATER_1",
    Water2 = "WATER_2",
    Water3 = "WATER_3",
}

export interface Region {
    key: Key;
    name: string;
    variant: string;
    bound: number;
}

export enum Key {
    Alola = "ALOLA",
    Galar = "GALAR",
    Hisui = "HISUI",
    Hoenn = "HOENN",
    Johto = "JOHTO",
    Kalos = "KALOS",
    Kanto = "KANTO",
    Paldea = "PALDEA",
    SeviiIslands = "SEVII_ISLANDS",
    Sinnoh = "SINNOH",
    Unova = "UNOVA",
}

export interface Species {
    ID: number;
    key: string;
    dexID: number;
    stats: ChangelogStats;
    abilities: Abilities;
    type: EggGroupClass;
    family: Family;
    learnset: Learnset;
    cap: SpeciesCap;
    name: string;
    items?: Items;
    changelog?: Changelog;
    compareKey?: string;
}

export interface Abilities {
    primary?: string;
    hidden?: string;
    secondary?: string;
}

export interface SpeciesCap {
    locations?: Array<string[]>;
    normal?: number;
    hardcore?: number;
}

export interface Changelog {
    stats?: ChangelogStats;
    unique?: boolean;
    abilities?: Abilities;
    type?: EggGroupClass;
}

export interface ChangelogStats {
    spAttack?: number;
    HP?: number;
    attack?: number;
    speed?: number;
    defense?: number;
    spDefense?: number;
    total?: number;
}

export interface EggGroupClass {
    primary: TypeEnum;
    secondary?: TypeEnum;
}

export interface Family {
    eggGroup: EggGroupClass;
    evolutions?: Array<Array<number | string>>;
    ancestor: string;
    region: Key;
    forms?: string[];
    form?: string;
    variant?: number;
}

export interface Items {
    rare?: string;
    common?: string;
}

export interface Learnset {
    levelup: Array<Array<number | string>>;
    egg?: string[];
    TM?: Tm[];
    tutor?: Tutor[];
    prevo?: Array<Array<number | string>>;
    event?: string[];
}

export enum Tm {
    Acrobatics = "ACROBATICS",
    Aerialace = "AERIALACE",
    Blizzard = "BLIZZARD",
    Bodypress = "BODYPRESS",
    Bravebird = "BRAVEBIRD",
    Brickbreak = "BRICKBREAK",
    Bulkup = "BULKUP",
    Bulldoze = "BULLDOZE",
    Bulletseed = "BULLETSEED",
    Calmmind = "CALMMIND",
    Chargebeam = "CHARGEBEAM",
    Cosmicpower = "COSMICPOWER",
    Cut = "CUT",
    Darkpulse = "DARKPULSE",
    Dazzlinggleam = "DAZZLINGGLEAM",
    Defog = "DEFOG",
    Dig = "DIG",
    Dracobarrage = "DRACOBARRAGE",
    Dragonclaw = "DRAGONCLAW",
    Dragondance = "DRAGONDANCE",
    Dragonpulse = "DRAGONPULSE",
    Dragontail = "DRAGONTAIL",
    Drainingkiss = "DRAININGKISS",
    Drainpunch = "DRAINPUNCH",
    Dualchop = "DUALCHOP",
    Dualwingbeat = "DUALWINGBEAT",
    Earthquake = "EARTHQUAKE",
    Electroweb = "ELECTROWEB",
    Energyball = "ENERGYBALL",
    Expandingforce = "EXPANDINGFORCE",
    Explosion = "EXPLOSION",
    Facade = "FACADE",
    Fireblast = "FIREBLAST",
    Flamecharge = "FLAMECHARGE",
    Flamethrower = "FLAMETHROWER",
    Flash = "FLASH",
    Flashcannon = "FLASHCANNON",
    Flipturn = "FLIPTURN",
    Fly = "FLY",
    Focusblast = "FOCUSBLAST",
    Focuspunch = "FOCUSPUNCH",
    Frostbreath = "FROSTBREATH",
    Futuresight = "FUTURESIGHT",
    Gigadrain = "GIGADRAIN",
    Grassknot = "GRASSKNOT",
    Grassyglide = "GRASSYGLIDE",
    Gyroball = "GYROBALL",
    Heatcrash = "HEATCRASH",
    Hiddenpower = "HIDDENPOWER",
    Hypervoice = "HYPERVOICE",
    Icebeam = "ICEBEAM",
    Icespinner = "ICESPINNER",
    Icywind = "ICYWIND",
    Irontail = "IRONTAIL",
    Leechlife = "LEECHLIFE",
    Lightscreen = "LIGHTSCREEN",
    Lowkick = "LOWKICK",
    Lowsweep = "LOWSWEEP",
    Meteorbeam = "METEORBEAM",
    Mistyexplosion = "MISTYEXPLOSION",
    Overheat = "OVERHEAT",
    Pluck = "PLUCK",
    Poisonjab = "POISONJAB",
    Poltergeist = "POLTERGEIST",
    Poweruppunch = "POWERUPPUNCH",
    Protect = "PROTECT",
    Psychic = "PSYCHIC",
    Psyshock = "PSYSHOCK",
    REST = "REST",
    Raindance = "RAINDANCE",
    Reflect = "REFLECT",
    Return = "RETURN",
    Risingvoltage = "RISINGVOLTAGE",
    Roar = "ROAR",
    Rockpolish = "ROCKPOLISH",
    Rockslide = "ROCKSLIDE",
    Rocksmash = "ROCKSMASH",
    Rocktomb = "ROCKTOMB",
    Roost = "ROOST",
    Sandstorm = "SANDSTORM",
    Scald = "SCALD",
    Scaleshot = "SCALESHOT",
    Scorchingsands = "SCORCHINGSANDS",
    Shadowball = "SHADOWBALL",
    Shadowclaw = "SHADOWCLAW",
    Silverwind = "SILVERWIND",
    Sleeptalk = "SLEEPTALK",
    Sludgebomb = "SLUDGEBOMB",
    Sludgewave = "SLUDGEWAVE",
    Smackdown = "SMACKDOWN",
    Snarl = "SNARL",
    Snowscape = "SNOWSCAPE",
    Solarbeam = "SOLARBEAM",
    Solarblade = "SOLARBLADE",
    Stealthrock = "STEALTHROCK",
    Steelbeam = "STEELBEAM",
    Steelwing = "STEELWING",
    Stoneedge = "STONEEDGE",
    Strength = "STRENGTH",
    Substitute = "SUBSTITUTE",
    Sunnyday = "SUNNYDAY",
    Superpower = "SUPERPOWER",
    Surf = "SURF",
    Swordsdance = "SWORDSDANCE",
    Taunt = "TAUNT",
    Teleport = "TELEPORT",
    Thief = "THIEF",
    Thunder = "THUNDER",
    Thunderbolt = "THUNDERBOLT",
    Thunderwave = "THUNDERWAVE",
    Toxic = "TOXIC",
    Trailblaze = "TRAILBLAZE",
    Trickroom = "TRICKROOM",
    Tripleaxel = "TRIPLEAXEL",
    Uturn = "UTURN",
    Venoshock = "VENOSHOCK",
    Voltswitch = "VOLTSWITCH",
    Waterfall = "WATERFALL",
    Wildcharge = "WILDCHARGE",
    Willowisp = "WILLOWISP",
    Workup = "WORKUP",
    Xscissor = "XSCISSOR",
}

export enum Tutor {
    Airslash = "AIRSLASH",
    Aurasphere = "AURASPHERE",
    Blastburn = "BLASTBURN",
    Blazekick = "BLAZEKICK",
    Bodyslam = "BODYSLAM",
    Bugbite = "BUGBITE",
    Bugbuzz = "BUGBUZZ",
    Celebrate = "CELEBRATE",
    Closecombat = "CLOSECOMBAT",
    Darkhole = "DARKHOLE",
    Dracometeor = "DRACOMETEOR",
    Drillrun = "DRILLRUN",
    Earthpower = "EARTHPOWER",
    Firefang = "FIREFANG",
    Firepunch = "FIREPUNCH",
    Flareblitz = "FLAREBLITZ",
    Foulplay = "FOULPLAY",
    Frenzyplant = "FRENZYPLANT",
    Gunkshot = "GUNKSHOT",
    Heatwave = "HEATWAVE",
    Hex = "HEX",
    Highhorsepower = "HIGHHORSEPOWER",
    Hurricane = "HURRICANE",
    Hydrocannon = "HYDROCANNON",
    Hydropump = "HYDROPUMP",
    Icefang = "ICEFANG",
    Icepunch = "ICEPUNCH",
    Iciclespear = "ICICLESPEAR",
    Irondefense = "IRONDEFENSE",
    Ironhead = "IRONHEAD",
    Knockoff = "KNOCKOFF",
    Leafblade = "LEAFBLADE",
    Liquidation = "LIQUIDATION",
    Megahorn = "MEGAHORN",
    Mysticalfire = "MYSTICALFIRE",
    Nastyplot = "NASTYPLOT",
    Painsplit = "PAINSPLIT",
    Phantomforce = "PHANTOMFORCE",
    Pinmissile = "PINMISSILE",
    Playrough = "PLAYROUGH",
    Powergem = "POWERGEM",
    Powerwhip = "POWERWHIP",
    Psychicfangs = "PSYCHICFANGS",
    Rockblast = "ROCKBLAST",
    Seedbomb = "SEEDBOMB",
    Stompingtantrum = "STOMPINGTANTRUM",
    Storedpower = "STOREDPOWER",
    Tailslap = "TAILSLAP",
    Tailwind = "TAILWIND",
    Thunderfang = "THUNDERFANG",
    Thunderpunch = "THUNDERPUNCH",
    Weatherball = "WEATHERBALL",
    Zenheadbutt = "ZENHEADBUTT",
}

export interface Splits {
    SPECIAL: Ability;
    PHYSICAL: Ability;
    STATUS: Ability;
}

export interface PokedexStats {
    HP: string;
    attack: string;
    defense: string;
    spAttack: string;
    spDefense: string;
    speed: string;
    total: string;
}

export interface TypeValue {
    ID: number;
    key: TypeEnum;
    defensive: { [key: string]: number };
    name: string;
    color: string;
}
