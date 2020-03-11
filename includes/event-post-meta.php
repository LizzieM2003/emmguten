<?php

// register custom test event date meta field
function emm_guten_register_event_meta()
{

    register_post_meta('event', 'emmguten_event_start_date', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ));


    register_post_meta('event', 'emmguten_event_end_time', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ));
}

add_action('init', 'emm_guten_register_event_meta');
