CREATE TABLE IF NOT EXISTS user (
    id integer NOT NULL  PRIMARY KEY,
    name varchar(20) NOT NULL,
    membershipType integer NOT NULL,
    membershipId integer NOT NULL
);

CREATE TABLE IF NOT EXISTS loadout (
    id integer NOT NULL  PRIMARY KEY,
    name varchar(20) NOT NULL,
    head integer NOT NULL,
    chest integer NOT NULL,
    arms integer NOT NULL,
    legs integer NOT NULL,
    class_item integer NOT NULL,
    primary_weap integer NOT NULL,
    special_weap integer NOT NULL,
    heavy_weap integer NOT NULL,
    class integer NOT NULL,
    user_id integer NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id)
);