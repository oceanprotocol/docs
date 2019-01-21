
./node_modules/typedoc/bin/typedoc \
    --json ./external/squid-js/squid-js.json ./external/squid-js/src/squid.ts \
    --excludePrivate \
    --excludeExternals \
    --excludeProtected \
    --target ES6
