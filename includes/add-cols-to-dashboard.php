<?php

function add_event_date_col($columns) {
    $columns['event_date'] = 'Event Date';

    return $columns;
}

add_filter('manage_event_posts_columns', 'add_event_date_col');

function populate_event_date_col($column_name, $post_id) {
    $meta_field = get_post_meta($post_id, 'emmguten_event_start_date', true);

    switch($column_name) {
        case 'event_date':
            echo $meta_field;
            break;
        default:
            echo 'Not working!';
    }

}

add_action('manage_event_posts_custom_column', 'populate_event_date_col', 10, 2);