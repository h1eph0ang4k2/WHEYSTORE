using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1406)]
public class DefaultDB_20251122_1406_DanhMucTinTuc : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("DanhMucTinTuc")
            .WithColumn("MaDM").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("TenDM").AsString(150).NotNullable()
            .WithColumn("Slug").AsString(200).NotNullable()
            .WithColumn("MoTa").AsString(500).Nullable()
            .WithColumn("ThuTu").AsInt32().NotNullable().WithDefaultValue(0)
            .WithColumn("HienThi").AsBoolean().NotNullable().WithDefaultValue(true);
    }
}

