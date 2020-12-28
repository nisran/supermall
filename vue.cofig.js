module.exports = {
    configureWebpack: {
        resolve: {
            /**
             * 别名
             *  @:表示src
             */
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                /**
                 * router和store不需要配置，因为所有的地方否可以通过this.$router或者this.$store获取
                 */

            }
        }
    }
}