using FluentMigrator;

namespace whey.Migrations.DefaultDB;
[DefaultDB, MigrationKey(20251119_1402)]
public class DefaultDB_20251119_1402 : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("DanhMucSanPham")
             .WithColumn("MaLoai").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("TenLoai").AsString(100).NotNullable()
                .WithColumn("MoTa").AsString(int.MaxValue).Nullable();
    }
}
