// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = {
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
    id: 'application',
    title: <FormattedMessage id="application" />,
    type: 'group',
    children: [
        {
            id: 'users',
            title: <FormattedMessage id="users" />,
            type: 'collapse',
            icon: icons.IconUserCheck,
            children: [
                {
                    id: 'posts',
                    title: <FormattedMessage id="social-profile" />,
                    type: 'item',
                    url: '/user/social-profile/posts'
                },
                {
                    id: 'account-profile',
                    title: <FormattedMessage id="account-profile" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'profile1',
                            title: (
                                <>
                                    <FormattedMessage id="profile" /> 01
                                </>
                            ),
                            type: 'item',
                            url: '/user/account-profile/profile1'
                        },
                        {
                            id: 'profile2',
                            title: (
                                <>
                                    <FormattedMessage id="profile" /> 02
                                </>
                            ),
                            type: 'item',
                            url: '/user/account-profile/profile2'
                        },
                        {
                            id: 'profile3',
                            title: (
                                <>
                                    <FormattedMessage id="profile" /> 03
                                </>
                            ),
                            type: 'item',
                            url: '/user/account-profile/profile3'
                        }
                    ]
                },
                {
                    id: 'user-card',
                    title: <FormattedMessage id="cards" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'card1',
                            title: (
                                <>
                                    <FormattedMessage id="style" /> 01
                                </>
                            ),
                            type: 'item',
                            url: '/user/card/card1'
                        },
                        {
                            id: 'card2',
                            title: (
                                <>
                                    <FormattedMessage id="style" /> 02
                                </>
                            ),
                            type: 'item',
                            url: '/user/card/card2'
                        },
                        {
                            id: 'card3',
                            title: (
                                <>
                                    <FormattedMessage id="style" /> 03
                                </>
                            ),
                            type: 'item',
                            url: '/user/card/card3'
                        }
                    ]
                },
                {
                    id: 'user-list',
                    title: <FormattedMessage id="list" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'list1',
                            title: (
                                <>
                                    <FormattedMessage id="style" /> 01
                                </>
                            ),
                            type: 'item',
                            url: '/user/list/list1'
                        },
                        {
                            id: 'list2',
                            title: (
                                <>
                                    <FormattedMessage id="style" /> 02
                                </>
                            ),
                            type: 'item',
                            url: '/user/list/list2'
                        }
                    ]
                }
            ]
        },
        {
            id: 'customer',
            title: <FormattedMessage id="customer" />,
            type: 'collapse',
            icon: icons.IconBasket,
            children: [
                {
                    id: 'customer-list',
                    title: <FormattedMessage id="customer-list" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: false
                },
                {
                    id: 'order-list',
                    title: <FormattedMessage id="order-list" />,
                    type: 'item',
                    url: '/customer/order-list',
                    breadcrumbs: false
                },
                {
                    id: 'create-invoice',
                    title: <FormattedMessage id="create-invoice" />,
                    type: 'item',
                    url: '/customer/create-invoice',
                    breadcrumbs: false
                },
                {
                    id: 'order-details',
                    title: <FormattedMessage id="order-details" />,
                    type: 'item',
                    url: '/customer/order-details'
                },
                {
                    id: 'product',
                    title: <FormattedMessage id="product" />,
                    type: 'item',
                    url: '/customer/product',
                    breadcrumbs: false
                },
                {
                    id: 'product-review',
                    title: <FormattedMessage id="product-review" />,
                    type: 'item',
                    url: '/customer/product-review',
                    breadcrumbs: false
                }
            ]
        },
        // {
        //     id: 'chat',
        //     title: <FormattedMessage id="chat" />,
        //     type: 'item',
        //     icon: icons.IconMessages,
        //     url: '/app/chat'
        // },
        // {
        //     id: 'kanban',
        //     title: 'Kanban',
        //     type: 'item',
        //     icon: icons.IconLayoutKanban,
        //     url: '/app/kanban/board'
        // },
        {
            id: 'mail',
            title: <FormattedMessage id="mail" />,
            type: 'item',
            icon: icons.IconMail,
            url: '/app/mail'
        },
        {
            id: 'publish',
            title: <FormattedMessage id="publish" />,
            type: 'item',
            url: '/publish',
            forPublisher: false,
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'print',
            title: <FormattedMessage id="print" />,
            type: 'item',
            url: '/print',
            forPublisher: false,
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'books',
            title: <FormattedMessage id="books" />,
            type: 'item',
            url: '/books',
            forPublisher: false,
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'print-queue',
            title: <FormattedMessage id="print-queue" />,
            type: 'item',
            url: '/print-queue',
            forPublisher: false,
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'authors',
            title: <FormattedMessage id="authors" />,
            type: 'item',
            url: '/authors',
            forPublisher: true,
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'blogs',
            title: <FormattedMessage id="blogs" />,
            type: 'collapse',
            forPublisher: false,
            icon: icons.IconBasket,
            children: [
                {
                    id: 'add-blog',
                    title: <FormattedMessage id="add-blog" />,
                    type: 'item',
                    url: '/blogs/AddBlog',
                    breadcrumbs: false
                },
                {
                    id: 'view-blogs',
                    title: <FormattedMessage id="view-blogs" />,
                    type: 'item',
                    url: 'view-blogs',
                    breadcrumbs: false
                },
            ]
        },
        {
            id: 'authorPayments',
            title: <FormattedMessage id="authorPayments" />,
            type: 'item',
            url: '/author-payments',
            forPublisher: true,
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'allBooks',
            title: <FormattedMessage id="allBooks" />,
            type: 'item',
            url: '/all-books',
            forPublisher: true,
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'allBlogs',
            title: <FormattedMessage id="allBlogs" />,
            type: 'item',
            url: '/all-blogs',
            forPublisher: true,
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'serviceFees',
            title: <FormattedMessage id="serviceFees" />,
            type: 'item',
            url: '/services-fees',
            forPublisher: true,
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'pubPrintQueue',
            title: <FormattedMessage id="pubPrintQueue" />,
            type: 'item',
            url: '/pubPrint-Queue',
            forPublisher: true,
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        // {
        //     id: 'calendar',
        //     title: <FormattedMessage id="calendar" />,
        //     type: 'item',
        //     url: '/app/calendar',
        //     icon: icons.IconCalendar,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'contact',
        //     title: <FormattedMessage id="contact" />,
        //     type: 'collapse',
        //     icon: icons.IconNfc,
        //     children: [
        //         {
        //             id: 'c-card',
        //             title: <FormattedMessage id="cards" />,
        //             type: 'item',
        //             url: '/app/contact/c-card',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'c-list',
        //             title: <FormattedMessage id="list" />,
        //             type: 'item',
        //             url: '/app/contact/c-list',
        //             breadcrumbs: false
        //         }
        //     ]
        // },
        {
            id: 'e-commerce',
            title: <FormattedMessage id="e-commerce" />,
            type: 'collapse',
            icon: icons.IconBasket,
            children: [
                {
                    id: 'products',
                    title: <FormattedMessage id="products" />,
                    type: 'item',
                    url: '/e-commerce/products'
                },
                {
                    id: 'product-details',
                    title: <FormattedMessage id="product-details" />,
                    type: 'item',
                    url: '/e-commerce/product-details/default',
                    breadcrumbs: false
                },
                {
                    id: 'product-list',
                    title: <FormattedMessage id="product-list" />,
                    type: 'item',
                    url: '/e-commerce/product-list',
                    breadcrumbs: false
                },
                {
                    id: 'checkout',
                    title: <FormattedMessage id="checkout" />,
                    type: 'item',
                    url: '/e-commerce/checkout'
                }
            ]
        }
    ]
};

export default application;
