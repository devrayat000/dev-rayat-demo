import { config } from "@keystone-6/core";
import { PORT, DATABASE_URL } from "./config";
import { lists } from "./schema";
import { withAuth, session } from "./auth";

export default withAuth(
  config({
    db: {
      provider: "postgresql",
      useMigrations: true,
      url: DATABASE_URL,
    },
    server: { port: PORT },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);

// storage-account-name=demostoragerayat
// storage-key=iTkZ3TVVlanYGtDKemaOAeVfyR7mFld5id2jlS6a5U83PNuLWQmzP+PQ2svJczxm0y7QKDmyCTGw+AStFTrM6g==

// db-server=demo-dev-db.postgres.database.azure.com
// db-admin=demo@demo-dev-db
// db-url=postgres://demo@demo-dev-db:ppooii12!@demo-dev-db.postgres.database.azure.com:5432/portfolio
// db-cli=psql --host demo-dev-db.postgres.database.azure.com --user demo@demo-dev-db --port=5432 --dbname postgres

// deploy=https://camo.githubusercontent.com/bad3d579584bd4996af60a96735a0fdcb9f402933c139cc6c4c4a4577576411f/68747470733a2f2f616b612e6d732f6465706c6f79746f617a757265627574746f6e
// https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Faaronpowell%2Fkeystone-6-azure-example%2Fmain%2F.azure%2Fazuredeploy.json
