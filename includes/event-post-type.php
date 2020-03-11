<?php

function emm_event_post_type()
{
    $labels = array(
        'name'                => _x('Events', 'Post Type General Name', 'emm-events'),
        'singular_name'       => _x('Event', 'Post Type Singular Name', 'emm-events'),
        'menu_name'           => __('Events', 'emm-events'),
        'parent_item_colon'   => __('Parent Events ', 'emm-events'),
        'all_items'           => __('All Events', 'emm-events'),
        'view_item'           => __('View Event', 'emm-events'),
        'add_new_item'        => __('Add New Event', 'emm-events'),
        'add_new'             => __('Add New Event', 'emm-events'),
        'edit_item'           => __('Edit Events', 'emm-events'),
        'update_item'         => __('Update Events', 'emm-events'),
        'search_items'        => __('Search Events', 'emm-events'),
        'not_found'           => __('Not Found', 'emm-events'),
        'not_found_in_trash'  => __('Not Found in Trash', 'emm-events'),
    );


    $args = array(
        'label'               => __('Events', 'emm-events'),
        'description'         => __('Events', 'emm-events'),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'author', 'thumbnail', 'revisions', 'custom-fields', ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-calendar-alt',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'capability_type'     => 'post',
        'show_in_rest' => true // support gutenberg
    );

    register_post_type('event', $args);
}

function emm_event_install()
{
    // trigger our function that registers the custom post type
    emm_event_post_type();
 
    // clear the permalinks after the post type has been registered
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'emm_event_install');


add_action('init', 'emm_event_post_type', 0);
