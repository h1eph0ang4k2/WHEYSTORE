using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1412)]
public class DefaultDB_20251122_1412_SanPhamHuongVi : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("SanPhamHuongVi")
     .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
     .WithColumn("SanPhamId").AsInt32().NotNullable()
      .ForeignKey("FK_SanPhamHuongVi_SanPham", "SanPham", "MaSp")
     .WithColumn("TenHuongVi").AsString(100).NotNullable()
     .WithColumn("IsDefault").AsBoolean().NotNullable().WithDefaultValue(false);
    }
}