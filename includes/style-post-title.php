<?php

function style_post_title() {
    $screen = get_current_screen();
    
    if ($screen->id === 'event') { ?>
    <style>
        .editor-post-title__input {
            font-size: 20px !important;
            color: #777 !important;
            text-transform: capitalize !important;
        }
    </style>
<?php }
}

add_action('admin_footer', 'style_post_title');
