<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'psndevelopment' );

/** MySQL database username */
define( 'DB_USER', 'janejamespsn' );

/** MySQL database password */
define( 'DB_PASSWORD', 'a]QK(fZb6NFPg9dJ' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'V[<.wz`L8bvfT)EdPx*|nIH8*S$nm`gp;QgC!]K1[FB j>;Vq] ny->?t F*B|7.' );
define( 'SECURE_AUTH_KEY',  '9,VIyTqI>Sh$csMrHTmHsuWLss,5#2h]|@%O8=Ck-IE4O];y<!4`SYjmUcf3}~,L' );
define( 'LOGGED_IN_KEY',    'VT$9cdc StkiLO%pICit$FT1fT@,9l=`+!gsdxgeAcBum>]zJ>}O.-h*3f]9HW]y' );
define( 'NONCE_KEY',        'S}.Y0p@r)8=MQ45#2zH)6P:Lwh9_}tb|T@oR*pN9s+JN=@bM1Qz)#/<R6[2YHs?S' );
define( 'AUTH_SALT',        'q;:?[eVKH`AcTdSfK0)b/iyqW-[_JJDmgx&uuh;syh_y1~;LC(9WqB?e4vTr/ >d' );
define( 'SECURE_AUTH_SALT', '{N%)*.=nHN*&Aq{-VHFomH$Sc!|zsBO&)i,5nJ!D0j t+SoHSnmY$;{0z:<^biNc' );
define( 'LOGGED_IN_SALT',   '|c*h`m=b.{WqIK4e6N9=QS?ZmTCi4nU?LN,o0jftim%#HGT*3d~UxOSEiSBq}b,P' );
define( 'NONCE_SALT',       'AJ#P,cLxzZ~:NEh<8uX^I.n/U,14?^a-$KmV{#%s=;E?aO#E7FN 1A_H;QL~.22a' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
