<?php

// set block template for test event post type
function emm_guten_register_event_template()
{
    $post_type_object = get_post_type_object('event');
    $post_type_object->template = array(
        array( 'emm-guten/event-meta' ),
        array('core/paragraph',  array('placeholder' => 'Add Event Details Here...'))
    );
    $post_type_object->template_lock = 'all';
}
add_action('init', 'emm_guten_register_event_template');
