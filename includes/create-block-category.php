<?php 

// add custom gutenberg block category

function emm_guten_block_categories($categories, $post)
{
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'emmguten-category',
                'title' => __('EMM Category', 'emm-guten'),
                'icon' => 'wordpress'
            )
        )
    );
}

add_filter('block_categories', 'emm_guten_block_categories', 10, 2);
