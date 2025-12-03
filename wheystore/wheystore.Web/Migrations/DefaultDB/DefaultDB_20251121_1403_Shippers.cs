using FluentMigrator;

namespace whey.Migrations.DefaultDB;
[DefaultDB, MigrationKey(20251121_1404)]
public class DefaultDB_20251121_1404 : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("Shipper")

            .WithColumn("MaShipper").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("MaShipperCode").AsString(20).Nullable()
            .WithColumn("TenCongTy").AsString(150).NotNullable()
            .WithColumn("TenShipper").AsString(100).Nullable()
            .WithColumn("SoDienThoai").AsString(24).Nullable();
    }
}