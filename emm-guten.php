<?php
/**
 * Plugin Name:       EMM Gutenberg Events
 * Description:       Creates the events post type and Gutenberg block
 * Version:           1.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Liz Mendes
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       emm-events
 */

if (!defined('ABSPATH')) {
    exit;
}

include_once('includes/event-post-type.php'); // create event custom post type
include_once('includes/event-post-meta.php'); // create meta data for event post type
include_once('includes/create-block-category.php');
include_once('includes/style-post-title.php');
include_once('includes/add-cols-to-dashboard.php');



/** Register script for custom gutenberg blocks.
 * Due to webpack setup only need to enqueue one script even if
 * there are multiple blocks */

function emm_guten_register_blocks()
{
    // automatically load dependencies and version
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');
 
    wp_register_script(
        'emm-guten-blocks-editor-script',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_register_style(
        'emm-guten-blocks-editor',
        plugins_url('/build/editor.css', __FILE__),
        array( 'wp-edit-blocks' ),
        filemtime(plugin_dir_path(__FILE__) . 'build/editor.css')
    );
 
    wp_register_style(
        'emm-guten-blocks',
        plugins_url('/build/style.css', __FILE__),
        array( ),
        filemtime(plugin_dir_path(__FILE__) . 'build/style.css')
    );

    register_block_type('emm-guten/event-meta', array(
        'editor_script' => 'emm-guten-blocks-editor-script', // javascript file that will be enqueued in gutenberg editor page
        // 'script'
         'style' => 'emm-guten-blocks', // css stylesheet for both front and backend
         'editor_style' => 'emm-guten-blocks-editor' // css stylesheet for gutenberg
    ));

}
add_action('init', 'emm_guten_register_blocks');

include_once('includes/register-event-template.php');


/** Add styles to core blocks */
function emm_guten_enqueue()
{
    wp_enqueue_script(
        'emm-guten-script',
        plugins_url('emmguten.js', __FILE__),
        array( 'wp-blocks' )
    );
}
add_action('enqueue_block_editor_assets', 'emm_guten_enqueue');


/** Style sheet for styles defined in js file above */
function emm_guten_stylesheet()
{
    wp_enqueue_style('emm_guten-style', plugins_url('style.css', __FILE__));
}
add_action('enqueue_block_assets', 'emm_guten_stylesheet');

